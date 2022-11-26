import service from '../utils/http';

const GetAll = async () => service.get('/widgets');
const GetById = async (id: number) => service.get(`/widgets/${id}`);
const Post = async (data: any) => service.post('/widgets', data);
const Put = async (id: number, data: any) => service.put(`/widgets/${id}`, data);
const Delete = async (id: number) => service.delete(`/widgets/${id}`);
const PostConfig = async (data: any) => service.post('/widgets/config', data);
const GetAllInsertableWidgets = async () => service.get('/widgets/insertable/widgets');
const GetAllInsertableElements = async () => service.get('/widgets/insertable/elements');

const Widgets = {
  GetAll,
  GetById,
  Post,
  Put,
  Delete,
  PostConfig,
  GetAllInsertableWidgets,
  GetAllInsertableElements
};

export default Widgets;
