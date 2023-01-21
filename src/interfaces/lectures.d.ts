import { EStatusLoading } from "../enums/statusLoading.enum";

export interface ILecturesState {
	lectures: ILecture[];
	status: EStatusLoading;
}

export interface ILecture {
	id: number,
	date: string,
	gap: string,
	title: string,
	lesson: string
}