import service from '../utils/http';

import type { AddLayoutPayload, LayoutData } from '../types/Layout';

const Post = async (payload: AddLayoutPayload) => service.post('layouts/', payload);
const Update = async (payload: LayoutData) => service.put(`layouts/${payload.id}`, payload);
const Delete = async (layoutId: number) => service.delete(`layouts/${layoutId}`, {
  params: {
    layoutId,
  },
});

const Layouts = {
  Post,
  Update,
  Delete,
};

export default Layouts;
