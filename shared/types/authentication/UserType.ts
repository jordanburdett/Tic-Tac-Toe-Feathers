import { type } from "os";

export type User = {
    id: number;
    name: string | null;
}

export type LoginInfo = {
    email: string,
    password: string,
    remember: boolean,
}