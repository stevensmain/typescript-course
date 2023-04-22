interface Task {
  id: string;
  name: string;
  description: string;
}

const updateTask = (id: string, newTask: Partial<Task>): void => {};
updateTask("1VH36-K", { name: "Edit Task" });

interface Todo {
  id: number;
  name: string;
  description?: string;
}

const createTodo = (todo: Required<Todo>): void => {};

interface CatInfo {
  name: string;
  age: number;
}

type Cats = "Miauro" | "Sherlock";

const cats: Record<Cats, CatInfo> = {
  Miauro: { age: 1, name: "Miauro" },
  Sherlock: { age: 1, name: "Sherlock" },
};

interface ServerResponse {
  status: number;
  data: string[];
}

const responseData: Pick<ServerResponse, "data"> = {
  data: ["Example"],
};

const responseStatus: Omit<ServerResponse, "data"> = {
  status: 202,
};
