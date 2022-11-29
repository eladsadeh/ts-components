import { useEffect, useState } from 'react';
import { updateNodeStyles } from '../../../reducers/content';
import { useDispatch } from 'react-redux';

import { InputProps, UnitContainerProps } from '../../../types/RightSidebar/Input';

import styles from './Input.styles';

const UnitContainer = ({
  toggle,
  selectedValueType,
  inputValue = '0',
  updateValue,
  setNewStyle
}: UnitContainerProps) => {
  const selectedValueTypeRender = selectedValueType === 'None' || selectedValueType === 'Auto' ? '-' : selectedValueType;
  const value = selectedValueType === 'None' || selectedValueType === 'Auto' ? selectedValueType : inputValue;

  return (
    <div css={styles.input}>
      <input
        css={styles.containerInput}
        type="text"
        value={value} onChange={(e) => updateValue(e)}
        onBlur={(e) => setNewStyle(e.target.value, selectedValueType)}
      />
      <div css={styles.unit} onClick={ toggle } >
        <h4 css={styles.selectedUnit}>{ selectedValueTypeRender }</h4>
      </div>
    </div>
  );
};

const Input = (
  {
    valueTypes = [],
    paramName = '',
    defaultValue,
    styleType,
    displayRange
  }: InputProps
) => {
  const dispatch = useDispatch();

  const [isOpen, toggle] = useState(false);
  const [activeValueType, setValueType] = useState(valueTypes[0] || '');
  const [inputValue, setInputValue]: any = useState(defaultValue || '0');

  const updateValue = (e: any) => {
    const value = parseInt(e.nativeEvent.data, 10);
    const { data } = e.nativeEvent;

    if (value || value === 0 || data === null || (data === '-' && e.target.value.length <= 1)) {
      setInputValue(e.target.value);
    }
  };

  useEffect(() => {
    let newActiveValueType: any = valueTypes
      .find((type: string) => defaultValue?.toLocaleLowerCase()?.includes(type.toLowerCase())) || 'PX';

    if (valueTypes.length === 1) [newActiveValueType] = valueTypes;

    setValueType(newActiveValueType);
    setInputValue(defaultValue?.replace(newActiveValueType?.toLowerCase(), ''));

    if ((styleType === 'borderRadius' || styleType === 'borderWidth' || styleType === 'shadowOpacity') && defaultValue) {
      setNewStyle(defaultValue.replace(newActiveValueType.toLowerCase(), ''), newActiveValueType);
    }
  }, [defaultValue]);

  const setNewStyle = (newValue: string, type: string) => {
    const valueToSet = type === 'None' || type === 'Auto'
      ? type.toLocaleLowerCase()
      : `${newValue}${type.toLowerCase()}`;

    dispatch(updateNodeStyles({
      type: styleType,
      value: valueToSet
    }));
  };

  const onValueTypeChange = (valueType: string) => {
    setValueType(valueType);
    toggle(!isOpen);

    if (inputValue) {
      setNewStyle(inputValue, valueType);
    }
  };

  const renderedItems = valueTypes.map((valueType: any, index: number) => {
    return (
      <div onClick={() => onValueTypeChange(valueType)} key={index} css={styles.dropdownUnit}>
        <h4 css={styles.dropdownUnitValue}>{ valueType }</h4>
      </div>
    );
  });

  return (
    <div css={styles.wrapper}>
      {displayRange && (
        <input
          type="range"
          name="border"
          min="0"
          value={inputValue
            .replace('px', '')
            .replace('em', '')
            .replace('%', '')}
          max="100"
          css={styles.range}
          className={"a-value-input__range"}
          onChange={(e) => setInputValue(`${e.target.value}`)}
        />
      )}
      <div css={styles.component(displayRange)}>
        <h4 css={styles.heading}>{paramName}</h4>
        <div css={styles.container} className="a-value-input-container">
          <UnitContainer
            selectedValueType={activeValueType}
            toggle={() => toggle(!isOpen)}
            setNewStyle={setNewStyle}
            inputValue={inputValue}
            updateValue={updateValue}
          />
          {isOpen && valueTypes.length > 1 ? (
            <>
              <div css={styles.dropdown}>
                {renderedItems}
              </div>
              <div
                css={styles.dropdownWrapper}
                onClick={() => toggle(!isOpen)}
              ></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Input;
