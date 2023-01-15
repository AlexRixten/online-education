import React, { ReactNode } from 'react';
import './MainLayout.scss';

interface IProps {
	children: ReactNode;
}

export default function Layout({ children }: IProps) {
	return (
		<div className="main-layout">
			<div className="app-container">
				<main>{children}</main>
			</div>
		</div>
	);
}