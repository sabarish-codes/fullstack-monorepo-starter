export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);

    this.name = 'AppError';
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, AppError);
  }
}
