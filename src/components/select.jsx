import React, { useState } from "react";


const Select = (props) => {
  const { valueSelect, optionData, handleSelect } = props;
  const [ selected, setSelected ] = useState(valueSelect);
  
  const optionList = () => {
    const { options, name } = optionData;
    
    return options.map(value => <option key={ value + name } value={ value }>{ value }</option>)
  };
  
  const handleChange = (event) => {
    const { value } = event.target;
    
    setSelected(value);
    handleSelect(parseInt(value));
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
