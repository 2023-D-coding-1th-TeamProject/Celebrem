import { authInstance } from './axiosInstance';

export const getFeed = async (page, tagName, orderBy) => {
  try {
    const response = await authInstance.get(`/feed`, {
      page: page,
      tagName: tagName,
      orderBy: orderBy,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
