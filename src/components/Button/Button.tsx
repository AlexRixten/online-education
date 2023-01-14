import { Link } from "react-router-dom";
import styles from './Button.module.scss'

interface IProps {
	path: string;
	text: string;
	color: boolean;
}

export const Button = (props: IProps) => {
	return (
		<Link to={props.path} className={`${styles.button} ${props.color ? styles.bg : styles.br }`}>{props.text}</Link>
	);
};