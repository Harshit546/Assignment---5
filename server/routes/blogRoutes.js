import express from 'express';
import {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', verifyToken, createBlog);
router.put('/:id', verifyToken, updateBlog);
router.delete('/:id', verifyToken, deleteBlog);
router.get('/:id', getBlogById);

export default router;
