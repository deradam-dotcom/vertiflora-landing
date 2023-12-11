import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from "gatsby";
import LinkButton from '../Buttons/LinkButton';

const ServiceCard = ({ ...props }) => {
	const [hover, setHover] = useState(false);

	const data = useStaticQuery(graphql`
    query {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  const paths = data.allSitePage.nodes.map((node: any) => node.path);
  const isPathValid = paths.includes(props.target);

	if (!props.image?.gatsbyImageData) {
		return null;
	}

	const image = getImage(props.image.gatsbyImageData);

	return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card-container relative"
      style={{
        cursor: hover ? "pointer" : undefined,
        transform: hover ? "scale(1.05)" : undefined,
      }}
    >
      <GatsbyImage
        className="rounded rounded-[10px]"
        image={image}
        tag="div"
        alt={props.text}
        placeholder="blurred"
        description={props.image.internal.type}
        title={props.image.title}
      />
      <div className="absolute bottom-0 left-0 w-100 flex justify-around text-lead font-tanker font-normal text-[30px] tracking-[0] leading-[36px]">
        <div className="flex w-80 justify-between items-center mb-4">
          <span className="w-20">{props.text}</span>
          <LinkButton path={isPathValid ? props.target : "#"} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
