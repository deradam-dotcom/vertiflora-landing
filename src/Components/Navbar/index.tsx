import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import NavMenu from './NavMenu';
import CloseIcon from '../../images/Icons/closeIcon.inline.svg';

const CustomNavbar = () => {
	const [isClicked, setIsClicked] = useState(false);
	const showCloseIcon = () => setIsClicked(!isClicked);

	return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="none"
      variant="light"
      className="text-right text-lg-left align-items-start px-4 pt-4"
    >
      <Navbar.Brand href="/" className="d-none d-md-block ml-auto">
        <StaticImage
          height={60}
          src="../../images/Brand/logo.png"
          alt="Veritgo logo"
          placeholder="blurred"
          className="ml-5"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ border: "none", outline: "none", boxShadow: "none" }}
        onClick={showCloseIcon}
      >
        {isClicked && <CloseIcon />}
      </Navbar.Toggle>
      <Navbar.Collapse
        className="mobile-nav justify-content-end mw-100"
        id="responsive-navbar-nav"
      >
        <NavMenu />
      </Navbar.Collapse>
      <div
        className="custom-mobileNav"
        style={{ left: isClicked ? "0" : "-100%" }}
      >
        <NavMenu />
      </div>
      {/* Brand for mobile view */}
      <div className="ml-auto d-lg-none">
        <Navbar.Brand href="/">
          <StaticImage
            height={60}
            src="../../images/Brand/logo.png"
            alt="Veritgo logo"
            placeholder="blurred"
          />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
