import request from 'supertest';
import { createApp } from '../src/app.js';

const app = createApp();

describe('GET /check', () => {
  it('returns API status', async () => {
    const response = await request(app).get('/check');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'ok',
    });
  });
});
