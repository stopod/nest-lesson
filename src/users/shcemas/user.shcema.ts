import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String, //mongoDBの型
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});
