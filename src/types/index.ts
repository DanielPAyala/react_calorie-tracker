export type Category = {
  id: number;
  name: string;
};

export type Activity = {
  category: Category['id'];
  name: string;
  calories: number;
};
