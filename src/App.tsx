import { useSelector } from "react-redux";
import { authSelector } from "./store/selectors/authSelector";
import { Navigate, Route, Routes } from "react-router-dom";
import { loadedSelector } from "./store/selectors/loadedSelector";
import { HomePage } from "./pages/Home/HomePage";
import { AboutUsPage } from "./pages/AboutUs/AboutUsPage";
import { EventsPage } from "./pages/Events/EventsPage";
import { ContactsPage } from "./pages/Contacts/ContactsPage";
import { CoursePage } from "./pages/Course/CoursePage";
import { CoursesPage } from "./pages/Courses/CoursesPage";
import { BlogsPage } from "./pages/Blogs/BlogsPage";
import { EventPage } from "./pages/Event/EventPage";
import { PostPage } from "./pages/Post/PostPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { MainLayout } from "./layouts/mainLayout/MainLayout";
import { Spinner } from "./components/Spinner/Spinner";
import { ERoutes } from "./enums/routes.enum";

function App() {
	const { isAuth } = useSelector(authSelector);
	const {isLoading} = useSelector(loadedSelector)

	if (isAuth) {
		return (
			<Routes>
				<Route path="*" element={<Navigate replace to={ERoutes.SignIn} />} />
			</Routes>
		);
	}

	if(isLoading){
		return(
			<Spinner />
		)
	}

	return (
		<MainLayout>
			<Routes>
				<Route path={ERoutes.Home} element={<HomePage />} />
				<Route path={ERoutes.AboutUs} element={<AboutUsPage />} />
				<Route path={ERoutes.Events} element={<EventsPage />} />
				<Route path={ERoutes.Contacts} element={<ContactsPage />} />
				<Route path={`${ERoutes.Course}/:courseId`} element={<CoursePage />} />
				<Route path={ERoutes.Courses} element={<CoursesPage />} />
				<Route path={ERoutes.Blogs} element={<BlogsPage />} />
				<Route path={`${ERoutes.Event}/:eventId`} element={<EventPage />} />
				<Route path={`${ERoutes.Post}/:postId`} element={<PostPage />} />
				<Route path={ERoutes.NotFound} element={<NotFoundPage />} />
			</Routes>
		</MainLayout>
	);
}

export default App;
