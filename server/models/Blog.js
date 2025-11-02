import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String, required: true },
  publishDate: { type: Date, required: true },
  imageThumbnail: String,
  imageFeatured: String,
});

export default mongoose.model('Blog', blogSchema);
