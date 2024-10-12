import { response, Router } from "express";
import {allUser,userByRole} from "../controllers/users/read.js";
const routeUsers = Router()

routeUsers.get('/all', allUser)
routeUsers.get('/role/:x', userByRole)


export default routeUsers