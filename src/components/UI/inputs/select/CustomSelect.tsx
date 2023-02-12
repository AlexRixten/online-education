import React, { ChangeEvent } from "react";
import Select from "react-select";
import { ICustomSelect } from "../../../../interfaces/customsUI";

import styles from './CustomSelect.module.scss'

interface IProps {
  selectList: ICustomSelect[];
  title: string;
  onChange?: (value: string) => void;
}

export const CustomSelect = (props: IProps) => {
  return (
	<label className={styles.label}>
	  {props.title}
	  <Select
		className={styles.select}
		defaultValue={props.selectList[0]}
		options={props.selectList}
		isClearable
		// @ts-ignore
		onChange={( option) => props.onChange( option.value )}
	  />
	</label>
  );
};