import type { MessageResponse } from "./MessageResponse";
import type { WidgetData } from '../Widgets';
import { LayoutData } from "../Layout";

export type ReceivedInsertableWidgets = MessageResponse & {
    data: WidgetData[],
};

export type ReceivedInsertableElements = MessageResponse & {
    data: WidgetData[],
};

export type AddedWidget = WidgetData & {
    layout: LayoutData,
};

export type AddWidgetPayload = WidgetData & {
    layoutId: number;
};

export type RemoveLayoutPayload = {
    layoutId: number | string,
};