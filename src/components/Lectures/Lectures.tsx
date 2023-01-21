import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { lecturesSelector } from "../../store/selectors/lecturesSelector";
import { fetchLectures } from "../../store/reducers/lecturesReducer";
import styles from "./Lectures.module.scss";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { Button } from "../Button/Button";
import { LectureCard } from "./LectureCard/LectureCard";

export const Lectures = () => {

	const dispatch = useAppDispatch();

	const lectures = useSelector(lecturesSelector);

	useEffect(() => {
		const getLectures = async () => {
			try {
				dispatch(fetchLectures({ limit: 6 }));
			} catch (error) {
				console.log(error);
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
						<LectureCard key={item.id} {...item} />
					))}
				</div>

			</div>
		</section>
	);
};