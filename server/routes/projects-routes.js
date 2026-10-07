import express from 'express';
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
} from "../controllers/projects-controllers.js";

const router = express.Router();

//REST API Simulate CRUD

//READS
router.get("/", getAllProjects);
router.get("/:id", getProjectById);

//CREATE
router.post("/", createProject);

//UPDATE
router.put("/:id", updateProject);

//DELETE
router.delete("/:id", deleteProject);


export default router;