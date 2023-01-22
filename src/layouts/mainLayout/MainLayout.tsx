import React, { ReactNode } from "react";
import styles from "./MainLayout.module.scss";
import { Header } from "../../modules/Header/Header";

interface IProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
	return (
		// <div className={styles.appContainer}>
		// 	<main>{children}</main>
		// </div>
		<>
			<Header />
			{children}
		</>
	);
};