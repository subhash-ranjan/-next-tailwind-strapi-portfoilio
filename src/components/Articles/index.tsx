import React from 'react';
import Text from '../UI/Text';
import FlexListArticles from '../UI/FlexListArticles';
import { ArrowDownIcon } from '@heroicons/react/solid';
import { useQuery } from '@apollo/client';
import { FETCH_ARTICLES } from '../../queries/articles';
import PageHeader from '../UI/PageHeader';
import { ArticleType } from '../../types';

const Index = ({ data }: { data: ArticleType[] }) => {
    return (
        <div
            id="dv-article"
            className={`${Style.pageContainer} bg-gray-100 h-full min-h-[120vh] `}
        >
            <div className="h-full w-full">
                <PageHeader
                    header="Articles"
                    styleheader="text-gray-900"
                    styleSubheader="text-gray-700"
                    subHeader="My Latest Articles"
                />
            </div>

            <div className="flex h-full w-full flex-col items-start justify-evenly lg:flex-row ">
                <div className="flex h-full w-full flex-col items-start justify-evenly lg:flex-row ">
                    {/* {loading && (
                        <div className="flex h-40 w-full animate-pulse flex-col items-center justify-center space-x-4">
                            <span className="p-x-2 text-red-500">
                                Loading data...
                            </span>
                        </div>
                    )} */}
                    {!!data && data?.length > 0 && (
                        <FlexListArticles articles={data} />
                    )}
                </div>
            </div>
        </div>
    );
};

export const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20  md:py-32 lg:py-24`,
};

export default Index;
