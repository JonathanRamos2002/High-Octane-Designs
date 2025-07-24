import React from 'react';
import { Link } from "react-router";
import { Menu, CalendarCheck2, GalleryVerticalEnd, SunMoon } from "lucide-react";
import Logo from './Logo.jsx';

const NavMenu = () => {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start w-1/2">
    <Logo className="w-1/2 fill-current text-neutral dark:text-white" />
  </div>
  <div className="navbar-end w-1/2">
    <Link to="/notes" className="btn btn-ghost">
      <GalleryVerticalEnd size={48} />
    </Link>
    <button className="btn btn-ghost">
      <CalendarCheck2 size={48} />
    </button>
    <button className="btn btn-ghost dark:text-white" onClick={toggleTheme}>
      <SunMoon size={48} />
    </button>
  </div>
</div>
  );
};
export default NavMenu;
