export type ContainerProps = {
  layoutType: string
}

export type ComponentProps = {
  layoutType: string
  clickHandler: (args: any) => void
  createNodesFromUser: (itemsCount: number, rowCount: number, columnsCount: number) => void
  renderNodes: () => any
}

export type Node = {
  node: string
  row?: number
  children: Node[]
  style: any
  id?: string
  properties: any
}
