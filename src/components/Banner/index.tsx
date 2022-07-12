import React, { useContext } from 'react';
import Button from '../UI/Button';
import { ArrowDownIcon } from '@heroicons/react/solid';
import Text from '../UI/Text';
import { AppContext } from '../../contexts/AppContext';
import { DotsSvg } from '../../svgs';

const Index = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <div className="relative py-24 md:py-32 lg:py-12 px-5 md:px-10 lg:px-20 lg:mt-[10vh] bg-white w-[100vw] h-full md:h-[100vh] min-h-[100vh]">
            <div className="flex-col-reverse-center-center lg:flex-row-center-center">
                <div className="w-full lg:w-7/12">
                    <div className="hero-content">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-semibold  mb-1 md:mb-4 lg:mb-1">
                            <span className="text-gray-900 capitalize">
                                subhash{' '}
                            </span>
                            <span className="text-indigo-600">R.</span>
                        </h2>
                        <h3 className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-800  mb-1 md:mb-4 lg:mb-1 capitalize whitespace-nowrap overflow-hidden">
                            fullstack developer
                        </h3>
                        <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold   mb-3 md:mb-8 lg:mb-3">
                            <span className="text-indigo-600">11+ </span>
                            <span className="text-gray-700">
                                Years of Experience
                            </span>
                        </h3>
                        <p className="text-sm lg:text-base lg:px-0 text-gray-600  mb-14 lg:mb-16">
                            Full Stack developer with overall 11 years of
                            experience, including 7 years of industry experience
                            in design, develop, and managing applications.
                            Solving issues, aligning with the vision of the
                            client, providing quality services, and adding value
                            are my priorities.
                        </p>
                        <div
                            className="w-full flex flex-row items-center justify-center lg:justify-start
                         transition-all duration-1000 delay-75 ease-in-out -translate-y-6
                         "
                        >
                            <Button
                                text="Contact"
                                href="#dv-contact"
                                isDark={true}
                                style="mr-2"
                            />
                            <Button
                                text="View Services"
                                href="#dv-service"
                                isDark={false}
                                style="ml-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full lg:w-5/12 mb-10 md:mb-16 lg:mb-0">
                    <div className="lg:text-right lg:ml-auto">
                        <div className="relative inline-block z-10 pt-11 lg:pt-0 h-[180px] md:h-[400px] lg:h-[70vh]  w-full ">
                            <div className="size-full absolute top-0 left-0 bg-cover bg-new-1 lg:rounded-tl-[20%] rounded-sm lg:rounded-md"></div>
                            <span className="absolute left-0 z-20 lg:-left-8 bottom-0 lg:-bottom-8 lg:z-[-1]">
                                <DotsSvg className="fill-indigo-600" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const style = {
    container: `h-full lg:h-[100vh]  
        min-h-[700px] flex flex-col justify-between 
        items-center bg-zinc-800 
        px-8 md:px-10 lg:px-20`,
};

export default Index;
