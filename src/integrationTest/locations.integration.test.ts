import request from 'supertest';
import app from '../server';

describe('Locations Controller', () => {
  describe('create location', () => {
    it('should return 201 and the task created', async () => {
      const expectedBodyResponse = {
        message: 'Location created successfully',
        data: {
          id: 17,
          name: "Granma's house",
          latitude: '14.596947',
          longitude: '-87.829474',
        },
      };
      const response = await request(app).post('/api/location').set('content-type', 'application/json').send({
        name: 'task testing',
        longitude: '-7.0155',
        latitude: '-7.0155',
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('message');
      expect(response.body).toBe(expectedBodyResponse);
    });
  });

  describe('get all locations', () => {
    it('should return 200 and all tasks', async () => {
      const expectedBodyResponse = {
        message: 'Location fetched successfully',
        data: [
          {
            id: 2,
            name: 'School',
            latitude: '1477',
            longitude: '699877',
          },
          {
            id: 3,
            name: null,
            latitude: '-7.74529377901092',
            longitude: '110.42174317355318',
          },
        ],
      };
      const response = await request(app).get('/api/locations').set('content-type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('message');
      expect(response.body).toBe(expectedBodyResponse);
      
    });
  });
});
