import React from "react";
import { nanoid } from 'nanoid'

const inputSearchId = nanoid()

const Filtr = ({ filter, onChange }) => (
<label htmlFor={inputSearchId}>Search
<input id={inputSearchId} type="text" value={filter} onChange={onChange} name="search" placeholder="Search" />
</label>
)


export default Filtr;
