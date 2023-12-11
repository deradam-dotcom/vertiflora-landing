import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";
import ReferenceCard from "./ReferenceCard";
import SliderController from "../../images/Icons/sliderController.inline.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReferencesSlider = () => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          variableWidth: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="h-fit bg-section mt-5 pt-16 text-center pb-5">
      <span className="font-sharp font-normal text-black text-[16px] whitspace-nowrap">
        REFERENCES
      </span>
      <Container className="pt-9 pb-5 px-0">
        <Row className="relative">
          <Slider {...settings}>
            <Col className="image-container text-center mr-5 cursor-pointer">
              <StaticImage
                height={662}
                src="../../images/References/Budaörs.png"
                alt="Budaörs"
                placeholder="blurred"
                className="rounded rounded-[10px]"
              />
              <ReferenceCard title="BUDAÖRS" description="Dechatlon" />
            </Col>
            <Col className="image-container text-center cursor-pointer">
              <StaticImage
                height={662}
                src="../../images/References/Üllő.png"
                alt="Üllő"
                placeholder="blurred"
                className="rounded rounded-[10px]"
              />
              <ReferenceCard
                title="ÜLLŐ"
                description="Teljesen automata zöldfal"
              />
            </Col>
            <Col className="image-container text-center mr-5 cursor-pointer">
              <StaticImage
                height={662}
                src="../../images/References/Balaton.png"
                alt="Balaton"
                placeholder="blurred"
                className="rounded rounded-[10px]"
              />
              <ReferenceCard title="BALATONSZÁNTÓD" description="Balaland" />
            </Col>
          </Slider>
          <SliderController className="slider-controller" />
        </Row>
      </Container>
    </div>
  );
};

export default ReferencesSlider;
