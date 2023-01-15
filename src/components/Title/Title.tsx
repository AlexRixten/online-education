import styles from "./Title.module.scss";

interface IProps {
	text: string;
	center?: boolean;
}

export const Title = (props: IProps) => {
	return (
		<h2 className={`${styles.title} ${props.center ? styles.textCenter : ''}`}>{props.text}</h2>
	);
};