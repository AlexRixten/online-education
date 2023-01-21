import { ILecture } from "../../../interfaces/lectures";

import styles from "./LectureCard.module.scss";


export const LectureCard = (props : ILecture) => {
	return (
		<div className={styles.lectureCard}></div>
	);
};