import service from '../utils/http';

const GetAll = async () => service.get('pages');
const GetById = async (id: number) => service.get(`pages/${id}`);
const Post = async (data: any) => service.post('pages', data);
const Put = async (id: number, data: any) => service.put(`pages/${id}`, data);
const Delete = async (id: string) => service.delete(`pages/${id}`);

const Pages = {
  GetAll,
  GetById,
  Post,
  Put,
  Delete
};

export default Pages;
