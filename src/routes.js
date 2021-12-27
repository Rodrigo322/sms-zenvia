import { Router } from "express";
const router = Router();

import SendMessageController from "./controller/SendMessageController";

router.get("/sendMessage", SendMessageController.handle);

export { router };
