import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="lg:my-18 fixed bottom-0 w-full bg-transparent md:static md:mx-[120px] md:my-10 md:w-0  lg:mx-[216px]">
      <div className="flex h-full w-full items-center justify-evenly p-4 backdrop-blur md:justify-start md:gap-6 md:bg-inherit md:p-0">
        <a href="https://www.facebook.com/profile.php?id=100013369897632" target="_blank" rel="noreferrer" className="footer-link">
          <FaFacebookF />
        </a>
        <a href="https:///instagram.com/zaidanaliff_/" target="_blank" rel="noreferrer" className="footer-link">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/alifzaidan/" target="_blank" rel="noreferrer" className="footer-link">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/alifzaidan/" target="_blank" rel="noreferrer" className="footer-link">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
