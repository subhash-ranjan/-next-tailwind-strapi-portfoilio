import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import Text from '../UI/Text';
import FlexListPortfolio from '../UI/FlexListPortfolio';
import { ArrowDownIcon } from '@heroicons/react/solid';
import { useQuery } from '@apollo/client';
import { FETCH_PORTFOLIOS } from '../../queries/portfolio';
import { PortfolioEntityType, PortfoliosType } from '../../types/portfolio';
import PageHeader from '../UI/PageHeader';

let ptype = 'web',
    lstWeb,
    lstMobile;
const Index = ({ data }: { data: any }) => {
    let dvWeb = React.useRef<HTMLDivElement>(null);
    let dvMobile = React.useRef<HTMLDivElement>(null);
    let spanWeb = React.useRef<HTMLDivElement>(null);
    let spanMobile = React.useRef<HTMLDivElement>(null);

    lstWeb = data.data?.filter((x: any) => {
        if (x.attributes.type.toString().toUpperCase() == 'WEB')
            return x as PortfolioEntityType;
    });

    lstMobile = data.data?.filter((x: any) => {
        if (x.attributes.type.toString().toUpperCase() == 'MOBILE')
            return x as PortfolioEntityType;
    });

    const handleTypeChange = (type: string) => {
        if (dvMobile && dvMobile.current && dvWeb && dvWeb.current) {
            if (type.toLowerCase() == 'web') {
                dvMobile.current.classList.remove('flex');
                dvMobile.current.classList.add('hidden');

                dvWeb.current.classList.remove('hidden');
                dvWeb.current.classList.add('flex');

                if (
                    spanWeb &&
                    spanWeb.current &&
                    spanMobile &&
                    spanMobile.current
                ) {
                    spanWeb.current.classList.add('border-gradient-menu');
                    spanMobile.current.classList.remove('border-gradient-menu');
                }
            } else {
                dvWeb.current.classList.remove('flex');
                dvWeb.current.classList.add('hidden');

                dvMobile.current.classList.remove('hidden');
                dvMobile.current.classList.add('flex');

                if (
                    spanWeb &&
                    spanWeb.current &&
                    spanMobile &&
                    spanMobile.current
                ) {
                    spanMobile.current.classList.add('border-gradient-menu');
                    spanWeb.current.classList.remove('border-gradient-menu');
                }
            }
        }
    };

    return (
        <div
            id="dv-portfolio"
            className={`${Style.pageContainer} bg-primary bg-opacity-20 flex-col-start-center min-h-[120vh] lg:py-34 h-full transition duration-1000 ease-in-out`}
        >
            <PageHeader
                header="Portfolio"
                styleheader="text-white"
                styleSubheader="text-gray-300"
                subHeader="My selected works"
            />

            <div className="mb-10 flex h-full w-full flex-row items-center justify-center">
                <span
                    className={`mx-3 h-full cursor-pointer p-2 font-bold uppercase text-gray-400`}
                    onClick={() => {
                        handleTypeChange('web');
                    }}
                    ref={spanWeb}
                >
                    web
                </span>

                <span
                    className={`mx-3 cursor-pointer p-2 font-bold uppercase text-gray-400`}
                    onClick={() => {
                        handleTypeChange('mobile');
                    }}
                    ref={spanMobile}
                >
                    mobile
                </span>
            </div>

            <div
                className={`flex h-full w-full flex-col items-start justify-evenly lg:flex-row    `}
                ref={dvWeb}
            >
                <FlexListPortfolio portfolios={lstWeb} />
            </div>

            <div
                className={`h-full w-full flex-col items-start justify-evenly lg:flex-row
                hidden`}
                ref={dvMobile}
            >
                <FlexListPortfolio portfolios={lstMobile} />
            </div>
        </div>
    );
};

const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20  md:py-32 lg:py-32`,
};

export default Index;
