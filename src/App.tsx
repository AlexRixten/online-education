import { useSelector } from "react-redux";
import { authSelector } from "./store/selectors/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { ERoutes } from "./enums/routes.enum";
import { HomePage } from "./pages/Home/HomePage";
// import { MainLayout } from "./layouts/mainLayout/MainLayout";

function App() {
	const { isAuth } = useSelector(authSelector);

	if (isAuth) {
		return (
			<Routes>
				{/*<Route path={ERoutes.SignIn} element={<SignInPage />} />*/}
				<Route path="*" element={<Navigate replace to={ERoutes.SignIn} />} />
			</Routes>
		);
	}
	return (
		// <MainLayout>
			<Routes>
				<Route path={ERoutes.Home} element={<HomePage />} />
			</Routes>
		// </MainLayout>
	);
}

export default App;
