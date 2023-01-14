import { useSelector } from "react-redux";
import { authSelector } from "./store/selectors/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { ERoutes } from "./enums/routes.enum";
import { Button } from "./components/Button/Button";

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
      <Routes>
          <Route path={ERoutes.Home} element={<Button path='/' text="Text" color={false}/>} />
      </Routes>
    );
}

export default App;
