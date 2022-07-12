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
            className={`${Style.pageContainer} bg-white flex-col-start-center h-full min-h-[105vh] lg:min-h-[100vh]`}
        >
            <PageHeader
                header="Services"
                styleheader="text-gray-900"
                styleSubheader="text-gray-700"
                subHeader="I build high quality apps and products."
            />

            <div className={`flex h-full w-full flex-col`}>
                {data && data?.length > 0 && (
                    <FlexListService services={data} />
                )}
            </div>
        </div>
    );
};
const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20  md:py-32 lg:py-24`,
};

export default Index;
