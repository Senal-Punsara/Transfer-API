import express from 'express';
import { transferService } from './controllers.js';

const router = express.Router();

router.post('/transfer', (req, res) => {
  try {
    const { sourceAccNum, destAccNum, amount } = req.body;
    const transaction = transferService(sourceAccNum, destAccNum, amount);
    res.status(200).json({
      message: 'Transfer Successful',
      transaction,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
