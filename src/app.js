import express from "express";
import employessRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Interpretar los json como no undefined
app.use(express.json());

// /API agrega /api a la URL
app.use(indexRoutes);
app.use("/api", employessRoutes);

// MIDDLEWARE PARA RUTA QUE NO EXISTE
app.use((req, res, next) => {
	res.status(404).json({
		message: "endpoint not found",
	});
});

export default app;
