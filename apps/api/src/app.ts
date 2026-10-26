import express, { Request, Response } from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Base middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registered routes
app.use('/health', healthRouter);

// Unknown route (404) handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Resource not found'
  });
});

// Centralized error handler
app.use(errorHandler);

export default app;
