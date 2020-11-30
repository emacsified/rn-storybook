import create from "zustand";

const useStore = create((set) => ({
  cookie: "",
  setCookie: (cookie) => set(() => ({ cookie })),
  clearCookie: () => set(() => ({ cookie: "" })),
}));

export default useStore;
