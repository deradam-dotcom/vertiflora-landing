import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContentfulHeader } from '../../pages';
import { Fade } from 'react-awesome-reveal';
import Video from '../Video';
import Navbar from '../Navbar';
import CtaButton from '../Buttons/CtaButton';

interface HeaderProps {
	headerData: ContentfulHeader;
}

const Header: React.FC<HeaderProps> = ({ headerData }) => {
	return (
    <Container fluid className="h-auto mt-3 p-0 rounded rounded-[8px] relative">
      <Video videoData={headerData.backgroundVideo.url} />
      <div className="absolute top-0 left-0 w-full h-full bg-overlay rounded rounded-[8px]"></div>
      <Fade triggerOnce>
        <Row className="absolute top-0 left-0 w-full h-full">
          <Navbar />
          <Col></Col>
          <Col
            md={{ span: 3, offset: 2 }}
            className="flex flex-col items-center h-auto gap-[32px] mx-3 xs:mx-0"
          >
            <span className="font-tanker font-normal text-white text-[28px] lg:text-[70px] text-center tracking-[0] leading-[42px] lg:leading-[72px]">
              {headerData.title}
            </span>
            <span className="relative font-sharp font-normal text-lead text-[12px] lg:text-[16px] text-center tracking-[0] leading-[14px] lg:leading-[22px]">
              {headerData.simpleSubtitle}
            </span>
            <CtaButton
              title="Azonnali ajánlatot szeretne?"
              hasIcon={true}
              path="#"
            />
          </Col>
          <Col></Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Header;
