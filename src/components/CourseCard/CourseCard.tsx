import { Link } from "react-router-dom";
import { Tags } from "../Tags/Tags";
import { ERoutes } from "../../enums/routes.enum";
import { ITeacher } from "../../interfaces/courses";
import styles from "./CourseCard.module.scss";

export const CourseCard = (props: ITeacher) => {
	return (
		<Link to={`${ERoutes.Course}/${props.id}`} className={styles.card}>
			<img className={styles.cardImg} src={props.imgUrl} alt="teacher" />
			<div className={styles.right}>
				<Tags {...props.tags}/>
				<h3 className={styles.title}>{props.descriptionCourse}</h3>
				<p className={styles.price}>{`$${props.price}`}<span> | by {props.name}</span></p>
			</div>
		</Link>
	);
};
