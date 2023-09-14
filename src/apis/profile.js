import { authInstance } from './axiosInstance';
/* 메인 페이지 피드 */
const page = 1;
const orderBy = 'RANDOM';
export const getFeed = async tagName => {
  try {
    const response = await authInstance.get(
      `/feed?page=${page}&tagName=${tagName}&orderBy=${orderBy}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
