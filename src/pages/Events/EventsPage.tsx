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
import { CustomSelect } from "../../components/UI/inputs/select/CustomSelect";
import { CATEGORY_EVENTS, SORT_EVENTS } from "../../mockData";

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

  const onChangeCategory = (value: string) => {
	dispatch(setFilters({ category: value}));
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
		  <CustomSelect title="Event category" selectList={CATEGORY_EVENTS} onChange={(value) => onChangeShow(value)}/>
		  <CustomSelect title="Sort" selectList={SORT_EVENTS} />
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
		  {lectures?.map((item) => (
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