import service from '../utils/http';
import type { EditUserRequest } from '../types/User';

const UpdateUser = async (id: number, data: EditUserRequest) => service.put(`users/${id}`, data);
const GetAll = async () => service.get('users');

const Users = {
  UpdateUser,
  GetAll
};

export default Users;
