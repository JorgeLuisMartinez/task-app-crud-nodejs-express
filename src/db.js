import mongoose from "mongoose";

(async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost/crud-mongodb",{
            family: 4,
        });
        console.log("DB cone connection established to" + db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
