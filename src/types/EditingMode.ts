export type EditingModeProjectInfo = {
  projectId: number,
  editorName: string
};

export type EditingConfirmationState = {
  editorName: string,
  isOpen: boolean
};

export type ConfirmationModalProps = {
  editorName: string,
  isOpen: boolean,
  enterProjectOnEditMode: () => any
  onClose: () => any
};

export enum EventsName {
  editingStart = 'editingStart',
  editingStarted = 'editingStarted',
  editingEnd = 'editingEnd',
  editingStopped = 'editingStopped',
  afterConnection = 'afterConnection',
  afterConnectionUpdates = 'afterConnectionUpdates'
}
