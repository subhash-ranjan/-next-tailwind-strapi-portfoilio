import type { NextPage } from 'next';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Articles from '../components/Articles';
import { myConfig } from '../lib/config';

const Home = ({
    loading,
    service_data,
    portfolio_data,
    articles_data,
}: {
    loading: boolean;
    service_data: any;
    portfolio_data: any;
    articles_data: any;
}) => {
    return (
        <div className="h-full">
            <Banner />
            <Services data={service_data.data} />
            <Portfolio data={portfolio_data.data} />
            <Articles data={articles_data.data} />
            <Contact />
        </div>
    );
};

export async function getStaticProps() {
    const res_pservice = await fetch(`${myConfig.API_URL}/api/services`);
    const service_data = await res_pservice.json();
    // will receive `posts` as a prop at build time

    const resp_portfolio = await fetch(`${myConfig.API_URL}/api/portfolios`);
    const portfolio_data = await resp_portfolio.json();

    const resp_articles = await fetch(`${myConfig.API_URL}/api/articles`);
    const articles_data = await resp_articles.json();

    return {
        props: {
            service_data,
            portfolio_data,
            articles_data,
        },
    };
}

export default Home;
