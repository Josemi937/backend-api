import request from 'supertest';
import app from '../src/app';  

let initialProgramCount = 0;

beforeAll(async () => {
  const response = await request(app).get('/api/programs');
  initialProgramCount = response.body.length;
});

describe('GET /api/programs', () => {
  it('must return all programs', async () => {
    const response = await request(app).get('/api/programs');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(initialProgramCount);  
  });
});

describe('POST /api/programs', () => {
  it('you must add a new program', async () => {
    const newProgram = {
      title: 'Leadership Skills for Managers',
      topic: 'leadership-and-management',
      learningFormats: ['online', 'residential'],
      bestseller: true,
      startDate: '2024-02-01T00:00:00+0000'
    };

    const response = await request(app)
      .post('/api/programs')
      .send(newProgram);  
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newProgram.title);
  });
});

describe('GET /api/programs after adding a program', () => {
  it('must return the new number of programs', async () => {
    const response = await request(app).get('/api/programs');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(initialProgramCount + 1);  
  });
});
describe('DELETE /api/programs/:id', () => {
    it('you must remove a program', async () => {
      const idToDelete = 1;  
      const response = await request(app).delete(`/api/programs/${idToDelete}`);
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Program successfully removed');
      const getResponse = await request(app).get('/api/programs');
      const programIds = getResponse.body.map((program: { id: number }) => program.id);
      expect(programIds).not.toContain(idToDelete);  
    });
  });
  