import { IBlog } from "../../interfaces/blogs";

export const BlogCard = (props: IBlog) => {
	const {title} = props;
	return (
		<>
			{title}
		</>
	)
}