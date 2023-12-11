import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import LinkButton from '../Buttons/LinkButton';

interface ReferenceCardProps {
	title: string;
	description: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({
	title,
	description,
}) => {
	return (
		<div className="flex w-fit justify-between items-center mt-4 ml-2">
			<div className="flex flex-col items-start">
				<div className="font-sharp font-normal text-black text-[16px] tracking-[0] leading-[25px]">
					{title}
				</div>
				<div className="font-sharp_bold text-[20px]">{description}</div>
			</div>
			<div className="ml-[40px]">
				<LinkButton path="#" />
			</div>
		</div>
	);
};

export default ReferenceCard;
