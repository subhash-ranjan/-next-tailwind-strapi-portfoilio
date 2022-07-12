import React from 'react';
import {
    BriefcaseIcon,
    ChartSquareBarIcon,
    LibraryIcon,
} from '@heroicons/react/solid';

const index = ({
    children,
    containerStyle,
    title,
    icon,
}: {
    children: React.ReactNode;
    containerStyle?: string;
    title?: string;
    icon?: string;
}) => {
    return (
        <div
            className={`relative ${containerStyle} w-[100%] flex-row-start-start overflow-hidden  rounded-sm`}
        >
            {/* <div className="z-0 absolute top-[110px] left-0 w-full flex-row-center-center">
                <div className="w-[80%] border-t-[1px] border-dashed border-indigo-600 border-opacity-60"></div>
            </div> */}
            <div className="w-[100%] flex-row-start-center mb-7">
                {icon == 'experience' && (
                    <BriefcaseIcon className="h-7 w-7 fill-gray-200 bg-indigo-600 !p-[4px] rounded-sm mb-4" />
                )}

                {icon == 'skill' && (
                    <LibraryIcon className="h-7 w-7 fill-gray-200 bg-indigo-600 !p-[4px] rounded-sm mb-4" />
                )}

                <h2 className="text-lg text-gray-200 font-semibold mb-4 capitalize ml-5">
                    {title}
                </h2>
            </div>

            {children}
        </div>
    );
};

export default index;
