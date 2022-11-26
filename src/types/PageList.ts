export type NavigationPage ={
  href: string
  id: number
  isActive: boolean
  title: string
  template: string | number
}

export type ContainerProps = {
  isSidebarOpen: boolean
  onCloseSidebar: (type: string, value: boolean) => void
}

export type ComponentProps = {
  pages: NavigationPage
  selectedPage: NavigationPage
  children: any
  onPageClick: (id?: number) => void
  closePageSidebar: () => void
}

export type NavigationPageEditorProps = {
  editingPageData: null | NavigationPage
  onSettingsFieldEdit: (value: string, type: string) => void
  onBtnsClick: (type: string) => void
}
