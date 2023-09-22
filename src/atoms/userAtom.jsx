import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const accountState = atom({
  key: 'accountState',
  default: {
    image: '',
    nickname: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const loginState = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const roleState = atom({
  key: 'roleState',
  default: 'ROLE_USER',
  effects_UNSTABLE: [persistAtom],
});
