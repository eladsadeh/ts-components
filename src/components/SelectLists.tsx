/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import SingleSelect from './Atoms/Select/SingleSelect'
import MultiSelect from './Atoms/Select/MultiSelect'
import styles from './Atoms/Select/Select.style'

function Projects() {
  const [value, setValue] = useState<number>(0);
  const [showSSelect, setShowSSelect] = useState<boolean>(false)

  const [values, setValues] = useState<number[]>([]);
  const [showMSelect, setShowMSelect] = useState<boolean>(false)

  const list: {label: string, value: number}[] = [
    { label: "California", value: 1 },
    { label: "New Hampshire", value: 2 },
    { label: "Montana", value: 3 },
    { label: "New York", value: 4 },
    { label: "Colorado", value: 5 },
    { label: "Arizona", value: 6 },
    { label: "Washington", value: 7 },
    { label: "Oregon", value: 8 },
    { label: "Utah", value: 9 },
    { label: "Alabama", value: 10 },
    { label: "Hawaii", value: 11 },
    { label: "Alaska", value: 12 },
    { label: "Vermont", value: 13 }
  ];

  const currentSelection = list.find((option) => 
    option.value === value);
  
    // handle single select selection
  const handleSelection = (value: number) => {
    setValue(value)
    setShowSSelect(false)
  }

    // handle multiple selection
  const handleMultiSelection = (value: number) => {
    console.log('handle multi-selection');
    
    setValues([...values, value])
    setShowSSelect(false)
  }

  return (
      <div css={styles.wrapper}>Select List Demo
        <label>Select list</label>
        <div className='input'
          onClick={() => setShowSSelect(!showSSelect)}>
          {currentSelection?.label || 'Click to open list'}
          <SingleSelect 
            list={list} 
            showSelect={showSSelect}
            setShowSelect={setShowSSelect}
            onSelection={handleSelection}/>
          </div>
        <div className='input'
          onClick={() => setShowMSelect(!showMSelect)}>
          {values.length ?
          values.map(value => <span key={value}>{value}</span>) 
          : 'Click to select'}
          <MultiSelect 
            list={list} 
            showSelect={showMSelect}
            setShowSelect={setShowMSelect}
            onSelection={handleMultiSelection}/>
          </div>
      </div>
  );
}

export default Projects;