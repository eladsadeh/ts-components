import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
`;

const component = (displayRange?: boolean) => css`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 11px;
  width: ${displayRange ? '56' : '107'}px;
`;

const heading = css`
  align-self: center;
  height: 14px;
  color: #757575;
  font-weight: 600;
`;

const container = css`
  border-radius: 1px;
  background-color: #f3f3f3;
  width: 56px;
  height: 27px;
`;

const input = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #f3f3f3;
  height: inherit;
  width: 56px;
`;

const unit = css`
  width: 15px;
  height: inherit;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const selectedUnit = css`
  user-select: none;
  font-size: 8px;
  font-weight: 600;
  color: #4f4f4f;
`;

const containerInput = css`
  flex-shrink: 0;
  padding-left: 5px;
  color: #4f4f4f;
  font-size: 11px;
  background-color: #f3f3f3;
  border: 0;
  width: 30px;
`;

const dropdown = css`
  z-index: 10003;
  border-radius: 1px;
  position: relative;
  top: -27px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.15));
`;

const dropdownUnit = css`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0faeb;
  }
`;

const dropdownUnitValue = css`
  font-weight: 600;
  font-size: 12px;
  color: #4f4f4f;
`;

const dropdownWrapper = css`
  z-index: 10002;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
`;

const range = css`
  -webkit-appearance: none;
  width: 73px;
  margin-right: 10px;
  cursor: ew-resize;

  &::-webkit-slider-runnable-track {
    background-color: #BABABA;
    height: 2px;
  }

  &::-moz-range-track{
    background-color: #BABABA;
    height: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -5px;
    border: 6px solid #999797;
    border-radius: 100px;
    background-color: #999797;
    width: 10px;
    height: 10px;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    margin-top: -5px;
    border: 1px solid #999797;
    border-radius: 100px;
    background-color: #999797;
    height: 10px;
    width: 10px;
  }
`;

const styles = {
  wrapper,
  component,
  heading,
  container,
  input,
  unit,
  selectedUnit,
  containerInput,
  dropdown,
  dropdownUnit,
  dropdownUnitValue,
  dropdownWrapper,
  range
};

export default styles;
