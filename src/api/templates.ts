import service from '../utils/http';

import type { Template } from '../types/Template';

const GetAll = async () => service.get('templates');
const GetById = async (id: number) => service.get(`templates/${id}`);
const Post = async (projectId: number, data: any) => service.post('templates/', data, {
  params: {
    projectId
  }
});
const Put = async (id: number, data: Template) => service.put(`templates/${id}`, data);
const Delete = async (templateId: string) => service.delete('templates/', {
  params: {
    templateId
  }
});

const Templates = {
  GetAll,
  GetById,
  Post,
  Put,
  Delete
};

export default Templates;
