import React from 'react';
import { Link } from 'gatsby';
import ArrowIcon from '../../images/Icons/rightArrow.inline.svg';

interface CtaButtonProps {
	title: string;
	hasIcon?: boolean;
	path: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({
	title,
	path,
	hasIcon = false,
}) => {
	return (
		<Link
			to={path}
			className="flex items-center gap-[10px] px-[20px] py-[10px] bg-lead rounded-[30px] border-2 border-solid border-transparent no-underline"
		>
			<span className="flex w-fit font-sharp font-normal text-text text-[10px] sm:text-[12px] lg:text-[14px] leading-[normal]">
				{title}
			</span>
			{hasIcon && <ArrowIcon />}
		</Link>
	);
};

export default CtaButton;
