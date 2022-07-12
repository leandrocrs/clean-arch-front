export enum UserRoles {
  Editor,
  Administrator,
}

export interface User {
  id: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  roles: UserRoles[];
}
