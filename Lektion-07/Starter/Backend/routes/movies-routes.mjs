import express from 'express';
import { listMovies, findMovies } from '../controllers/movies-controller.mjs';

const router = express.Router();

router.route('/').get(listMovies);
router.route('/:id').get(findMovies);

export default router;
