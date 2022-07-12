import React from 'react';
import { CodeIcon, LinkIcon, LockClosedIcon } from '@heroicons/react/solid';
import { PortfolioType } from '../../../types';
import PortfolioPic from '/public/portfolio/vimerse.png';
import GithubIcon from '/public/vercel.svg';
import Image from 'next/image';
import IconLink from '../IconLink';
import Button from '../Button';

const index = ({ portfolios }: { portfolios: PortfolioType[] }) => {
    return (
        <div className="w-full gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:flex justify-center flex-wrap">
            {
                //.slice(0, 3)
                Array.from(portfolios)?.map((item, index) => {
                    const { attributes } = item;
                    const stacks = JSON.stringify(attributes.stack);
                    return (
                        <div
                            key={index}
                            className={`size-full 
                            flex-col-start-center   
                            lg:max-w-[280px]                          
                            group transform transition duration-500 
                            `}
                        >
                            <div
                                className={`flex-col-start-center  rounded-sm !p-0 !m-0 `}
                            >
                                <div className="relative w-full md:w-[320px] lg:w-[280px] h-[180px] lg:h-[160px] !p-0 !m-0 bg-zinc-600">
                                    <Image
                                        src={`/portfolio/${attributes.image}.png`}
                                        alt="portfolio"
                                        layout="fill"
                                        blurDataURL={`/_next/image?url=${attributes.image}&w=16&q=1`}
                                        placeholder="blur" // Optional blur-up while loading
                                        className="backdrop-blur-xl opacity-60 object-cover"
                                    />
                                </div>

                                <div className="w-full flex-col-between-start p-5 h-[150px] bg-zinc-800">
                                    <span
                                        className={`text-gray-100 text-xl font-semibold text-left uppercase mb-1`}
                                    >
                                        {attributes.title}
                                    </span>

                                    <p
                                        className={`text-left text-sm text-gray-300 font-light break-words max-w-[250px] overflow-hidden mb-2`}
                                    >
                                        {attributes.description.slice(0, 60)}
                                    </p>

                                    <div
                                        className={`w-full flex justify-start break-words overflow-hidden`}
                                    >
                                        {stacks.length > 0 &&
                                            JSON.parse(stacks).map(
                                                (
                                                    item: string,
                                                    index: number
                                                ) => {
                                                    if (index > 2) return;
                                                    return (
                                                        <span
                                                            key={index}
                                                            className={` text-left mx-[3px] text-sm font-semibold uppercase text-gray-200`}
                                                        >
                                                            {item}
                                                        </span>
                                                    );
                                                }
                                            )}
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`size-full flex-row items-center justify-center  
                                hidden absolute top-0 
                                group-hover:flex 
                               bg-indigo-900 opacity-90 
                                 `}
                            >
                                <div className={``}>
                                    {attributes.github && (
                                        <div className={` cursor-pointer mb-5`}>
                                            <Button
                                                text="View Code"
                                                isDark={false}
                                                style="mb-3 w-48"
                                                iconPosition="left"
                                                isTragetBlank={true}
                                                href={attributes.github}
                                                icon={
                                                    <CodeIcon className="h-5 w-5 fill-zinc-900 mr-2" />
                                                }
                                            />
                                        </div>
                                    )}
                                    {attributes.link && (
                                        <div className={``}>
                                            <Button
                                                text="View Website"
                                                isDark={false}
                                                style="mb-3 w-48"
                                                iconPosition="left"
                                                isTragetBlank={true}
                                                href={attributes.link}
                                                icon={
                                                    <LinkIcon className="h-5 w-5 fill-zinc-900 mr-2" />
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};
export const Style = {
    flexColCenter: `flex flex-col items-center justify-center`,
    flexColJustifyStart: `flex flex-col items-center justify-start`,

    flexRowJustifyStart: `flex flex-row items-center justify-start`,
    sizeFull: `h-full w-full`,

    textColorPrimary: `text-red-500`,

    borderPrimary: `border-red-500`,

    textColorSecondary: `text-gray-300 `,

    iconBg: `h-10 w-10 flex flex-col items-center justify-center bg-zinc-700 rounded-full bg-opacity-50 mx-2`,
    iconBgBig: `h-14 w-14 flex flex-col items-center justify-center bg-red-900 rounded-full mx-2`,

    pageContainer: `px-5 md:px-10 lg:px-20 py-28 lg:py-34`,
};
export default index;
