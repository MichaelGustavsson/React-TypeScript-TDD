import express from 'express';
import { listShows, findShow } from '../controllers/shows-controller.mjs';

const router = express.Router();

router.route('/').get(listShows);
router.route('/:id').get(findShow);

export default router;
