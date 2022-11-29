import { WidgetData } from './Widgets';

export type LayoutData = {
  id: number | string,
  type: LayoutVariant,
  columnsNumber: number,
  orderWeight: number,
  widgets: WidgetData[],
}

export type LayoutVariant = 'block' | 'columns';

export type AddLayoutPayload = Omit<LayoutData, 'id'> & { templateId?: number }
