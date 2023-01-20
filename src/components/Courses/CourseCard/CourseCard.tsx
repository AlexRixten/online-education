import styles from "./CourseCard.module.scss";
import { ITeacher } from "../../../interfaces/courses";
import { Tags } from "../../Tags/Tags";
import { Link } from "react-router-dom";

export const CourseCard = (props: ITeacher) => {
	return (
		<Link to="/" className={styles.card}>
			<img className={styles.cardImg} src={props.imgUrl} alt="teacher" />
			<div className={styles.right}>
				<Tags {...props.tags}/>
				<h3 className={styles.title}>{props.descriptionCourse}</h3>
				<p className={styles.price}>{`$${props.price}`}<span> | by {props.name}</span></p>
			</div>
		</Link>
	);
};
