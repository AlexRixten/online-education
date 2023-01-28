import styles from './Badge.module.scss'
import { Icon } from "../Icon";

interface IProps{
	name: string;
}

export const Badge = (props:IProps) => {
	return(
		<div className={styles.badge}>
			<Icon size={16} color='#424551' name={props.name} />

		</div>
	)
}