import { ITag } from "../../interfaces/courses";
import { Tag } from "./Tag/Tag";
import styles from "./Tags.module.scss";

export const Tags = (props: ITag[]) => {
	return (
		<div className={styles.tags}>
			{Object.values(props)?.map((tag) => (
				<Tag key={tag.id} {...tag} />
			))}
		</div>
	);
};