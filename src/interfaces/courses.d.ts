import { EStatusLoading } from "../enums/statusLoading.enum";

export interface ISkill {
	id: number;
	title: string;
}

export interface ITag {
	id: number;
	title: string;
}

export interface ISocials {
	id: number;
	name: string;
	link: string;
}

export interface ITeacher {
	id: number;
	name: string;
	position: string;
	imgUrl: string;
	rating: number;
	courses: number;
	students: number;
	description: string;
	socials: ISocials;
	tags: ITag[];
	price: number;
	descriptionCourse: string;
}

export interface ICourses {
	id: number;
	teacher: ITeacher;
	description: string;
	skills: ISkill[];
}

export interface ICoursesState {
	courses: ICourses[];
	status: EStatusLoading;
}