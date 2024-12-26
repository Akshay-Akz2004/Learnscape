import connectDB from "./db/index.js";
import app from "./app.js";
connectDB()
.then(
    () => {
        app.listen(8000, () => {
            console.log(`Server running on port 8000`);
        });
    }
)
 .catch((error) => {
    console.error("Error connecting to the database:", error.message);
});