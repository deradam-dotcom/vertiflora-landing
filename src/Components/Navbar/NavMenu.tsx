import React from 'react';
import { Nav } from 'react-bootstrap';
import CtaButton from '../Buttons/CtaButton';

const NavMenu = () => {
	return (
    <Nav className="ml-auto">
      <Nav.Item className="lg:flex lg:items-center p-[27px] text-left font-sharp font-normal text-lead text-[14px] tracking-[0.20px] leading-[normal] whitespace-nowrap">
        <Nav.Link href="#" eventKey="link-1" className="mr-7">
          Rólunk
        </Nav.Link>
        <Nav.Link href="#" eventKey="link-2" className="mr-7">
          Zöldfalak
        </Nav.Link>
        <Nav.Link href="#" eventKey="link-3" className="mr-7">
          Referenciák
        </Nav.Link>
        <Nav.Link href="#" eventKey="link-4" className="mr-7">
          Kapcsolat
        </Nav.Link>
        <Nav.Item className="ml-auto flex">
          <CtaButton
            title="Azonnali ajánlat"
            hasIcon={false}
            path="#"
            isSmallFont={true}
          />
        </Nav.Item>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
