import React, { useState } from "react";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import styles from "./Subscribe.module.scss";

export const Subscribe = () => {
	const [value, setValue] = useState<string>('')
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		if(value.length !== 0){
			console.log(value)
			setValue('')
		}
	}

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	return (
		<section className={styles.subscribe}>
			<div className="container">
				<Title text="Don’t miss anything" center={true} />
				<Subtitle text="Subscribe to the Createx School announcements" center={true} />
				<form className={styles.form} onSubmit={submitHandler}>
					<input value={value} onChange={changeHandler} placeholder="Your working email" type="email"/>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</section>
	);
};