import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ArticleListType } from '../../../types/atricle';
import Image from 'next/image';
import PortfolioPic from '/public/portfolio/vimerse.png';
import GithubIcon from '/public/vercel.svg';

const index = ({ articles }: ArticleListType) => {
    return (
        <div
            className={`
        flex-col-center-center
        size-full
        flex-col
        lg:flex-row
        `}
        >
            {Array.from(articles)
                .slice(0, 2)
                .map((item, index) => {
                    const { attributes } = item;
                    return (
                        <div
                            key={index}
                            className={`bg-primary size-full ${Style.flexColJustifyStart}
                            group  m-3 
                            transform transition duration-500 hover:scale-105 lg:h-[64vh] `}
                        >
                            <Image
                                src={`/article/${attributes.image}.jpeg`}
                                alt="articles"
                                height={350}
                                width={450}
                                blurDataURL={`/_next/image?url=${attributes.image}&w=16&q=1`}
                                placeholder="blur" // Optional blur-up while loading
                                className="h-[30vh] w-full object-cover opacity-80"
                            />
                            <div className="flex flex-col items-start justify-evenly p-5">
                                <span
                                    className={`text-white mb-2 text-left text-lg uppercase`}
                                >
                                    {attributes.title}
                                </span>
                                <p
                                    className={`text-gray-400 mb-3 text-left text-base`}
                                >
                                    {attributes.content.slice(0, 100)}
                                </p>

                                <a
                                    href={'/articles/' + attributes.slug}
                                    className={`w-full ${Style.flexRowJustifyStart} cursor-pointer`}
                                >
                                    <>
                                        <span
                                            className={`text-white border-gradient-menu !border-b mr-1 text-left text-base`}
                                        >
                                            Read More
                                        </span>
                                        <ChevronRightIcon
                                            className={`h-5 w-5  fill-white`}
                                        />
                                    </>
                                </a>
                            </div>
                        </div>
                    );
                })}

            <div className={`size-full flex-col-center-center m-3 lg:h-[64vh]`}>
                {Array.from(articles)
                    .slice(2, 5)
                    .map((item, index) => {
                        const { attributes } = item;
                        return (
                            <div
                                key={index}
                                className={`size-full ${
                                    Style.flexRowJustifyStart
                                } bg-primary group transform transition duration-500
                                hover:scale-105 ${index < 2 ? 'mb-2' : ''} `}
                            >
                                <img
                                    src={`/article/${attributes.image}.jpeg`}
                                    alt="portfolio"
                                    // blurDataURL="data:..." automatically provided
                                    placeholder="blur" // Optional blur-up while loading
                                    className="h-full w-[40%] object-cover opacity-80"
                                />
                                <div className="flex h-full flex-col items-start justify-evenly p-3">
                                    <span
                                        className={`text-white mb-1 text-left text-base`}
                                    >
                                        {attributes.title}
                                    </span>
                                    <p
                                        className={`text-gray-400 mb-2 text-left text-sm`}
                                    >
                                        {attributes.content.slice(0, 40)}
                                    </p>
                                    <a
                                        href={'/articles/' + attributes.slug}
                                        className={`w-full ${Style.flexRowJustifyStart} cursor-pointer`}
                                    >
                                        <>
                                            <span
                                                className={`text-white border-gradient-menu !border-b mr-1 text-left text-base`}
                                            >
                                                Read More
                                            </span>
                                            <ChevronRightIcon
                                                className={`h-5 w-5 text-white`}
                                            />
                                        </>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {/* <Modal /> */}
        </div>
    );
};
export const Style = {
    flexColCenter: `flex flex-col items-center justify-center`,
    flexColJustifyStart: `flex flex-col items-center justify-start`,
    flexColJustifyStartAlignEvenly: `flex flex-col items-evenly justify-start`,
    flexColJustifyEvenAlignStart: `flex flex-col items-start justify-evenly`,

    flexRowCenter: `flex flex-row items-center justify-center`,
    flexRowStretch: `flex flex-row items-center justify-evenly`,
    flexRowJustifyStart: `flex flex-row items-center justify-start`,
    sizeFull: `h-full w-full`,

    textColorPrimary: `text-red-500`,
    bgPrimary: `bg-red-500`,
    fillPrimary: `fill-red-500`,
    fillPrimaryLight: `fill-red-400`,
    borderPrimary: `border-red-500`,

    textColorSecondary: `text-gray-400 `,

    iconBg: `h-10 w-10 flex flex-col items-center justify-center bg-zinc-700 rounded-full bg-opacity-50 mx-2`,
    iconBgBig: `h-14 w-14 flex flex-col items-center justify-center bg-zinc-800 rounded-full bg-opacity-50 mx-2`,

    pageContainer: `px-5 md:px-10 lg:px-20 py-28 lg:py-34`,
};
export default index;
