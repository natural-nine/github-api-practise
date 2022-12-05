import { atom } from "recoil";

export const searchValue = atom<string>({
  key: "search",
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
