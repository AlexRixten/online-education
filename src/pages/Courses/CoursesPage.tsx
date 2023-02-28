import React from "react";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { CustomInputSearch } from "../../components/UI/inputs/searchInput/CustomInputSearch";
import FilterTags from "../../components/Tags/FilterTags/FilterTags";
import styles from "./CoursesPage.module.scss";

export const CoursesPage = () => {
	return (
		<section className={styles.coursePage}>
			<div className="container">
				<Title text="Enjoy your studying!" center={true} />
				<Subtitle text="Our online courses" center={true} />
				<div className="top">
					<div className="filters"><FilterTags /></div>
					<CustomInputSearch placeholder="Search course..." value="" onChange={() => {
					}} />
				</div>
			</div>
		</section>
	);
};