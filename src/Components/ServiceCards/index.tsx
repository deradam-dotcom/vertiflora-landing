import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContentfulHeader } from '../../pages';
import { Fade } from 'react-awesome-reveal';
import ServiceCard from './ServiceCard';

interface ServiceCardsProps {
	servicesData: ContentfulHeader['additionalElements'];
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ servicesData }) => {
	const marginTopValues = [0, 6, 12];

	return (
		<Container fluid className="h-auto w-full p-0 mt-5">
			<Row className="h-auto justify-center">
				{servicesData.map((service, index) => (
					<Col
						md={{ span: 3, offset: 0 }}
						key={index}
						className="service-card p-0 text-center"
						style={{ marginTop: `${marginTopValues[index]}rem` }}
					>
						<Fade triggerOnce delay={index * 200}>
							<ServiceCard
								key={index}
								text={service.text}
								image={service.image}
								target={service.target}
							/>
						</Fade>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ServiceCards;
