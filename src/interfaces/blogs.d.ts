export interface IBlogsState {
	blogs: IBlogs[];
}

export interface IBlogs {
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