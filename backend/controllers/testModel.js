const mongoose = require("mongoose");

// Connect to MongoDB (Change the connection string if using Atlas)
mongoose.connect("mongodb+srv://madhukorada23:Madhu@cluster0.omsbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Define the User model
const User = require("../models/usermodel"); // Adjust path if needed

// Function to test the model
const testUserModel = async () => {
    try {
        // Create a test user
        const newUser = new User({
            userId: "22A51A05F5",
            password: "Madhu5F5",
            role: "super_admin" // Change this to "super_admin" or "user" to test
        });

        // Save user to the database
        await newUser.save();
        console.log("✅ User saved successfully:", newUser);

        // Fetch all users from the database
        const users = await User.find();
        console.log("📌 All Users in Database:", users);

        // Close connection
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error testing model:", error);
        mongoose.connection.close();
    }
};

// Run the test function
testUserModel();
