export type PortfolioItemType = {
	type: string
	title: string
	image: string
	link: string
	active: boolean
	stack: JSON
	description: string
}

export type PortfolioEntityType = {
	attributes: PortfolioItemType
}

export type PortfoliosType = {
	portfolios: [PortfolioEntityType]
}
