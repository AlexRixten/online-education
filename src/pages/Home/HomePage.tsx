import { About } from "../../components/About/About";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Courses } from "../../modules/Courses/Courses";
import { Benefits } from "../../components/Benefits/Benefits";
import { Lectures } from "../../modules/Lectures/Lectures";


export const HomePage = () => {
	return (
		<>
			<About />
			<Subscribe/>
			<Courses />
			<Benefits />
			<Lectures />
		</>
	);
};