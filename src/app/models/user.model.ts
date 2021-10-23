
export class User {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    authdata?: string;
}

export interface userInfo {
    fname: string,
      lname: string,
      phone: string,
      email: string,
      addressLine1: string
      addressLine2: string
      role: string
      city: string
      state: string
      zipcode: string
}