import { About } from "../../components/About/About";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Courses } from "../../components/Courses/Courses";
import { Benefits } from "../../components/Benefits/Benefits";
import { Lectures } from "../../components/Lectures/Lectures";


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