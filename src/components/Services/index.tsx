import React from 'react';
import Button from '../UI/Button';
import Text from '../UI/Text';
import FlexListService from '../UI/FlexListService';
import { ArrowDownIcon } from '@heroicons/react/solid';
import PageHeader from '../UI/PageHeader';
import { useQuery } from '@apollo/client';
import { FETCH_SERVICES } from '../../queries/services';
import { ServiceType } from '../../types';

const Index = ({ data }: { data: ServiceType[] }) => {
    return (
        <div
            id="dv-service"
            className={`${Style.pageContainer} bg-white flex-col-start-center lg:py-34 h-full min-h-[105vh] lg:min-h-[120vh]`}
        >
            <PageHeader
                header="Services"
                styleheader="text-blue-custom"
                styleSubheader="text-dark-custom"
                subHeader="I build high quality apps and products"
            />

            <div className={`flex h-full w-full flex-col`}>
                <p className="max-h-lg w-full text-normal-custom text-gray-500 text-left mb-16">
                    I am a Full Stack developer with overall 11 years of
                    experience. I prefer to stay up to date with the latest
                    technologies, frameworks, libraries and best practices. I
                    have extensive experience with TDD, NoSql, Github workflows,
                    AWS ecosystems, mobile responsiveness and UI side work.
                    Solving issues, aligning with the vision of the client,
                    providing quality services, and adding value are my
                    priorities.
                </p>

                {/* {loading && (
                    <div className="flex h-40 w-full animate-pulse flex-col items-center justify-center space-x-4">
                        <span className="p-x-2 text-red-500">
                            Loading data...
                        </span>
                    </div>
                )} */}

                {data && data?.length > 0 && (
                    <FlexListService services={data} />
                )}
            </div>
        </div>
    );
};
const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20  md:py-32 lg:py-32`,
};

export default Index;
