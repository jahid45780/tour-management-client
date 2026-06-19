import type { ComponentType } from "react";

export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.types";


export interface IResponse<T>{
    statusCode:number;
    success:boolean;
    message:string;
    data:T
}

export interface ISidebarItem {
    title: string;
    items:{
            title: string;
            url:string;
            component?:ComponentType;
        }[]
}


export type IRole  = "ADMIN" | "SUPER_ADMIN"  | "USER" 

 export type TTourTypeForm = {
  name: string;
};