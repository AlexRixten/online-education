import styles from "./Subtitle.module.scss";

interface IProps {
	text: string;
	center?: boolean;
}

export const Subtitle = (props: IProps) => {
	return (
		<h2 className={`${styles.subtitle} ${props.center ? styles.textCenter : ''}`}>{props.text}</h2>
	);
};