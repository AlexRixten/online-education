import logo from "../../assets/Images/logo/logo.png";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINK } from "../../mockData";
import { ERoutes } from "../../enums/routes.enum";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.wrapper}>
					<Link className={styles.logo} to={ERoutes.Home}>< img src={logo} alt="logo" /></Link>
					<nav className={styles.nav}>
						<ul className={styles.list}>
							{NAV_LINK.map((item) => (
								<li className={styles.link} key={item.id}>
									<NavLink to={item.path}>{item.title}</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};