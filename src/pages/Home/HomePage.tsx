import { About } from "../../components/About/About";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Courses } from "../../components/Courses/Courses";


export const HomePage = () => {
	return (
		<>
			<About />
			<Subscribe/>
			<Courses />
		</>
	);
};