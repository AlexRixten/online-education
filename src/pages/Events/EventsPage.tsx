import React from "react";
import styles from "./EventsPage.module.scss";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { loading } from "../../store/reducers/loadedReducer";
import { lecturesSelector } from "../../store/selectors/lecturesSelector";
import { fetchLectures } from "../../store/reducers/lecturesReducer";
import { LectureCard } from "../../components/LectureCard/LectureCard";
import { Icon } from "../../components/Icon";

export const EventsPage = () => {
  const dispatch = useAppDispatch();

  const { lectures } = useSelector(lecturesSelector);

  useEffect(() => {
	const getLectures = async () => {
	  try {
		dispatch(loading(true));
		dispatch(fetchLectures({ limit: 3 }));
	  } catch (error) {
		console.log(error);
		dispatch(loading(false));
	  }
	  finally {
		dispatch(loading(false));
	  }
	};
	getLectures();
  }, []);
  return (
	<section className={styles.blogPage}>
	  <div className="container">
		<Title text="Our events" center={true} />
		<Subtitle text="Lectures, workshops & master-classes" center={true} />
		<div className={styles.filters}>
		  <label htmlFor="category">
			Event category
			<select name="category" id="category" onChange={() => {}}>
			  <option value="1">All Theme</option>
			  <option value="2">Online master-class</option>
			  <option value="3">Online lecture</option>
			  <option value="4">Online workshop</option>
			</select>
		  </label>
		  <label htmlFor="sort">
			Sort by
			<select name="sort" id="sort">
			  <option value="new">newest</option>
			  <option value="old">oldest</option>
			</select>
		  </label>
		  <label htmlFor="show">
			Show
			<input type="number" />
		  </label>
		  <label htmlFor="search">
			<input type="text" placeholder="Search event..."/>
			<Icon size={16} color="#9A9CA5" name="search" />
		  </label>
		  <div className="buttons">
			<button> <Icon size={16} color="#424551" name="lines" /></button>
			<button> <Icon size={16} color="#424551" name="tiles" /></button>
		  </div>
		</div>
		{lectures?.map((item) => (
		  <LectureCard key={item.id} {...item} />
		))}
	  </div>
	</section>
  );
};