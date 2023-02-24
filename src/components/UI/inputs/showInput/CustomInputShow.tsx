import React, { ChangeEvent } from "react";
import styles from './CustomInputShow.module.scss'

interface IProps {
  title: string;
  limit: number;
  onChange: (event: ChangeEvent<HTMLInputElement> ) => void;
}

export const CustomInputShow = (props: IProps) => {
  return (
	<label>
	  {props.title}
	  <input className={styles.inputShow} type="number" defaultValue={props.limit} onChange={(e) => props.onChange(e)} />
	  <span>events per page</span>
	</label>
  );
};