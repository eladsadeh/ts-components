export type WidgetData = {
  id: number | string,
  type: string,
  name: string,
  orderWeight: number,
  entity: WidgetEntity,
}

export type WidgetEntity = {
  columns?: FeatureTableColumn[],
}

export type FeatureTableColumn = {
  columnType: string
  showColumnMenu?: boolean
  showInColumnChooser?: boolean
  visible?: boolean
  field?: string
  key: string
  headerText?: string
  width: number
  clipMode?: string
  // filter?: { type: string }
  // template?: null | any
}

export type DefaultInsertable = Omit<WidgetData, 'orderWeight'>
