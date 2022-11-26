export enum Status {
  progress = 'progress',
  complete = 'complete',
  error = 'error'
}

export type ProgressPorps = {
  status: Status,
  percent: number
}