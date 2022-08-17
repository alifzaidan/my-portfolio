import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
    <main>
      <div className="mx-6 mt-10 sm:mx-24 md:mx-32 md:mt-16 lg:mx-56 lg:mt-[4.5rem]">
        <div className="mb-10">
          <h1 className="title">I'm Muchammad Alif Zaidan</h1>
          <p className="paragraph mb-3">I’m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on responsive frontend web applications.</p>
          <p className="paragraph">
            Working with my hands to make magic happen on the internet. View my{' '}
            <Link to="/projects">
              <button className="home-link">Projects</button>
            </Link>
            ,{' '}
            {/* <Link to="/resume">
              <button className="home-link">Resume</button>
            </Link>
            ,{' '} */}
            <Link to="/contact">
              <button className="home-link">Contact Me</button>
            </Link>
            , or send me an email at{' '}
            <a href="mailto:muchammadalifzaidan@gmail.com" rel="noopener noreferrer" target="_blank">
              <button className="home-link">muchammadalifzaidan@gmail.com</button>
            </a>
            .
          </p>
        </div>
        <div className="mb-24 md:mb-0">
          <Link to="/about" className="flex w-fit items-center gap-8">
            <p className="next-content">See More About Me</p>
            <BsArrowRight className="next-arrow" />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="bg-text text-h">Hello There.</h1>
      </div>
    </main>
  );
};

export default Home;
