import React from 'react';
import { Link } from 'gatsby';
import ArrowIcon from '../../images/Icons/rightArrow.inline.svg';

interface LinkButtonProps {
	path: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ path }) => {
	return (
		<Link
			to={path}
			className="flex items-center justify-center w-8 h-8 bg-lead rounded-full"
		>
			<ArrowIcon />
		</Link>
	);
};

export default LinkButton;
