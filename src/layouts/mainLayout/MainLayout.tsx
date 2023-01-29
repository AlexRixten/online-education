import React, { ReactNode } from "react";
import styles from "./MainLayout.module.scss";
import { Header } from "../../modules/Header/Header";
import { Footer } from "../../modules/Footer/Footer";

interface IProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
	return (
		// <div className={styles.appContainer}>
		// 	<main>{children}</main>
		// </div>
		<div className={styles.layout}>
		  <div className={styles.content}>
			<Header />
			{children}
		  </div>
			<Footer />
		</div>
	);
};