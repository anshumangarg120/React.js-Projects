import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.conf. appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({eamil, password, name})
    
}
const authService = new AuthService();

 