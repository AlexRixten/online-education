import styles from "./Courses.module.scss";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../../store/reducers/coursesReducer";
import { coursesSelector } from "../../store/selectors/coursesSelector";
import { useAppDispatch } from "../../store/hooks";


export const Courses = () => {
	const dispatch = useAppDispatch()

	const courses = useSelector(coursesSelector);

	useEffect(() => {
		const getCourses = async () => {
			try {
				dispatch(fetchCourses());
			} catch (error) {
				console.log(error);
			}
		};
		getCourses();
	}, []);

	console.log('courses', courses);

	return (
		<section className={styles.courses}>
			<div className="container">
				<div className={styles.wrapper}>

					<div className={styles.header}>
						<div>
							<Title text="Ready to learn?" />
							<Subtitle text="Featured Courses" />
						</div>
						<Button path="\" text="More about us" color={false} style={{ width: 260 }} />
					</div>
				</div>
			</div>
		</section>
	);
};
