import express from "express";
import petRouter from "../routes/petRouter.js";

const router = ( app: express.Router ) => {
    /* Esse /pets é setado como padrão, com se fosse a api no exe.fiscal */
    app.use("/pets", petRouter);
};

export default router;