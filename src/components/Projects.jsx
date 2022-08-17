import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BookshelfApp from '../assets/projects/BookshelfApp.png';
import TourGuide from '../assets/projects/TourGuide.png';
import ConverseStore from '../assets/projects/ConverseStore.png';
import WonderfulIndonesia from '../assets/projects/WonderfulIndonesia.png';
import LandingPage from '../assets/projects/LandingPage.png';
import { useEffect } from 'react';

const Projects = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-content')) {
      e.target.classList.remove('opacity-0');
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="mb-10">
          <h1 className="title">Projects.</h1>
          <p className="paragraph">Check out some of my recent projects.</p>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div style={{ backgroundImage: `url(${BookshelfApp})` }} className="card group">
            <div className="card-content opacity-0 group-hover:opacity-100">
              <span className="card-title">Bookshelf App</span>
              <span className="card-description">Website to add, delete, and mark whether the book has been read or not</span>
              <div className="text-center">
                <a href="https://alifzaidan.github.io/bookshelf-apps/">
                  <button className="card-button">Demo</button>
                </a>
                <a href="https://github.com/alifzaidan/bookshelf-apps">
                  <button className="card-button">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${TourGuide})` }} className="card group">
            <div className="card-content opacity-0 group-hover:opacity-100">
              <span className="card-title">Tour Guide App</span>
              <span className="card-description">Guide you to travel in the Bromo Tengger Semeru area</span>
              <div className="text-center">
                <a href="https://alifzaidan.github.io/web-tour-guide/" rel="noreferrer" target="_blank">
                  <button className="card-button">Demo</button>
                </a>
                <a href="https://github.com/alifzaidan/web-tour-guide" rel="noreferrer" target="_blank">
                  <button className="card-button">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${ConverseStore})` }} className="card group">
            <div className="card-content opacity-0 group-hover:opacity-100">
              <span className="card-title">Converse Store App</span>
              <span className="card-description">An E-commerce Application For Buying Converse Products.</span>
              <div className="text-center">
                <a href="/">
                  <button className="card-button">Demo</button>
                </a>
                <a href="/">
                  <button className="card-button">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${WonderfulIndonesia})` }} className="card group">
            <div className="card-content opacity-0 group-hover:opacity-100">
              <span className="card-title">Wonderfull Indonesia</span>
              <span className="card-description">All about the natural beauty of Indonesia</span>
              <div className="text-center">
                <a href="/">
                  <button className="card-button">Demo</button>
                </a>
                <a href="/">
                  <button className="card-button">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${LandingPage})` }} className="card group">
            <div className="card-content opacity-0 group-hover:opacity-100">
              <span className="card-title">Contact Landing Page</span>
              <span className="card-description">Website landing page for contact menu using SASS</span>
              <div className="text-center">
                <a href="/">
                  <button className="card-button">Demo</button>
                </a>
                <a href="/">
                  <button className="card-button">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24 md:mb-0">
          <Link to="/contact" className="flex w-fit items-center gap-8">
            <p className="next-content">Are you convinced to contact me now ?</p>
            <BsArrowRight className="next-arrow" />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="bg-text text-v">Projects.</h1>
      </div>
    </section>
  );
};

export default Projects;
