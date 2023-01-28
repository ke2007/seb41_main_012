import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userInfoState = atom({
  key: "userInfoState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export { userInfoState };
