import { MessageResponse } from './MessageResponse';

export type Map = {
    id: number,
    portalItemId: string,
    url: string,
    itemId: number,
    portalId: number,
    project: number
}

export type NewMap = {
    portalItemId: string,
    url: string,
    itemId: number,
    portalId: number,
    project: number
}

export type ReceivedMaps = MessageResponse & {
    data: Map[],
}