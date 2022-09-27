import { Router } from "express";
import {
	getEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
} from "../controllers/employees.controllers.js";

const router = Router();

// CONSULTA TOTAL
router.get("/employees", getEmployees);

// CONSULTA INDIVIDUAL
router.get("/employees/:id", getEmployee);

// CREAR
router.post("/employees", createEmployee);

// BORRAR
router.delete("/employees/:id", deleteEmployee);

// ACTUALIZAR (en vez d put, se usa patch para actualizar una parte del json)
router.patch("/employees/:id", updateEmployee);

export default router;
