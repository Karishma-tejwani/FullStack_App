const app = require("../index");
const users = require('../controllers/userController');
const request = require('supertest');

// describe('GET APIs',()=>{
//     test('It should return product list',async ()=>{
//        const response = await request(app).get('/getallusers')
//        expect(response.body.users.length).toBeGreaterThan(2)
//        expect(response.statusCode).toBe(200)
//     })
// })

describe('POST API', ()=>{
    test('It should post a user', async()=> {
        let user={
            username: 'sadi',
            password: '123',
            email: 'sadia@gmail.com'
        }

        const response = await request(app).post('/register').send(user)
        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.user.username).toBe('sadi')
    })
})

describe('Delete API', ()=>{
    test('It should delete a user', async()=> {
        const response = await request(app).post('/register').send(users)
        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        
    })
})
