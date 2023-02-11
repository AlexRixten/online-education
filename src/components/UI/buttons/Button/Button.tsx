import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface IProps {
	path: string;
	text: string;
	color: boolean;
	style?: any;
}

export const Button = (props: IProps) => {
	return (
		<Link style={props.style} to={props.path}
					className={`${styles.button} ${props.color ? styles.bg : styles.br}`}>{props.text}
		</Link>
	);
};