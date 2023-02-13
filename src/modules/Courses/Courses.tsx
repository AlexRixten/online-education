import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCourses } from "../../store/reducers/coursesReducer";
import { coursesSelector } from "../../store/selectors/coursesSelector";
import { useAppDispatch } from "../../store/hooks";
import { loading } from "../../store/reducers/loadedReducer";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Button } from "../../components/UI/buttons/Button/Button";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { ERoutes } from "../../enums/routes.enum";
import styles from "./Courses.module.scss";

export const Courses = () => {
	const dispatch = useAppDispatch()

	const { courses } = useSelector(coursesSelector);

	useEffect(() => {
		const getCourses = async () => {
			try {
				dispatch(loading(true))
				dispatch(fetchCourses({limit: 6}));
			} catch (error) {
				console.log(error);
			}
			finally {
				dispatch(loading(false))
			}
		};
		getCourses();
	}, []);

	return (
		<section className={styles.courses}>
			<div className="container">

					<div className={styles.header}>
						<div>
							<Title text="Ready to learn?" />
							<Subtitle text="Featured Courses" />
						</div>
						<Button path={ERoutes.AboutUs} text="More about us" color={false} style={{ width: 260 }} />
					</div>

				<div className={styles.wrapper}>
					{courses.map((item) => (
						<CourseCard key={item.id} {...item.teacher} />
					))}
				</div>

			</div>
		</section>
	);
};
