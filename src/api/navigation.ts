import service from '../utils/http';

const GetAll = async () => service.get('');
const GetById = async (id: number) => service.get(`/${id}`);
const Post = async (data: any) => service.post('navigations/', data);
const Put = async (id: number, data: any) => service.put(`navigations/${id}`, data);
const Delete = async (id: string) => service.delete(`navigations/${id}`);

const Navigation = {
  GetAll,
  GetById,
  Post,
  Put,
  Delete
};

export default Navigation;
