import { authInstance } from './axiosInstance';
/* 메인 페이지 피드 */
const page = 1;
export const getFeed = async (tagName, orderBy) => {
  try {
    const response = await authInstance.get(
      `/feed?page=${page}&tagName=${tagName}&orderBy=${orderBy}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 프로필 조회 */
export const getProfile = async profileId => {
  try {
    const response = await authInstance.get(`/profile/${profileId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 프로필 검색 */
export const searchProfile = async nickname => {
  try {
    const response = await authInstance.get(`/feed/${nickname}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 인플루언서 좋아요 (찜) */
export const likeInfluencer = async profileId => {
  try {
    const response = await authInstance.post(`/profile/${profileId}/likes`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
