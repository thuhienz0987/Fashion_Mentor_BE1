import { Router } from "express";
import authRoute from "./authRoute.js";

const route = Router()

route.use(authRoute)

export default route;