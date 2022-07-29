/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Select from '../components/Atoms/Select/Select'
import styles from '../components/Atoms/Select/Select.style'

function Projects() {
  const [value, setValue] = useState<number>(0);
  const [showSelect, setShowSelect] = useState<boolean>(false)
  const list = [{label: 'First option', value: 1}, {label: 'Second option', value: 2}, {label: 'Third option', value: 3}, {label: 'Fourth option', value: 4}];
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
          onClick={() => setShowSelect(true)}>
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