import React, { ChangeEvent } from "react";
import Select from "react-select";
import { ICustomSelect } from "../../../../interfaces/customsUI";

interface IProps {
  selectList: ICustomSelect[];
  title: string;
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export const CustomSelect = (props: IProps) => {
  return (
	<label>
	  {props.title}
	  <Select
		className="test"
		name="color"
		options={props.selectList}
		styles={{ menu: (base) => ({ ...base, position: 'relative' })}}
		isClearable
	  />
	</label>
  );
};