import React, { ChangeEvent, useMemo, useState } from "react";
import styles from "./EventsPage.module.scss";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { loading } from "../../store/reducers/loadedReducer";
import { lecturesSelector } from "../../store/selectors/lecturesSelector";
import { fetchLectures, setFilters } from "../../store/reducers/lecturesReducer";
import { LectureCard } from "../../components/LectureCard/LectureCard";
import { Icon } from "../../components/Icon";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import Pagination from "../../components/Pagination/Pagination";

let PageSize = 10;

export const EventsPage = () => {
  const dispatch = useAppDispatch();

  const { lectures, filters } = useSelector(lecturesSelector);
  const [view, setView] = useState<string>('lines');
  const [currentPage, setCurrentPage] = useState<number>(1);


  const changeViewLines = () => {
	setView('lines');
  };
  const changeViewTiles = () => {
	setView('tiles');
  };

  useEffect(() => {
	const getLectures = async () => {
	  try {
		dispatch(loading(true));
		dispatch(fetchLectures(filters));
	  } catch (error) {
		console.log(error);
		dispatch(loading(false));
	  } finally {
		dispatch(loading(false));
	  }
	};
	getLectures();
  }, [filters]);

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
	console.log("filter");
	dispatch(setFilters({ category: e.target.value }));
  };
  const onChangeShow = (e: ChangeEvent<HTMLInputElement>) => {
	dispatch(setFilters({ limit: e.target.value }));
  };
  const onChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
	dispatch(setFilters({ sort: e.target.value }));
  };

  const currentTableData = useMemo(() => {
	const firstPageIndex = (currentPage - 1) * PageSize;
	const lastPageIndex = firstPageIndex + PageSize;
	return lectures.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
	<>

	<section className={styles.eventPage}>
	  <div className="container">
		<Title text="Our events" center={true} />
		<Subtitle text="Lectures, workshops & master-classes" center={true} />
		<div className={styles.filters}>
		  <label htmlFor="category">
			Event category
			<select name="category" id="category" onChange={(e) => {
			  onChangeCategory(e);
			}}>
			  <option value="1">All Theme</option>
			  <option value="2">Online master-class</option>
			  <option value="3">Online lecture</option>
			  <option value="4">Online workshop</option>
			</select>
		  </label>
		  <label htmlFor="sort">
			Sort by
			<select name="sort" id="sort" onChange={(e) => onChangeSort(e)}>
			  <option value="asc">newest</option>
			  <option value="desc">oldest</option>
			</select>
		  </label>
		  <label htmlFor="show">
			Show
			<input type="number" defaultValue={filters.limit} onChange={(e) => onChangeShow(e)} />
		  </label>
		  <label htmlFor="search">
			<input type="text" placeholder="Search event..." />
			<Icon size={16} color="#9A9CA5" name="search" />
		  </label>
		  <div className="buttons">
			<button onClick={changeViewLines}><Icon size={16} color="#424551" name="lines" /></button>
			<button onClick={changeViewTiles}><Icon size={16} color="#424551" name="tiles" /></button>
		  </div>
		</div>
		<div className={styles.wrapper}>
		  {currentTableData?.map((item) => (
			<LectureCard key={item.id} item={item} view={view} />
		  ))}
		</div>
	  </div>

	  <Pagination
		currentPage={currentPage}
		className="pagination-bar"
		totalCount={lectures.length}
		pageSize={PageSize}
		onPageChange={page => setCurrentPage(page)}
	  />
	</section>
	  <Subscribe />
	</>
  );
};