import React, { ChangeEvent, useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import { loading } from "../../store/reducers/loadedReducer";
import { lecturesSelector } from "../../store/selectors/lecturesSelector";
import { fetchLectures, setFilters } from "../../store/reducers/lecturesReducer";
import { LectureCard } from "../../components/LectureCard/LectureCard";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Icon } from "../../components/Icon";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import Pagination from "../../components/Pagination/Pagination";
import { CustomSelect } from "../../components/UI/inputs/select/CustomSelect";
import { CustomInputShow } from "../../components/UI/inputs/showInput/CustomInputShow";
import { CATEGORY_EVENTS, SORT_EVENTS } from "../../mockData";
import { CustomInputSearch } from "../../components/UI/inputs/searchInput/CustomInputSearch";
import styles from "./EventsPage.module.scss";
import { useDebounce } from "../../hooks/useDebounce";

let PageSize = 10;

export const EventsPage = () => {
	const dispatch = useAppDispatch();

	const { lectures, filters } = useSelector(lecturesSelector);
	const [view, setView] = useState<string>("lines");
	const [currentPage, setCurrentPage] = useState<number>(1);

	const debounceSearch = useDebounce((value: string) => {
		setSearchValue(value);
	}, 1000);

	const changeViewLines = () => {
		setView("lines");
	};
	const changeViewTiles = () => {
		setView("tiles");
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
		dispatch(setFilters({ category: value }));
	};
	const onChangeSort = (value: string) => {
		dispatch(setFilters({ sort: value }));
	};
	const onChangeShow = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilters({ limit: e.target.value }));
	};

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilters({ search: e.target.value }));
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
						<CustomSelect title="Event category" selectList={CATEGORY_EVENTS}
									  onChange={(value) => onChangeCategory(value)} />
						<CustomSelect title="Sort" selectList={SORT_EVENTS} onChange={(value) => onChangeSort(value)} />
						<CustomInputShow title="Show" limit={filters.limit} onChange={onChangeShow} />
						<CustomInputSearch placeholder="Search event..." value={filters.search}
										   onChange={(e) => searchHandler(e)} />
						<div className={styles.buttonsViews}>
							<button className={view === "lines" ? "is-active" : ""} onClick={changeViewLines}><Icon
								size={16}
								color={view === "lines" ? "red" : "#424551"}
								name="lines" />
							</button>
							<button className={view === "tiles" ? "is-active" : ""} onClick={changeViewTiles}><Icon
								size={16}
								color={view === "tiles" ? "red" : "#424551"}
								name="tiles" />
							</button>
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