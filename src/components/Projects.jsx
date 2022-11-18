import BookshelfApp from '../assets/projects/BookshelfApp.png';
import CookIt from '../assets/projects/CookIt.png';
import { useEffect } from 'react';
import NextLink from './NextLink';

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
          <div style={{ backgroundImage: `url(${CookIt})` }} className="card group">
            <div className="card-content opacity-0 group-hover:opacity-100">
              <span className="card-title">Cook It</span>
              <span className="card-description">Find the recipe you will cook</span>
              <div className="text-center">
                <a href="https://cookit-recipes.netlify.app/">
                  <button className="card-button">Demo</button>
                </a>
                <a href="https://github.com/alifzaidan/cook-it">
                  <button className="card-button">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24 md:mb-0">
          <NextLink link="/contact" description="Are you convinced to contact me now ?" />
        </div>
      </div>
      <div>
        <h1 className="bg-text text-v">Projects.</h1>
      </div>
    </section>
  );
};

export default Projects;
