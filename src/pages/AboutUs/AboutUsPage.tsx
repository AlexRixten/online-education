import React from "react";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import styles from "./AboutUsPage.module.scss";

export const AboutUsPage = () => {
  return (
	<section className={styles.aboutUsPage}>
	  <div className="container">
		<Title text="About us" center={false} />
		<Subtitle text="Createx Online School" center={false} />
	  </div>
	</section>
  );
};