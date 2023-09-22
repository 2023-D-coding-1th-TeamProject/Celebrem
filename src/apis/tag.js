import { authInstance } from './axiosInstance';

export const getTags = async () => {
  try {
    const response = await authInstance.get(`/tags`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const setTags = async tagNames => {
  const response = await authInstance.post(`/profile-tag/setup`, {
    tagNames: [tagNames],
  });
  return response.data;
};
