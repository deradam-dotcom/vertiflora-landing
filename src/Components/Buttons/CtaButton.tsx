import React from 'react';
import { Link } from 'gatsby';
import ArrowIcon from '../../images/Icons/rightArrow.inline.svg';

interface CtaButtonProps {
  title: string;
  hasIcon?: boolean;
  path: string;
  isSmallFont?: boolean;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  title,
  path,
  hasIcon = false,
  isSmallFont = false,
}) => {
  return (
    <Link
      to={path}
      className="flex items-center gap-[10px] px-[20px] py-[10px] bg-lead rounded-[30px] border-2 border-solid border-transparent no-underline"
    >
      <span
        className="flex w-fit font-sharp font-medium text-text text-[16px] sm:text-[12px] lg:text-[16px] leading-[normal]"
        style={{ fontSize: isSmallFont ? "14px" : "16px" }}
      >
        {title}
      </span>
      {hasIcon && <ArrowIcon />}
    </Link>
  );
};

export default CtaButton;
