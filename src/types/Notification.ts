export type NotificationProps = {
  isActive: boolean,
  title?: string,
  message?: string,
  type?: string,
  timeToClose?: number
  onClose: () => void
};