import styles from "./CourseCard.module.scss";
import { ICourses, ITeacher } from "../../../interfaces/courses";

export const CourseCard = (props: ITeacher) => {
	return (
		<div className={styles.card}>
			<img className={styles.cardImg} src={props.imgUrl} alt="teacher" />
			<div className={styles.right}>
				<p>{props.tags.map((item) => (
					<p>{item.title}</p>
				))}</p>
				<p>{props.descriptionCourse}</p>
				<p>{`$${props.price} | by ${props.name}`}</p>
			</div>
		</div>
	);
};
