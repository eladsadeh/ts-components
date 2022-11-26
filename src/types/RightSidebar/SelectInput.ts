export type SelectInputProps = {
  values: string[],
  heading: string,
  styleType?: string,
  initInputValue?: string
};

export type SelectContainerProps = {
  toggle: () => void,
  selectedValue: string
};

export type ItemProps = {
  value: string,
  setValue: (value: string) => void
};
