import { MessageResponse } from "./MessageResponse";
import { Page } from "../Page";

export type ReceivedPages = MessageResponse & {
    data: Page[];
};

export type SavedNavigate = MessageResponse & {
    data: Page;
};

export type DeletedNavigate = MessageResponse & Page;