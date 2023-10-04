import { authInstance } from './axiosInstance';
import { imgInstance } from './axiosInstance';

/* 프로필 정보 조회 */
export const getMyProfile = async () => {
  try {
    const response = await authInstance.get(`/my-profile`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 인플루언서 등록 */
export const registerInfluencer = async (instagramId, tagNames) => {
  try {
    const response = await authInstance.post(`/register-influencer`, {
      instagramId: instagramId,
      tagNames: tagNames,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 프로필 정보 수정을 위한 기존 프로필 정보 */
export const getMyProfileForUpdate = async () => {
  try {
    const response = await authInstance.get(`/my-profile/update`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 프로필 수정 */
export const updateMyProfile = async (description, instagramId, tagNames) => {
  try {
    const response = await authInstance.put(`/my-profile/update`, {
      description: description,
      instagramId: instagramId,
      tagNames: tagNames,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 프로필 이미지 변경 */
export const changeMyProfileImage = async formData => {
  try {
    const response = await imgInstance.put(`/my-profile/change-image`, formData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* 회원 탈퇴 */
export const secession = async () => {
  try {
    const response = await authInstance.delete(`/my-profile/secession`);
    return response.status;
  } catch (error) {
    console.error(error);
  }
};
