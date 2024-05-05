const request = require('supertest');
const app = require('../../server');
const mongoose = require('mongoose');
const User = require('../../models/userModel');

//Mock user data
const userData = {
  email: 'test@example.com',
  password: 'Test!1234'
};

beforeAll(async () => {
  await User.deleteOne({email: userData.email});
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('POST /signup', () => {
    jest.setTimeout(20000);
  it('should register a new user and generate token', async () => {
    const res = await request(app)
      .post('/api/user/signup')
      .send(userData);

    //Check response status
    expect(res.status).toBe(200);

    //Check response data
    expect(res.body).toHaveProperty('email', userData.email);
    expect(res.body).toHaveProperty('token');
  });

  it('should return an error if email is missing', async () => {
    
    const { email, ...userDataWithoutEmail } = userData;

    //Make a POST request to signup with missing email
    const res = await request(app)
      .post('/api/user/signup')
      .send(userDataWithoutEmail);

    //Check response status
    expect(res.status).toBe(400);

    //Check response error message
    expect(res.body).toHaveProperty('error', 'All fields must be filled');
  });




  describe('POST /login', () => {
    jest.setTimeout(20000);
  
    it('should login a user with correct credentials', async () => {
  
      //Make a POST request to login endpoint
      const res = await request(app)
        .post('/api/user/login')
        .send({ email: userData.email, password: userData.password });
  
      //Check response status
      expect(res.status).toBe(200);
  
      //Check response data
      expect(res.body).toHaveProperty('email', userData.email);
      expect(res.body).toHaveProperty('token');
    });
  
    it('should return an error if email is missing', async () => {

      //Make a POST request to login with missing email
      const res = await request(app)
        .post('/api/user/login')
        .send({ password: userData.password });
  
      //Check response status
      expect(res.status).toBe(400);
  
      //Check response error message
      expect(res.body).toHaveProperty('error', 'All fields must be filled');
    });
  
    it('should return an error if password is missing', async () => {
      //Make a POST request to login with missing password
      const res = await request(app)
        .post('/api/user/login')
        .send({ email: userData.email });
  
      //Check response status
      expect(res.status).toBe(400);
  
      //Check response error message
      expect(res.body).toHaveProperty('error', 'All fields must be filled');
    });
  
    it('should return an error if email is incorrect', async () => {
      //Make a POST request to login with incorrect email
      const res = await request(app)
        .post('/api/user/login')
        .send({ email: 'wrong@example.com', password: userData.password });
  
      //Check response status
      expect(res.status).toBe(400);
  
      //Check response error message
      expect(res.body).toHaveProperty('error', 'Incorrect email');
    });
  
    it('should return an error if password is incorrect', async () => {

      //Make a POST request to login with incorrect password
      const res = await request(app)
        .post('/api/user/login')
        .send({ email: userData.email, password: 'wrongpassword' });
  
      //Check response status
      expect(res.status).toBe(400);
  
      //Check response error message
      expect(res.body).toHaveProperty('error', 'Incorrect password');
    });
  });
});
