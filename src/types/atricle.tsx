export type ArticleItemType = {
    title: string;
    image: string;
    published: string;
    content: string;
    slug: string;
};

export type ArticleType = {
    id: number;
    attributes: ArticleItemType;
};

export type ArticleListType = {
    articles: ArticleType[];
};
