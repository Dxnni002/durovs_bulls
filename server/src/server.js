const mongoose = require("mongoose");
const { app } = require("./app");

// Function to connect to MongoDB (for Vercel)
async function connectDB() {
  await mongoose.connect(process.env.URI);
  console.log("Connected to MongoDB");
}

// Only start the server in development mode
if (require.main === module) {
  connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running at port: ${process.env.PORT || 5000}`);
    });
  });
}

// Export for Vercel (required)
module.exports = app;
