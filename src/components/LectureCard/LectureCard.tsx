import { ILecture } from "../../interfaces/lectures";

import styles from "./LectureCard.module.scss";
import { Button } from "../UI/buttons/Button/Button";
import { ERoutes } from "../../enums/routes.enum";

const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface IProps {
  item: ILecture;
  view?: string;
}

export const LectureCard = (props: IProps) => {
  const { id, date, gap, title, lesson } = props.item;

  const classNameForView = props.view === "tiles" ? styles.tiles : styles.lines;

  return (
	<div className={`${styles.lectureCard} ${classNameForView}`}>
	  {/*<div className={classNameForView}>*/}
	  <div className={styles.date}>
		<div className={styles.day}>{date.slice(0, 2)}</div>
		<div className={styles.time}>
		  <div className={styles.month}>{monthArray[+date.slice(3, 5) - 1]}</div>
		  <div className={styles.duration}>{gap}</div>
		</div>
	  </div>
	  <div className={styles.description}>
		<div className={styles.title}>{title}</div>
		<div className={styles.subtitle}>{lesson}</div>
	  </div>
	  <Button path={`${ERoutes.Event}/${id}`} text="View more" color={false}
			  style={{ maxWidth: 136, height: 44, fontSize: 14, padding: 5, width: "100%" }} />
	  {/*</div>*/}
	</div>
  );
};