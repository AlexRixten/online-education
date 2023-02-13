import { Link } from "react-router-dom";
import { Badge } from "../Badge/Badge";
import { IBlog } from "../../interfaces/blogs";
import { Icon } from "../Icon";
import styles from "./BlogCard.module.scss";

export const BlogCard = (props: IBlog) => {
	const { id, type, nameType, title, description, date, duration, linkTitle, tag, imgUrl } = props;
	return (
		<div className={styles.blogCard}>
			<Badge class="absolute" name={type} title={nameType} />
			<img src={imgUrl} alt={imgUrl} />
			<div className={styles.meta}>
				<span>{tag}</span>
				<div className={styles.divider}></div>
				<div className={styles.date}>
					<Icon size={14} color="#787A80" name="calendar" />
					{date}
				</div>
				<div className={styles.divider}></div>
				<div className={styles.duration}>
					<Icon size={14} color="#787A80" name="watch" />
					{duration} min
				</div>
			</div>
			<p className={styles.title}>
				{title}
			</p>
			<p className={styles.description}>
				{description}
			</p>
			<Link className={styles.link} to={`post/${id}`}>
				{linkTitle}
				<Icon size={14} color="#FF3F3A" name="arrowNext" />
			</Link>
		</div>
	);
};