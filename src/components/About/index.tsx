import React, { useEffect } from 'react';
import PageHeader from '../UI/PageHeader';
import AboutCard from '../UI/AboutCard';
import { ServiceType, OnlyBoolsAndHorses } from '../../types';
import { string } from 'yup';
import { ArrowRightIcon, ArrowSmRightIcon } from '@heroicons/react/solid';

const listExperience = {
    experience: [
        {
            company: 'Freelancer',
            role: 'Fullstack Developer',
            location: 'India',
            timeline: 'Jan 2018-Present',
        },
        {
            company: 'PriceWaterhouseCoopers',
            role: 'Assistant Manager',
            location: 'India & USA',
            timeline: 'Nov 2012-June 2017',
        },
        {
            company: 'Geotech Informatics',
            role: 'Application programmer',
            location: 'India',
            timeline: 'June 2011-Oct 2012',
        },
        {
            company: 'Dreamztech Solution',
            role: 'Software Developer',
            location: 'India',
            timeline: 'June 2010-June 2011',
        },
    ],
    skills: [
        { year: 11, tech: ['Javascript', 'CSS', 'SQL', 'REST', 'Github'] },
        { year: 7, tech: ['C#', '.Net', 'MVC', 'Oracle', 'JQuery'] },
        {
            year: 4,
            tech: [
                'NodeJs',
                'ReactJs',
                'React Native',
                'NextJs',
                'AWS/GC',
                'MogoDB',
                'GraphQL',
                'Docker/Serverless',
            ],
        },
        {
            year: 2,
            tech: ['Typescript', 'Strapi', 'TailwindCSS'],
        },
        // 'Javascript|11',
        // 'C#, .Net|7',
        // 'Typescript|2',
        // 'NodeJs|4',
        // 'ReactJs|4',
        // 'React Native|4',
        // 'NextJs|2',
        // 'GraphQL|4',
        // 'TailwindCSS|2',
        // 'AWS/GC|4',
        // 'SQL/NoSql|11',
        // 'Docker/Serverless|4',
        // 'Strapi|1',
    ],
};

const Index = ({ data }: { data: ServiceType[] }) => {
    return (
        <div
            id="dv-about"
            className={`${Style.pageContainer} bg-zinc-900 flex-col-center-center lg:flex-col-start-center min-h-[120vh] h-full`}
        >
            <PageHeader
                header="About"
                styleheader="text-white"
                styleSubheader="text-gray-300"
                subHeader=""
                styleInfo="text-gray-400 text-[.85rem]"
                infoText="As a Full Stack developer, I prefer to stay up to date
                        with the latest technologies, frameworks, libraries and
                        best practices. I have extensive experience with Test
                        Driven Development (TDD), NoSql, Github workflows,
                        Amazon Web Services (AWS) ecosystems, mobile
                        responsiveness, and UI side work."
            />

            <div className="flex-col-center-center w-full">
                <AboutCard
                    containerStyle="h-full"
                    title="work history"
                    icon="experience"
                >
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {listExperience.experience.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-full lg:h-full w-full flex-col-center-center 
                                    mb-10 bg-zinc-800 bg-opacity-100"
                                >
                                    <span className="text-5xl font-extrabold text-indigo-300 mb-5">
                                        {index + 1}
                                    </span>

                                    {/* <div
                                        className={`h-[25px] w-[25px] bg-indigo-600 bg-opacity-40 p-2 md:p-4 lg:p-5 mb-6 rounded-full flex-row-center-center transition-all duration-1000 delay-75 ease-in-out scale-[1.1]`}
                                    >
                                        <span className="text-base font-semibold text-indigo-300">
                                            {index + 1}
                                        </span>
                                    </div> */}

                                    <span className="text-base font-semibold mb-2 text-gray-300 inline-block">
                                        {item.company}
                                    </span>
                                    <span className="text-[.8rem] text-gray-400">
                                        {item.role}
                                    </span>
                                    <span className="text-[.8rem] text-gray-400">
                                        {item.location}
                                    </span>
                                    <span className="text-[.8rem] text-indigo-200">
                                        {item.timeline}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </AboutCard>
                <AboutCard
                    containerStyle="h-full mt-24"
                    title="technical Skills and experience"
                    icon="skill"
                >
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {listExperience.skills.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-full w-full flex-col-start-center 
                                 bg-zinc-800 bg-opacity-70 p-10"
                                >
                                    <span className="text-base flex-row-center-center font-normal text-gray-400 mb-5">
                                        <b className="text-[4rem] text-indigo-300 mr-1 pb-3">
                                            {item.year}
                                        </b>
                                        {'   '}
                                        years
                                    </span>

                                    <div className=" p-2 flex flex-wrap">
                                        {item.tech.map((item, index) => {
                                            return (
                                                <span className="text-base font-normal text-gray-100 p-1">
                                                    {item}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AboutCard>
            </div>
        </div>
    );
};

const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20  md:py-32 lg:py-24`,
};

export default Index;
