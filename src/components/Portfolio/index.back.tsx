import React from 'react';

const index = () => {
    return <div>index.back</div>;
};

export default index;

// import React, { useState, useEffect } from 'react';
// import Button from '../UI/Button';
// import Text from '../UI/Text';
// import FlexListPortfolio from '../UI/FlexListPortfolio';
// import { ArrowDownIcon } from '@heroicons/react/solid';
// import { useQuery } from '@apollo/client';
// import { FETCH_PORTFOLIOS } from '../../queries/portfolio';
// // import { PortfolioEntityType, PortfoliosType } from '../../types/portfolio';
// import PageHeader from '../UI/PageHeader';

// const Index = () => {
//     const { loading, error, data } = useQuery(FETCH_PORTFOLIOS);
//     const [ptype, setType] = useState('web');
//     const [lstWeb, setListWeb] = useState<[PortfolioEntityType] | undefined>();
//     const [lstMobile, setListMobile] = useState<
//         [PortfolioEntityType] | undefined
//     >();

//     // const getList = (): any => {
//     //     let anyThing = lstMain?.filter((x) => {
//     //         if (x.attributes.type.toString().toUpperCase() == ptype.toUpperCase())
//     //             return x as PortfolioEntityType
//     //     })

//     //     console.log(anyThing);
//     //     return anyThing
//     // }

//     const handleTypeChange = (type: any) => {
//         setType(type);
//     };

//     useEffect(() => {
//         if (data?.portfolios?.data?.length > 0) {
//             const lstWeb = data?.portfolios?.data?.filter((x: any) => {
//                 if (x.attributes.type.toString().toUpperCase() == 'WEB')
//                     return x as PortfolioEntityType;
//             });
//             const lstMobile = data?.portfolios?.data?.filter((x: any) => {
//                 if (x.attributes.type.toString().toUpperCase() == 'MOBILE')
//                     return x as PortfolioEntityType;
//             });
//             setListWeb(lstWeb);
//             setListMobile(lstMobile);
//         }
//     }, [data]);

//     return (
//         <div
//             id="dv-portfolio"
//             className={`${Style.pageContainer} bg-primary bg-opacity-20 flex-col-start-center min-h-[120vh] lg:py-34 h-full`}
//         >
//             <PageHeader
//                 header="Portfolio"
//                 styleheader="text-white"
//                 styleSubheader="text-gray-300"
//                 subHeader="My selected works"
//             />

//             <div className="mb-10 flex h-full w-full flex-row items-center justify-center">
//                 <span
//                     className={
//                         'mx-3 h-full cursor-pointer p-2 font-bold uppercase text-gray-400 ' +
//                         (ptype == 'web' ? `: border-gradient-menu` : '')
//                     }
//                     onClick={() => {
//                         handleTypeChange('web');
//                     }}
//                 >
//                     {' '}
//                     web
//                 </span>

//                 <span
//                     className={`mx-3 cursor-pointer p-2 font-bold uppercase text-gray-400 ${
//                         ptype == 'mobile' ? `: border-gradient-menu` : ''
//                     }`}
//                     onClick={() => {
//                         handleTypeChange('mobile');
//                     }}
//                 >
//                     {' '}
//                     mobile
//                 </span>
//             </div>

//             <div className="flex h-full w-full flex-col items-start justify-evenly lg:flex-row ">
//                 {loading && (
//                     <div className="flex h-40 w-full animate-pulse flex-col items-center justify-center space-x-4">
//                         <span className="p-x-2 text-red-500">
//                             Loading data...
//                         </span>
//                     </div>
//                 )}
//                 {!!error && `Error! ${error.message}`}
//                 {ptype.toUpperCase() == 'WEB' &&
//                     lstWeb &&
//                     lstWeb?.length > 0 && (
//                         <FlexListPortfolio portfolios={lstWeb} />
//                     )}
//                 {ptype.toUpperCase() == 'MOBILE' &&
//                     lstMobile &&
//                     lstMobile?.length > 0 && (
//                         <FlexListPortfolio portfolios={lstMobile} />
//                     )}
//             </div>
//         </div>
//     );
// };

// const Style = {
//     pageContainer: `px-5 md:px-10 lg:px-20 py-20  md:py-32 lg:py-32`,
// };

// export default Index;
