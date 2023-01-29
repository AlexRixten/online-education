import styles from './Badge.module.scss'
import { Icon } from "../Icon";

interface IProps{
	name: string;
	class?: string;
	title: string;
}

export const Badge = (props:IProps) => {
	const className = props.class ? styles[props.class] : null
	return(
		<div className={`${styles.badge} ${className}`}>
			<Icon size={16} color='#424551' name={props.name} />
			<h3>{props.title}</h3>
		</div>
	)
}