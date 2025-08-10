import { Schema ,model ,models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: [true,'Email already exists']
    },
    username: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
        unique: [true, 'Username already exists'],
    },
    image: {
        type: String,
        
    }
});

const User = models.User || model("User", userSchema);

export default User;
