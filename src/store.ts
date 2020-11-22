import { atom, selector } from "recoil";

export const firstNameState = atom<string | undefined>({
  key: "firstNameState",
  default: undefined,
});

export const lastNameState = atom<string | undefined>({
  key: "lastNameState",
  default: undefined,
});

export const nameSelector = selector<string | undefined>({
  key: "nameSelector",
  get: ({ get }) => {
    const firstName = get(firstNameState);
    const lastName = get(lastNameState);

    return `${firstName} ${lastName}`;
  },
});
