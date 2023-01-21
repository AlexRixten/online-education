import { ITag } from "../../interfaces/courses";

import styles from "./Tags.module.scss";
import { Tag } from "./Tag/Tag";

export const Tags = (props: ITag[]) => {
	return (
		<div className={styles.tags}>
			{Object.values(props)?.map((tag) => (
				<Tag key={tag.id} {...tag} />
			))}
		</div>
	);
};