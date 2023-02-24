import React, { ChangeEvent } from "react";
import { Icon } from "../../../Icon";
import styles from './CustomInputSearch.module.scss'

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement> ) => void;
}

export const CustomInputSearch = (props: IProps) => {
  return (
	<label className={styles.labelSearch}>
	  {/*@ts-ignore*/}
	  <input type="text" placeholder="Search event..." value={props.value} onChange={(e) => props.onChange(e)} />
	  <Icon size={16} color="#9A9CA5" name="search" />
	</label>
  );
};