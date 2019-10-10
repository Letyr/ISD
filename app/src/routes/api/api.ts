import { Router } from "express";
import { accounts } from "./accounts";
import { categories } from "./categories";
import { transfers } from "./transfers";
import { changes } from "./changes";

export const api = Router()

api.use('/api', accounts);
api.use('/api', categories);
api.use('/api', changes);
// api.use('/api', transfers);
