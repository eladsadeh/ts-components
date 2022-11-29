import type { Template } from '../Template';
import type { MessageResponse } from "./MessageResponse";

export type ReceivedTemplates = MessageResponse & {
    data: Template[],
};

export type ReceivedTemplateById = MessageResponse & Template;

export type SavedTemplate = MessageResponse & {
    data: Template,
};

export type SaveTemplatePayload = {
    projectId: number,
    template: Template,
};

export type EditedTemplate = MessageResponse & {
    data: Template,
};

export type DeletedTemplate = MessageResponse & {
    data: Template[],
};