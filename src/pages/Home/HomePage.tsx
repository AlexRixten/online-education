import { About } from "../../components/About/About";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Courses } from "../../modules/Courses/Courses";
import { Benefits } from "../../components/Benefits/Benefits";
import { Lectures } from "../../modules/Lectures/Lectures";
import { Blogs } from "../../modules/Blogs/Blogs";


export const HomePage = () => {
	return (
		<>
			<About />
			<Courses />
			<Benefits />
			<Lectures />
			<Blogs />
			<Subscribe/>
		</>
	);
};