export type InputProps = {
  paramName?: string
  valueTypes?: string[]
  defaultValue?: string
  styleType: string
  displayRange?: boolean
};

export type UnitContainerProps = {
  toggle: () => void
  setNewStyle: (newValue: string, type: string) => void
  updateValue: (element: any) => void
  selectedValueType: string
  inputValue?: string
};
