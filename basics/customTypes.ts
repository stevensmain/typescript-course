type User = {
  name: string;
  lastname: string;
  code: number | null;
  description?: string;
  role: UserRole;
};

type UserApiResponse = string | null | number | undefined;
type UserRole = "normal" | "admin" | "root";

const newUser: User = {
  name: "Alejandra",
  lastname: "Castillo",
  code: 1,
  role: "admin",
};
