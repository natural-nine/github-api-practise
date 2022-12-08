import { atom } from "recoil";

export const searchRepoValue = atom<string>({
  key: "searchRepo",
  default: "",
});

export const searchUserValue = atom<string>({
  key: "searchUser",
  default: "",
});

export const searchOption = atom<string>({
  key: "optionVlaue",
  default: "",
});

export const orderingValue = atom<string>({
  key: "ordering",
  default: "desc",
});

export const sortValue = atom<string>({
  key: "sort",
  default: "",
});

export const pageValue = atom<number>({
  key: "page",
  default: 1,
});
