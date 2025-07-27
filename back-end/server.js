import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import subjectRoutes from "./routes/subjectRoutes.js"; // ✅ ADD THIS

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Connect subject routes
app.use("/api/subjects", subjectRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`✅ Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));

