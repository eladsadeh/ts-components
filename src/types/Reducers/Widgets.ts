import { MessageResponse } from "./MessageResponse";
import { WidgetData } from "../Widgets";

export type ReceivedWidgetById = MessageResponse & {
    data: WidgetData,
};