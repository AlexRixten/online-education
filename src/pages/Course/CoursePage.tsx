import { useParams } from "react-router-dom";

export const CoursePage = () => {
	const { courseId } = useParams();
	return (
		<h1>CoursePage {courseId}</h1>
	);
};