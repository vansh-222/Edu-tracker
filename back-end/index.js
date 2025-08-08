const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// -----------------------
// Middleware
// -----------------------
app.use(cors());
app.use(express.json());

// -----------------------
// Routes Imports
// -----------------------
const taskRoutes = require("./routes/joinedGroup/taskRoutes");
const userRoutes = require("./routes/joinedGroup/userRoutes");
const memberRoutes = require("./routes/joinedGroup/memberRoutes");
const activityChartRoutes = require("./routes/joinedGroup/ActivityChart");
const resourceRoutes = require("./routes/joinedGroup/resourceRoutes");
const subjectRoutes = require("./routes/subjectRoutes"); // ✅ Subject Route

// -----------------------
// Routes Middleware
// -----------------------
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/activity", activityChartRoutes);
app.use("/api/subjects", subjectRoutes); // ✅ Subject Controller Connected

// -----------------------
// MongoDB Connection
// -----------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// -----------------------
// Root Route
// -----------------------
app.get("/", (req, res) => {
  res.send("🚀 Server is running");
});

// -----------------------
// Start Server
// -----------------------
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});
