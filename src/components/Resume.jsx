import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="mb-10">
          <h1 className="title">Resume.</h1>
          <p className="paragraph">
            Reach out to me via my{' '}
            <Link to="/contact" className="font-bold hover:text-black dark:hover:text-focus">
              contact page
            </Link>
            .{' '}
            <a href="/" className="font-bold hover:text-black dark:hover:text-focus">
              view
            </a>{' '}
            or{' '}
            <a href="/" className="font-bold hover:text-black dark:hover:text-focus">
              download
            </a>{' '}
            the resume
          </p>
        </div>
        <div className="mb-24 md:mb-0">
          <Link to="/contact" className="flex w-fit items-center gap-8">
            <p className="next-content">Are you convinced to contact me now ?</p>
            <BsArrowRight className="next-arrow" />
          </Link>
        </div>
      </div>
      <div>
        <h1 className="bg-text text-v">Resume.</h1>
      </div>
    </section>
  );
};

export default Resume;
