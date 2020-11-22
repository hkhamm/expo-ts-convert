import { atom } from "recoil";

export const nameState = atom<string | undefined>({
  key: "nameState",
  default: undefined,
});
