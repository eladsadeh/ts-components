import { MessageResponse } from "./MessageResponse";
import { UserData } from "../User";

export type Project = {
    id: number,
    name: string,
    datasourceName: string,
    datasourceKey: string,
    lead: UserData,
}

export type NewProject = {
    name: string,
    leadId: number,
    datasourceName: string,
    datasourceKey: string,
}

export type ReceivedProjects = MessageResponse & {
    data: Project[];
};

export type SaveProjectPayload = {
    project: NewProject,
};

export type SavedProject = {
    data: Project & {
        leadId: number,
    },
};
