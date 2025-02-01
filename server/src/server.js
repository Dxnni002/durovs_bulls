const mongoose = require("mongoose");
const { app } = require("./app");

// Function to connect to MongoDB (for Vercel)
async function connectDB() {
  await mongoose.connect(process.env.URI);
  console.log("Connected to MongoDB");
}

// Only start the server in development mode (no app.listen() needed for Vercel)
if (require.main === module) {
  connectDB();
}

// Export for Vercel (required)
module.exports = app;
