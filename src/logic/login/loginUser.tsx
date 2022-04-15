import { FeathersError } from "@feathersjs/errors";
import { LoginInfo } from "../../../shared/types/authentication/UserType";
import client from "../feathersConnect";


export default async function login(loginInfo: LoginInfo) {
    console.log("in loginInfo", loginInfo);
    console.log("testing", client);

    let email = loginInfo.email;
    let password = loginInfo.password;

    // TODO any kind of last minute password checks

    
}
