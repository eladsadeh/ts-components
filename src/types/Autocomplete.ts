import { ChangeEvent } from "react"

export type AutocompleteProps = {
  name: string,
  placeholder: string,
  header: string,
  editorReference?: React.Ref<any>
  value?: string,
  isValid: (value: string) => boolean,
  getFilterdOptions: (text: string) => string[],
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onSelect?: (value: string) => void
}