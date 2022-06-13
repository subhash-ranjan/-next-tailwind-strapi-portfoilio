import React from 'react';
import { TextType } from '../../../types';

const index = ({ text, classes, type, color, size }: TextType) => {
    // switch (type) {
    //     case 1:
    //         size = 'text-4xl'
    //         break;
    //     case 2:
    //         size = 'text-xl'
    //         break;
    //     case 3:
    //         size = 'text-base'
    //         break;
    //     case 3:
    //         size = 'text-base'
    //         break;
    //     default:
    //         break;
    // }
    return (
        <>
            {type == 'paragraph' && (
                <p
                    className={`
                        ${color} 
                        ${classes} 
                        ${size}
                        `}
                >
                    {text}
                </p>
            )}

            {type == 'span' && (
                <span
                    className={`
                        ${color} 
                        ${classes} 
                        ${size}
                        `}
                >
                    {text}
                </span>
            )}
        </>
    );
};

export default index;
