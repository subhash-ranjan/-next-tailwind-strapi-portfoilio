import React from 'react';
import { CodeIcon, LinkIcon, LockClosedIcon } from '@heroicons/react/solid';
import { PortfolioType } from '../../../types';
import PortfolioPic from '/public/portfolio/vimerse.png';
import GithubIcon from '/public/vercel.svg';
import Image from 'next/image';
import Button from '../Button';

const index = ({ portfolios }: { portfolios: PortfolioType[] }) => {
    return (
        <div
            className="
            grid
            w-full
            gap-6
            sm:grid-cols-1
            md:grid-cols-1
            lg:grid-cols-3
        "
        >
            {
                //.slice(0, 3)
                Array.from(portfolios)?.map((item, index) => {
                    const { attributes } = item;
                    const stacks = JSON.stringify(attributes.stack);
                    return (
                        <div
                            key={index}
                            className={`flex-col-start-center
                           ${index == 1 ? 'box-blue' : 'box-yellow'} 
                            group transform transition duration-500 
                            my-3 p-8`}
                        >
                            <div className={`size-full flex-col-start-center `}>
                                <Image
                                    src={`/portfolio/${attributes.image}.png`}
                                    alt="portfolio"
                                    height={350}
                                    width={450}
                                    blurDataURL={`/_next/image?url=${attributes.image}&w=16&q=1`}
                                    placeholder="blur" // Optional blur-up while loading
                                    className="backdrop-blur-xl opacity-80"
                                />

                                <div className="w-full flex-col-between-start py-5">
                                    <div className={`mb-2 `}>
                                        <span
                                            className={`text-white text-xl font-bold text-left uppercase`}
                                        >
                                            {attributes.title}
                                        </span>
                                    </div>

                                    <div className="w-full">
                                        <p
                                            className={`text-left text-base text-white`}
                                        >
                                            {attributes.description.slice(
                                                0,
                                                80
                                            )}
                                        </p>
                                    </div>

                                    <div className={`w-full mt-4 mb-1`}>
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
                                                            className={` text-left text-sm uppercase text-white border-[1px] border-gray-300 p-2 m-1`}
                                                        >
                                                            {item}
                                                        </span>
                                                    );
                                                }
                                            )}
                                    </div>

                                    {/* <div
                                    className={`size-full flex-col-start-center`}
                                >

                                    <div
                                        className={`${Style.flexRowJustifyStart}`}
                                    >
                                        {attributes.github && (
                                            <div
                                                className={`mx-2 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-zinc-800 bg-opacity-50`}
                                            >
                                                <svg
                                                    className="h-6 w-6 fill-gray-300"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                </svg>
                                            </div>
                                        )}
                                        {!attributes.github && (
                                            <div
                                                className={` mx-2 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-zinc-800 bg-opacity-50`}
                                            >
                                                <LockClosedIcon className="mx-2 h-6 fill-gray-300" />
                                            </div>
                                        )}
                                        <div
                                            className={` mx-2 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-zinc-800 bg-opacity-50`}
                                        >
                                            <LinkIcon className="ml-2 h-6 cursor-pointer fill-gray-300 pr-3" />
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                            </div>

                            <div
                                className={`size-full flex-row items-center justify-center  absolute top-0 hidden group-hover:flex 
                               bg-gray-800
                                 bg-opacity-80 
                                 `}
                            >
                                <div className={``}>
                                    {attributes.github && (
                                        <div className={` cursor-pointer mb-5`}>
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={attributes.github}
                                            >
                                                <Button
                                                    text="Visit Website"
                                                    style={
                                                        'w-48 py-3 h-12 bg-black bg-opacity-20'
                                                    }
                                                    showArrow={false}
                                                    isCapital={false}
                                                    isGithub={true}
                                                />
                                            </a>
                                        </div>
                                    )}
                                    {/* {!attributes.github && (
                                        <div className={`${Style.iconBgBig}`}>
                                            <LockClosedIcon className="mx-2 h-6 fill-gray-200" />
                                        </div>
                                    )} */}
                                    <div className={``}>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={attributes.link}
                                        >
                                            <Button
                                                text="Visit Website"
                                                style={
                                                    'w-48 py-3 bg-black bg-opacity-20 h-12'
                                                }
                                                showArrow={false}
                                                isCapital={false}
                                                isText={true}
                                                styleText="text-sm font-normal"
                                            />
                                            {/* <LinkIcon className="ml-2 h-6 cursor-pointer fill-gray-200 pr-3" />
                                            <span className="  border-gradient-custom">
                                                View Website
                                            </span> */}
                                        </a>
                                    </div>
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
