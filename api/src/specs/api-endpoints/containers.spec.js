import request from 'supertest'
import { expect } from 'chai'
import app from '../../server'

describe('GET /deliveries/1/containers', () => {
    it('respond with json containing a list of all containers', (done) => {
        request(app)
            .get('/deliveries/1/containers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        // .end((err, res) => {
        //     if (err)
        //         return done(err)
        //     done()
        // })
    })

    it('respond with json containing a container', (done) => {
        request(app)
            .get('/deliveries/1/containers/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((response) => {
                expect(response.body.id).to.not.null
            })
            .end((err, res) => {
                if (err)
                    return done(err)
                done()
            })
    })
})