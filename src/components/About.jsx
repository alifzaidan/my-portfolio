import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SiTailwindcss } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaReact, FaFigma } from 'react-icons/fa';
import NextLink from './NextLink';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Helmet>
        <title>About Me | Muchammad Alif Zaidan</title>
      </Helmet>
      <div className="wrapper">
        <div className="mb-10">
          <h1 className="title">About Me.</h1>
          <p className="paragraph mb-10">Hello! My name is Alif and I enjoy creating things that live on the internet. I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
          <h3 className="text-xl font-bold text-black dark:text-focus md:text-2xl">My Technologies.</h3>
          <ul className="py-4">
            <li className="grid grid-cols-4 gap-x-10 gap-y-4 text-4xl md:flex">
              <FaHtml5 className="logo-tech" />
              <FaCss3Alt className="logo-tech" />
              <FaJs className="logo-tech" />
              <FaSass className="logo-tech" />
              <FaBootstrap className="logo-tech" />
              <SiTailwindcss className="logo-tech" />
              <FaReact className="logo-tech" />
              <FaFigma className="logo-tech" />
            </li>
          </ul>
        </div>
        <div className="mb-24 md:mb-0">
          <NextLink link="/projects" description="Lets Continue To Projects" />
        </div>
      </div>
      <div>
        <h1 className="bg-text text-h">About Me.</h1>
      </div>
    </section>
  );
};

export default About;
