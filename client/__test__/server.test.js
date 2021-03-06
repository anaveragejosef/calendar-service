const supertest = require('supertest');
const regeneratorRuntime = require('regenerator-runtime');
const app = require('../../server/index');

describe('API/DB Integration Test', () => {
  test('Return the correct data for a call to roomId 1', (done) => {
    return supertest(app)
      .get('/api/calendar/1')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].id).toBe(1);
        expect(response.body.length).toBe(7);
        expect(response.body[1]).toHaveProperty('startDate');
        done();
      });
  });
});
