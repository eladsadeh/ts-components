import service from '../utils/http';

const GetAll = async () => service.get('maps');
const GetByProjectId = async (id: number) => service.get(`maps/?projectId=${id}`);
const GetById = async (id: number) => service.get(`maps/${id}`);
const Post = async (data: any) => service.post(`maps/`, data);
const Put = async (id: number, data: any) =>
  service.put(`maps/${id}`, data);
const Delete = async (id: number) => {
  return service.delete(`maps/${id}`);
};

const Maps = {
  GetAll,
  GetByProjectId,
  GetById,
  Post,
  Put,
  Delete,
};

export default Maps;
