import React from "react";
import { TAGS } from "../../../mockData";

function FilterTags() {
	return (
		<>
			{TAGS.map(tag => (
				<div key={tag.id}>{tag.title}</div>
			))}
		</>
	);
}

export default FilterTags;