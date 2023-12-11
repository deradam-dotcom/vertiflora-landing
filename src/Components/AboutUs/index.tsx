import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContentfulRichText from '../ContentfulRichText';
import ArrowIcon from '../../images/Icons/rightArrow.inline.svg';
import { ContentfulListOfElements } from '../../pages';

interface AboutUsProps {
	aboutUsData: ContentfulListOfElements;
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutUsData }) => {
	const leadData = aboutUsData.lead.raw;
	const subtitleData = aboutUsData.subtitle.raw;

	return (
    <Container
      fluid
      className="h-auto flex items-start lg:items-center lg:mt-14  xs:mt-6"
    >
      <Row className="w-full h-full align-items-start mt-5">
        <Col md={{ span: 2, offset: 2 }} className="flex mb-9 lg:mb-0">
          <div className="mr-2">
            <ArrowIcon />
          </div>
          <div className="flex flex-col font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mb-">
            <span className="mb-4">{aboutUsData.title}</span>
            <ContentfulRichText json={subtitleData} />
          </div>
        </Col>
        <Col
          md={{ span: 3, offset: 2 }}
          className="font-tanker font-normal text-text text-[36px] lg:text-[50px] tracking-[0] leading-[42px] lg:leading-[52px] xs:mt-2"
        >
          <ContentfulRichText
            json={leadData}
            style={{
              background: "#fff",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
              display: "inline",
              lineHeight: "1.4",
              marginBottom: "10px",
              padding: "0 12px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
