import logo from '../../assets/Images/footer/logo.png'

import styles from "./Footer.module.scss";
import { CONTACT_US, COURSES, NAV_LINK, SOCIAL_LINK } from "../../mockData";
import { Icon } from "../../components/Icon";
import { ERoutes } from "../../enums/routes.enum";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.topBar}>
				<div className="container">
					<div className={styles.wrapper}>

						<div className={styles.main}>
							<Link className={styles.logo} to={ERoutes.Home}>< img src={logo} alt="logo" /></Link>
								<p className={styles.description}>
									Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.
								</p>
							<ul className={styles.socials}>
								{SOCIAL_LINK.map((item) => (
									<li key={item.id} className={styles.socialLink}>
										<a href={item.path} >
											<Icon size={22} color="#A5A6AB" name={item.title} />
										</a>
									</li>
								))}
							</ul>
						</div>

						<ul className={styles.siteMap}>
							<li>SITE MAP</li>
							{NAV_LINK.map((item) => (
								<li key={item.id} className={styles.socialLink}>
									<Link to={item.path} >
										{item.title}
									</Link>
								</li>
							))}
						</ul>

						<ul className={styles.courses}>
							<li>COURSES</li>
							{COURSES.map((item) => (
								<li key={item.id} className={styles.socialLink}>
									<Link to={item.path} >
										{item.title}
									</Link>
								</li>
							))}
						</ul>

						<ul className={styles.contactUs}>
							<li>CONTACT US</li>
							{CONTACT_US.map((item) => (
								<li key={item.id} className={styles.socialLink}>
									<a href={item.path} >
										<Icon size={22} color="#A5A6AB" name={item.title} />
										{item.title}
									</a>
								</li>
							))}
						</ul>

					</div>
				</div>
			</div>

				<div className={styles.bottomBar}>
					<div className="container">
						<div className={styles.wrapperBottomBar}>

						</div>
					</div>
				</div>
		</footer>
	);
};