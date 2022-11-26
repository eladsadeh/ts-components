import { MessageResponse } from "./MessageResponse";
import { WidgetData } from "../Widgets";

export type ReceivedEditorElements = {
    widgets: {
        data: MessageResponse & {
            data: WidgetData[],
        },
        status: number,
        statusText: string,
    },
    status?: string,
    message?: string,
};