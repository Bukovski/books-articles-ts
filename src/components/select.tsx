import * as React from "react";
import { useState } from "react";


interface ISelectProps {
  valueSelect: number,
  optionData: {
    options: number[],
    name: string
  },
  handleSelect: (recordNumber: number) => void
}


const Select = (props: ISelectProps) => {
  const { valueSelect, optionData, handleSelect } = props;
  const [ selected, setSelected ] = useState(valueSelect);

  const optionList = () => {
    const { options, name } = optionData;
    
    return options.map(value => <option key={ value + name } value={ value }>{ value }</option>)
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target as typeof event.target & { value: string };
    const valueNum = parseInt(value);

    setSelected(valueNum);
    handleSelect(valueNum);
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
