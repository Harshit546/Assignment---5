import Blog from '../models/Blog.js';
import { slugify } from '../utils/slugify.js';
import mongoose from 'mongoose';

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('category');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await Blog.findOne({ slug }).populate('category');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createBlog = async (req, res) => {
  const { title, category, description, publishDate, imageThumbnail, imageFeatured } = req.body;
  try {
    const slug = slugify(title);
    const blog = new Blog({ title, slug, category, description, publishDate, imageThumbnail, imageFeatured });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Requested blog ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId format");
      return res.status(400).json({ error: 'Invalid blog ID format' });
    }

    const blog = await Blog.findById(id);
    console.log("Blog found:", blog);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ error: 'Server error while fetching blog' });
  }
};

export const updateBlog = async (req, res) => {
  try {
    console.log('Incoming update payload:', req.body);

    const blog = await Blog.findById('68fbb3675dac8e6860f9155b');
    if (!blog) {
      console.log('Blog not found');
      return res.status(404).json({ error: 'Blog not found' });
    }

    Object.assign(blog, req.body);
    console.log('Merged blog before save:', blog);

    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: err.message || 'Failed to update blog' });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid blog ID format' });
    }

    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err.message);
    res.status(500).json({ error: 'Server error while deleting blog' });
  }
};

