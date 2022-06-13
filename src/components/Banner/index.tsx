import React, { useContext } from 'react';
import Button from '../UI/Button';
import { ArrowDownIcon } from '@heroicons/react/solid';
import Text from '../UI/Text';
import { AppContext } from '../../contexts/AppContext';

const Index = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <div
            id="dv-home"
            className={`bg-banner flex flex-col-center-center lg:justify-between   
            min-h-[100vh] lg:h-[100vh] px-5 md:px-10 lg:px-20 bg-center`}
        >
            <div
                className="size-full flex-col-reverse-center-center lg:flex-row-between-center
                            pt-10 transition duration-700 lg:px-20 lg:pt-0"
            >
                <div
                    className={`size-full flex-col-center-center lg:flex-col-center-start py-5 md:py-10 lg:py-0`}
                >
                    <div className="mb-3 lg:mb-5 ">
                        <span className="font-bold text-white text-xl  md:text-2xl lg:text-2xl">
                            SUBHASH R.
                        </span>
                    </div>
                    <div className="mb-3 lg:mb-5">
                        <span className="font-bold capitalize text-white text-2xl  md:text-3xl lg:text-3xl">
                            FULLSTACK DEVELOPER
                        </span>
                    </div>
                    <div className="mb-5 flex items-center lg:mb-20 md:mb-10">
                        <span className="mr-5 text-3xl font-bold text-white lg:text-4xl ">
                            11+
                        </span>
                        <span className="text-gray-custom font-bold">
                            Years of Experience
                        </span>
                    </div>
                    <div className="flex items-center">
                        <a href="#dv-contact">
                            <Button
                                text="CONTACT"
                                showArrow={true}
                                isCapital={true}
                                style={'w-48 py-4 '}
                                isText={true}
                            />
                        </a>
                    </div>
                </div>

                <img
                    src="/portfolio.gif"
                    alt="Picture of the author"
                    className="h-full rounded-lg object-cover opacity-80 md:h-[50vh]  lg:h-[50vh]"
                />
            </div>

            {!state?.isScrolled && (
                <a href="#dv-service">
                    <svg className="absolute right-5 bottom-5 h-7 w-7 animate-bounce cursor-pointer lg:right-[50vw]">
                        <ArrowDownIcon className="fill-white" />
                    </svg>
                </a>
            )}
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
