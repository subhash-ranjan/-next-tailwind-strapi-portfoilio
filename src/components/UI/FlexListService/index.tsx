import React, { FC } from 'react';
import {
    ChevronRightIcon,
    CodeIcon,
    DeviceMobileIcon,
    ServerIcon,
    CloudIcon,
} from '@heroicons/react/solid';
import Text from '../Text';
import { ServiceType, OnlyBoolsAndHorses } from '../../../types';
import { getInclusionDirectives } from '@apollo/client/utilities';

type ReactNode = React.ReactNode;

const index = ({ services }: { services: ServiceType[] }) => {
    const getIcons = (index: Number): React.ReactNode => {
        switch (index) {
            case 0:
                return (
                    <CodeIcon className="h-9 w-9 fill-white bg-indigo-600 !p-[2px] md:p-3 rounded-md mb-5" />
                );
                break;
            case 1:
                return (
                    <DeviceMobileIcon className="h-9 w-9 fill-white bg-indigo-600 !p-[2px] md:p-3 rounded-md mb-5" />
                );
                break;
            case 2:
                return (
                    <CloudIcon className="h-9 w-9 fill-white bg-indigo-600 !p-[2px] md:p-3 rounded-md mb-5" />
                );
                break;
            case 3:
                return (
                    <ServerIcon className="h-9 w-9 fill-white bg-indigo-600 !p-[2px] md:p-3 rounded-md mb-5" />
                );
                break;
            default:
                break;
        }

        return '';
    };

    return (
        <div className=" grid w-full gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Array.from(services)?.map((item, index) => {
                const { attributes } = item;
                const skills = JSON.parse(JSON.stringify(attributes.skills));
                let itms: OnlyBoolsAndHorses[] = Array.from(skills[0].items);

                return (
                    <div
                        key={index}
                        className="
                                transfor group 
                                flex h-full md:h-[20rem] w-full
                                flex-col items-center justify-center
                                transition duration-500 hover:scale-105
                                "
                    >
                        <div
                            className={`h-full w-full 
                                flex-col-start-start 
                                bg-gray-100 
                                  bg-opacity-100
                                  py-6 px-4`}
                        >
                            <div className="h-20 w-full  mb-3">
                                {getIcons(index)}
                                <h2 className="text-lg text-gray-900 uppercase font-semibold whitespace-nowrap">
                                    {attributes.name}
                                </h2>
                            </div>
                            <h2 className="text-sm text-gray-800 uppercase font-medium">
                                Stacks
                            </h2>
                            <div className="mt-3 flex flex-wrap">
                                {itms.map((item: OnlyBoolsAndHorses) => {
                                    for (const [key, value] of Object.entries(
                                        item
                                    )) {
                                        return (
                                            <span
                                                key={key}
                                                className="text-sm  m-[2px] px-[6px] py-[3px]
                                                text-center border-[1px] 
                                                border-indigo-400 capitalize text-indigo-600 bg-indigo-100 
                                                bg-opacity-100 rounded-2xl"
                                            >
                                                {key}
                                            </span>
                                        );
                                    }
                                })}
                            </div>
                        </div>
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
