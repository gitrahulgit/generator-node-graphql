import mongoose from 'mongoose';

/**
 * provides the User interface for typescript
 */
export interface User extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

/**
 * schema that represents the User database model
 */
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model<User>('users', UserSchema);
