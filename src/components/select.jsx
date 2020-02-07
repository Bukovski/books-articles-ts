import React, { useState } from "react";


const Select = (props) => {
  const [ selected, setSelected ] = useState(props.valueSelect);
  
  const optionList = () => {
    const { options, name } = props.optionData;
    
    return options.map(value => <option key={ value + name } value={ value }>{ value }</option>)
  };
  
  const handleChange = (event) => {
    const { value } = event.target;
    
    setSelected(value);
    props.handleSelect(parseInt(value));
  };
  
  return (
    <div>
      <select
        className="custom-select"
        onChange={ handleChange }
        value={ selected }
      >
        { optionList() }
      </select>
    </div>
  )
};


export default Select;
