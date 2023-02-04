import { EStatusLoading } from "../enums/statusLoading.enum";

export interface ILecturesState {
  lectures: ILecture[];
  filters: IFilters;
  status: EStatusLoading;
}

export interface IFilters {
  page: number;
  limit: number;
  category: number;
  sort: string;
  search: string;
}

export interface ILecture {
  id: number;
  date: string;
  gap: string;
  title: string;
  lesson: string;
  category: number[];
}