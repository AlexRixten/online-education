import { ITag } from "../../../interfaces/courses";

import styles from "./Tag.module.scss";

export const Tag = (props: ITag) => {
	const { title, color } = props;
	return (
		<div className={styles.tag} style={{background: color }}>{title}</div>
	);
};