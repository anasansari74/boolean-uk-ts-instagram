import create from "zustand";

export type User = {
  id: number;
  username: string;
  avatar: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
  altImage: string;
  likes: number;
  imageId: number;
};

type Store = {
  users: User[];
  fetchUsers: () => void;
  selectedUserId: number | null;
  getSelectedUserId: (id: number) => void;

  newPost: [];
  postToServer: ([]) => void;
};

const useStore = create<Store>((set, get) => ({
  // Header
  users: [],

  fetchUsers: () => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((user) => set({ users: user }));
  },

  selectedUserId: null,

  getSelectedUserId: (id) => {
    set({ selectedUserId: id });
  },

  //Create post
  newPost: [],

  postToServer: (data) => {
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((post) => set({ newPost: [...get().newPost, post] }));
  },
}));

export default useStore;
