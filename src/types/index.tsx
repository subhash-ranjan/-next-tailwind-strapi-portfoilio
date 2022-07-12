export type ButtonType = {
    text: string;
    style?: string;
    styleText?: string;
    href?: string;
    iconPosition?: string;
    showArrow?: boolean;
    isCapital?: boolean;
    isIcon?: boolean;
    isTragetBlank?: boolean;
    isGithub?: boolean;
    isDark?: boolean;
    isText?: boolean;
    icon?: React.ReactNode;
    onClickHandler?: React.MouseEventHandler;
};

export type TextType = {
    text: string;
    classes?: string;
    type?: string;
    color?: string;
    size?: string;
};
export type ContextStateType = {
    isScrolled: Boolean | undefined;
};

export type ActionType = {
    type?: string;
    payload?: boolean;
};

export type PageHeaderType = {
    header: string;
    subHeader?: string;
    infoText?: string;
    styleheader?: string;
    styleSubheader?: string;
    styleInfo?: string;
};

export type ArticleType = {
    id: number;
    attributes: {
        title: string;
        image: string;
        published: string;
        content: string;
        slug: string;
    };
};

export type PortfolioType = {
    id: number;
    attributes: {
        type: string;
        title: string;
        image: string;
        github: string;
        link: string;
        active: boolean;
        stack: JSON;
        description: string;
    };
};

export type ServiceType = {
    attributes: {
        name: string;
        skills: JSON;
    };
};

export type OnlyBoolsAndHorses = {
    [key: string]: Number;
};
