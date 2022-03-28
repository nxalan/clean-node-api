import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, rest) => {
      rest.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Alan' })
      .expect({ name: 'Alan' })
  })
})
