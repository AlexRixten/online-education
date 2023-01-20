import { ITag } from "../../interfaces/courses";

import styles from "./Tags.module.scss";
import { Tag } from "./Tag/Tag";

export const Tags = (props: ITag[]) => {
	console.log('props', props)
	return (
		<div className={styles.tags}>
			{Object.values(props)?.map((tag) => (
				<Tag id={tag.id} title={tag.title} color={tag.color} />
			))}
		</div>
	);
};