import {auth} from "./iam/auth";
import {createUser} from "./iam/admin";

export default {
    AuthService: {
        auth
    },
    AdminService: {
        createUser
    }
};