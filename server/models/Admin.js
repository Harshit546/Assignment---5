import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Runs before saving the admin document. If password is new or modified, hashes it using bcrypt.
AdminSchema.pre('save', async function (next) {
  // Skip if password hasn't been modified
  if (!this.isModified('password')) return next();

  // Generate salt and hash password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model('Admin', AdminSchema);
