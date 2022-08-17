import LogoLight from '../assets/logo/LogoLight.svg';
import LogoDark from '../assets/logo/LogoDark.svg';
import { NavLink } from 'react-router-dom';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import useDarkSide from './useDarkSide';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="border-b-[1px] border-light-secondary px-4 pt-10 pb-3 dark:border-dark-bg sm:px-16 sm:pt-12 md:px-24 lg:px-36 lg:pt-16 ">
      <nav className="after flex items-center justify-between ">
        <div className="z-20">
          <NavLink to="/">{colorTheme === 'light' ? <img src={LogoDark} alt="Logo" /> : <img src={LogoLight} alt="Logo" />}</NavLink>
        </div>
        <div className={!nav ? 'hidden md:block' : 'absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-light-bg dark:bg-dark-bg'}>
          <ul className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            {/* <li >
              <NavLink to="/resume" className="nav-link">
                Resume
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li>
              <input type="checkbox" checked={darkSide} onChange={toggleDarkMode} className="hidden" id="toggle" />
              <label htmlFor="toggle">
                <WiMoonAltThirdQuarter className="cursor-pointer text-3xl text-black dark:text-dark-primary" />
              </label>
            </li>
          </ul>
        </div>
        <div onClick={handleClick} className="z-10 cursor-pointer text-2xl text-black dark:text-dark-primary md:hidden">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
