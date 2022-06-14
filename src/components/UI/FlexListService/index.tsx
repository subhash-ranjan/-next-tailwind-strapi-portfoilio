import React, { FC } from 'react';
import {
    ChevronRightIcon,
    CodeIcon,
    DeviceMobileIcon,
    ServerIcon,
    CloudIcon,
} from '@heroicons/react/outline';
import Text from '../Text';
import { ServiceType } from '../../../types';
import { getInclusionDirectives } from '@apollo/client/utilities';

type OnlyBoolsAndHorses = {
    [key: string]: Number;
};

type ReactNode = React.ReactNode;

const index = ({ services }: { services: ServiceType[] }) => {
    const getIcons = (index: Number): React.ReactNode => {
        switch (index) {
            case 0:
                return (
                    <CodeIcon
                        className={`h-10 w-10 mb-3 p-[2px] text-blue-custom border-2 border-blue-custom  font-normal`}
                    />
                );
                break;
            case 1:
                return (
                    <DeviceMobileIcon
                        className={` h-10 w-10 mb-3 p-[2px] text-blue-custom border-2 border-blue-custom  font-normal`}
                    />
                );
                break;
            case 2:
                return (
                    <ServerIcon
                        className={`h-10 w-10 mb-3 p-[2px] text-blue-custom border-2 border-blue-custom  font-normal`}
                    />
                );
                break;
            case 3:
                return (
                    <CloudIcon
                        className={`h-10 w-10 mb-3 p-[2px] text-blue-custom border-2 border-blue-custom  font-normal`}
                    />
                );
                break;
            default:
                break;
        }

        return '';
    };

    return (
        <div className=" grid w-full gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Array.from(services)?.map((item, index) => {
                const { attributes } = item;
                const skills = JSON.parse(JSON.stringify(attributes.skills));
                let itms: OnlyBoolsAndHorses[] = Array.from(skills[0].items);

                return (
                    <div
                        key={index}
                        className="
                                transfor group 
                                flex h-[20rem] w-full
                                flex-col items-center justify-center
                                transition duration-500 hover:scale-105
                                "
                    >
                        <div
                            className={`h-full w-full 
                                flex-col-start-start 
                                bg-gray-100 md:bg-gray-50
                                  bg-opacity-100
                                  p-8`}
                        >
                            <div className="h-20 mb-3 w-full flex-col-start-center">
                                {getIcons(index)}
                                <span className="w-full text-center text-blue-custom text-lg-bold-custom uppercase">
                                    {attributes.name}
                                </span>
                            </div>
                            <span className="w-full text-center text-blue-custom text-small-bold-custom uppercase">
                                Stacks & Frameworks
                            </span>
                            <div className="mt-3 flex flex-wrap">
                                {itms.map((item: OnlyBoolsAndHorses) => {
                                    for (const [key, value] of Object.entries(
                                        item
                                    )) {
                                        return (
                                            <span className="text-sm h-8  m-[2px] p-1 text-center border-[1px] border-gray-300 capitalize text-dark-custom">
                                                {key}
                                            </span>
                                        );
                                    }
                                })}
                            </div>
                        </div>

                        {/* <div
                            className="hidden h-[100%] 
                                w-[100%] flex-col items-center
                                justify-center
                                bg-red-500
                                bg-opacity-50
                                group-hover:flex
                                "
                        >
                            <div className="mb-1 flex w-[70%] flex-row items-center justify-end">
                                <span className="m-0 p-0 text-left text-base text-white">
                                    Exp (Yrs)
                                </span>
                            </div>

                            {itms.map((item: OnlyBoolsAndHorses) => {
                                for (const [key, value] of Object.entries(
                                    item
                                )) {
                                    return (
                                        <div
                                            key={index}
                                            className="flex w-[70%] flex-row items-center justify-between"
                                        >
                                            <div className="flex flex-row items-center justify-center">
                                                <ChevronRightIcon className="h-5 fill-white " />
                                                <span className="m-0 p-0 text-left text-base text-white">
                                                    {key}
                                                </span>
                                            </div>

                                            <span className="text-base text-amber-500">
                                                {value.toString()}
                                            </span>
                                        </div>
                                    );
                                }
                            })}
                        </div> */}
                    </div>
                );
            })}
        </div>
    );
};

const Style = {
    fillPrimary: `fill-red-500`,
    fillPrimaryLight: `fill-gray-400`,
};

export default index;
