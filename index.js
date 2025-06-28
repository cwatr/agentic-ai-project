import mongoose from "mongoose";
import express from "express";
import cors from "cors"

const app = express()

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connexted ✅");
            app.listen(PORT, () => console.log("🚀 server connected at http://localhost:3000"));
        })
        .catch((err) => console.error("❌ MongoDB error: ", err))