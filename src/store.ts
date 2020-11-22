import { atom, selector } from "recoil";

export const firstNameState = atom<string>({
  key: "firstNameState",
  default: "",
});

export const lastNameState = atom<string>({
  key: "lastNameState",
  default: "",
});

export const fullNameState = selector<string>({
  key: "nameSelector",
  get: ({ get }) => {
    const firstName = get(firstNameState);
    const lastName = get(lastNameState);

    return `${firstName} ${lastName}`;
  },
});
