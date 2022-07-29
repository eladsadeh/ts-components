/** @jsxImportSource @emotion/react */
import React, {useState, useEffect, useCallback} from 'react';

import styles from './Select.style'

type SelectProps = {
  list: {label: string, value: number}[];
  showSelect: boolean;
  setShowSelect: (show: boolean) => void;
  onSelection: (value: number) => void;
}

function Select({list, showSelect, onSelection, setShowSelect}: SelectProps) {

  const [filter, setFilter] = useState<string>('')
  const filteredOptions = list.filter((option) => option.label.toLowerCase().includes(filter.toLowerCase()));

  const handleSelect = (value: number) => {
    onSelection(value)
    setFilter('')
  }

  const handleKeys = (ev: any) => {
    ev.stopPropagation()
    
    if (ev.key === 'Enter') {
      if (filter === filteredOptions[0].label) 
        handleSelect(filteredOptions[0].value)
      else if (filteredOptions.length === 1)
        setFilter(filteredOptions[0].label)
    }
    if (ev.key === 'Escape') {
      if (filter) setFilter('')
      else setShowSelect(false);
    }
  }

  const cancelSelect = useCallback((ev: KeyboardEvent) => {
        ev.stopPropagation()    
    if (ev.key === 'Escape') setShowSelect(false)
  },[])

  useEffect(() => { 
    if (showSelect) document.addEventListener("keydown", cancelSelect);
    else document.removeEventListener("keydown",cancelSelect);
  }, [showSelect]);

  return (
    <div css={styles.select(showSelect)}>
      <input className='filterInput'
        type='text'
        ref={(input) => input && input.focus()}
        value={filter}
        placeholder='Filter names'
        onKeyDown={(ev) => handleKeys(ev)}
        onChange={(ev) => setFilter(ev.target.value)}
      />
      <ul>
        {filteredOptions.map((option) =>
          <li key={option.value}
            onClick={() => handleSelect(option.value)}>
            {option.label}
          </li>)}
      </ul>
    </div>
  );
}

export default Select;