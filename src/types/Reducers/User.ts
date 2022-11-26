import { EditUserRequest, UserData } from "../User";
import { MessageResponse } from "./MessageResponse";

export type AuthenticatedUser = {
    status: string,
    message?: string,
    user: UserData,
};

export type UpdateUserPayload = {
    id: number,
    values: EditUserRequest,
};

export type ReceivedUsers = MessageResponse & {
    data: UserData[],
}