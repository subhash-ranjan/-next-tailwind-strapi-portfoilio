import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { ButtonType } from '../../../types';

const index = ({
    text,
    isDark,
    style,
    showArrow,
    isCapital,
    isText,
    styleText,
    icon,
    isTragetBlank,
    href,
    iconPosition,
    onClickHandler,
}: ButtonType) => {
    return (
        <div>
            {isDark && (
                <a
                    className={`${style} 
                   px-6
                    md:px-8 
                    py-4 
                    lg:px-6 
                    lg:py-3 
                   bg-gray-900 
                  border-0
                    text-gray-100 
                    text-xs 
                    rounded-sm 
                    uppercase 
                    font-bold 
                    hover:bg-gray-800
                    flex-row-center-center
                    `}
                    href={href}
                    target={isTragetBlank ? '_blank' : ''}
                >
                    {iconPosition == 'left' && icon}
                    {text}
                    {iconPosition == 'right' && icon}
                </a>
            )}

            {!isDark && (
                <a
                    className={`${style} 
                    px-6
                    md:px-8 
                    py-4 
                    lg:px-6 
                    lg:py-3 
                    bg-gray-300 

                   border-0

                    text-gray-900 
                    text-xs 
                    font-semibold 
                    rounded-sm 
                    uppercase hover:bg-gray-400
                         flex-row-center-center
                         `}
                    href={href}
                    target={isTragetBlank ? '_blank' : ''}
                >
                    {iconPosition == 'left' && icon}
                    {text}
                    {iconPosition == 'right' && icon}
                </a>
            )}
        </div>
    );
};

export default index;
