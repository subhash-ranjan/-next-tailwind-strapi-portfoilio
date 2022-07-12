import React, { useState, useEffect } from 'react';
import FlexListPortfolio from '../UI/FlexListPortfolio';
import { PortfolioType } from '../../types';
import PageHeader from '../UI/PageHeader';

let ptype = 'web';
const Index = ({ data }: { data: PortfolioType[] }) => {
    let dvWeb = React.useRef<HTMLDivElement>(null);
    let dvMobile = React.useRef<HTMLDivElement>(null);
    let spanWeb = React.useRef<HTMLDivElement>(null);
    let spanMobile = React.useRef<HTMLDivElement>(null);

    let lstWeb = data?.filter((x: any) => {
        if (x.attributes.type.toString().toUpperCase() == 'WEB')
            return x as PortfolioType;
    });

    const lstMobile = data?.filter((x: any) => {
        if (x.attributes.type.toString().toUpperCase() == 'MOBILE')
            return x as PortfolioType;
    });

    lstMobile?.map((x: any) => {
        lstWeb.push(x);
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
            className={`${Style.pageContainer} bg-zinc-900 flex-col-start-center min-h-[120vh] h-full transition duration-1000 ease-in-out`}
        >
            <PageHeader
                header="Portfolio"
                styleheader="text-white"
                styleSubheader="text-gray-300"
                subHeader="Selected Works"
            />

            <div
                className={`flex h-full w-full flex-col items-start justify-evenly lg:flex-row`}
                ref={dvWeb}
            >
                <FlexListPortfolio portfolios={lstWeb} />
            </div>

            {/* <div
                className={`h-full w-full flex-col items-start justify-evenly lg:flex-row
                hidden`}
                ref={dvMobile}
            >
                <FlexListPortfolio portfolios={lstMobile} />
            </div> */}
        </div>
    );
};

const Style = {
    pageContainer: `px-5 md:px-10 lg:px-20 py-20  md:py-32 lg:py-24`,
};

export default Index;
