import { Link } from 'react-router-dom';
import NextLink from './NextLink';
import ResumeImg from '../assets/resume.jpg';
import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="mb-10">
          <h1 className="title">Resume.</h1>
          <p className="paragraph">
            Reach out to me via my{' '}
            <Link to="/contact" className="resume-link">
              contact page
            </Link>
            .{' '}
            <a href="https://drive.google.com/file/d/1vW0jnhsuQveeHUgO49zvkD_EKNrA-3LP/view?usp=sharing" className="resume-link" target="_blank" rel="noreferrer">
              view
            </a>{' '}
            or{' '}
            <a href="https://docs.google.com/uc?export=download&id=1vW0jnhsuQveeHUgO49zvkD_EKNrA-3LP" className="resume-link" target="_blank" rel="noreferrer">
              download
            </a>{' '}
            the resume
          </p>
        </div>
        <div className="resume">
          <img src={ResumeImg} alt="resume" />
        </div>
        <div className="mb-24 md:mb-0">
          <NextLink link="/contact" description="Are you convinced to contact me now ?" />
        </div>
      </div>
      <div>
        <h1 className="bg-text text-v">Resume.</h1>
      </div>
    </section>
  );
};

export default Resume;
