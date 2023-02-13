import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import { lecturesSelector } from "../../store/selectors/lecturesSelector";
import { fetchLectures } from "../../store/reducers/lecturesReducer";
import { loading } from "../../store/reducers/loadedReducer";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { LectureCard } from "../../components/LectureCard/LectureCard";
import styles from "./Lectures.module.scss";

export const Lectures = () => {

	const dispatch = useAppDispatch();

	const lectures = useSelector(lecturesSelector);

	useEffect(() => {
		const getLectures = async () => {
			try {
				dispatch(loading(true))
				dispatch(fetchLectures({ limit: 3 }));
			} catch (error) {
				console.log(error);
			}finally {
				dispatch(loading(false))
			}
		};
		getLectures();
	}, []);
	return (
		<section className={styles.lectures}>
			<div className="container">

				<div className={styles.header}>
					<Title text="Our Events" center={true} />
					<Subtitle text="Lectures & workshops" center={true} />
				</div>

				<div className={styles.wrapper}>
					{lectures?.lectures?.map((item) => (
						<LectureCard key={item.id} item={item} />
					))}
				</div>

			</div>
		</section>
	);
};