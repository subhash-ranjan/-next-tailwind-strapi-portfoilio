import React, { useContext } from 'react';
import Button from '../UI/Button';
import { ArrowDownIcon } from '@heroicons/react/solid';
import Text from '../UI/Text';
import { AppContext } from '../../contexts/AppContext';

const Index = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <div className="w-full">
            <div className="flex bg-zinc-900 lg:bg-white h-[100vh]">
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-semibold  mb-2 md:mb-4 lg:mb-1">
                            <span className="text-white lg:text-gray-800">
                                SUBHASH{' '}
                            </span>
                            <span className="text-indigo-400 lg:text-indigo-600">
                                R.
                            </span>
                        </h2>
                        <h3 className="text-2xl md:text-5xl lg:text-4xl font-semibold text-gray-100 lg:text-gray-700  mb-2 md:mb-4 lg:mb-1">
                            FULLSTACK DEVELOPER
                        </h3>
                        <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold   mb-5 md:mb-8 lg:mb-3">
                            <span className="text-indigo-400 lg:text-indigo-600">
                                11+{' '}
                            </span>
                            <span className="text-gray-100 lg:text-gray-600">
                                Years of Experience
                            </span>
                        </h3>
                        <p className="text-lg md:text-2xl md:px-20 lg:px-0 lg:text-sm text-gray-200 lg:text-gray-500  mb-14 lg:mb-10">
                            Full Stack developer with overall 11 years of
                            experience, including 7 years of industry experience
                            in design, develop, and managing applications. I
                            prefer to stay up to date with the latest
                            technologies, frameworks, libraries and best
                            practices. Solving issues, aligning with the vision
                            of the client, providing quality services, and
                            adding value are my priorities.
                        </p>
                        <div className="w-full flex flex-row items-center justify-center lg:justify-start">
                            <Button
                                text="Conatct"
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
                <div className="hidden relative lg:block lg:w-1/2 bg-new">
                    <div className="h-full object-cover bg-new-1">
                        <div className="relative h-full bg-black opacity-50 p-5 grid grid-rows-2 grid-cols-2 items-center justify-center space-x-2"></div>
                    </div>
                    {/* <div className="size-full py-[200px]   absolute z-30 opacity-100 top-0 right-0 flex-col-center-center">
                        <div className=" flex-row-center-center m-1">
                            <ServiceCard />
                            <ServiceCard />
                        </div>
                        <div className=" flex-row-center-center m-1">
                            <ServiceCard />
                            <ServiceCard />
                        </div>
                    </div> */}
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
