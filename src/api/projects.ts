import service from '../utils/http';

const GetAll = async () => service.get('projects');
const GetById = async (id: number) => service.get(`projects/${id}`);
const Post = async (data: any) => service.post(`projects/`, data);
const Put = async (id: number, data: any) =>
  service.put(`projects/${id}`, data);
const Delete = async (id: string) => {
  return service.delete(`projects/${id}`);
};

const Projects = {
  GetAll,
  GetById,
  Post,
  Put,
  Delete,
};

export default Projects;
