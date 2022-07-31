/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Select from '../components/Atoms/Select/Select'
import styles from '../components/Atoms/Select/Select.style'

function Projects() {
  const [value, setValue] = useState<number>(0);
  const [showSelect, setShowSelect] = useState<boolean>(false)
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

  const handleSelection = (value: number) => {
    setValue(value)
    setShowSelect(false)
  }
  return (
      <div css={styles.wrapper}>Select List Demo
        <label>Select list</label>
        <div className='input'
          onClick={() => setShowSelect(!showSelect)}>
          {currentSelection?.label || 'Click to open list'}
          <Select 
            list={list} 
            showSelect={showSelect}
            setShowSelect={setShowSelect}
            onSelection={handleSelection}/>
          </div>
      </div>
  );
}

export default Projects;