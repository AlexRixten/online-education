export interface IBlogsState {
	blogs: IBlog[];
}

export interface IBlog {
	id: number;
	type: string;
	nameType: string;
	title: string;
	description: string;
	date: string;
	duration: number;
	linkTitle: string;
	tag: string;
	imgUrl: string;
}