import mongoose from "mongoose";
import { MONGODB_URL } from './config';

(async () => {  
    try {
        const db = await mongoose.connect(MONGODB_URL,{
            family: 4,
        });
        console.log("DB cone connection established to " + db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();
