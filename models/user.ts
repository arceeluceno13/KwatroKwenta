import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    info: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        salt: {  // Add this field
            type: String,
            required: true,
        },
        info: {
            address: {
                type: String,
            },
            age: {
                type: Number,
            },
            phone: {
                type: String,
            }
        }
    }
}, { timestamps: true });

const User = models.User || mongoose.model("User", userSchema);
export default User;
