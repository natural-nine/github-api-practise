import { atom } from "recoil";

export const searchValue = atom<string>({
  key: "searchRepo",
  default: "",
});

export const searchValue2 = atom<string>({
  key: "searchUser",
  default: "natural",
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
