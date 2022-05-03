import express from 'express';
export const app = express();

// Middleware
app.use((request, response, next) => {
  response.status(200)
    .json({
      message: 'Test'
    });
});