import { ReactNode } from "react";
import { FieldError, UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"

export type ProjectCreateProps = {
    setIsShowModal: (flag: boolean) => void
};

export type ProjectCreateModalProps = {
    setIsShowModal: (flag: boolean) => void;
    children: ReactNode
}

export type NewProjectFormData = {
    newProjectName: string,
    newLeadName: string,
    datasourceName: string,
    datasourceKey: string,
}

export type AutocompleteProps = {
    name: "newProjectName" | "newLeadName",
    placeholder: string,
    header: string,
    dataSource: string[],
    register: UseFormRegister<NewProjectFormData>,
    setValue: UseFormSetValue<NewProjectFormData>,
    error: FieldError | undefined,
    clearErrors: UseFormClearErrors<NewProjectFormData>,
}

export type FormProps = {
    leads: string[],
    onSubmit: (data: NewProjectFormData) => void
}