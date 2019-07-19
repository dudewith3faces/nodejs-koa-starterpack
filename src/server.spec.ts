import {request, should, use, expect} from "chai";
import chaiHTTP = require("chai-http");
import {PORT} from "./config"
import { app } from "./server"

use(chaiHTTP)

const req = request.agent(app.listen(PORT + 1))

should()

describe('Route', () => {
    // to test route under auth
    describe('auth', () => {

        // test route
        it('GET /api/auth/test', (done) => {
            req.get("/api/auth/test").end((err, res) => {
                expect(err).to.be.equal(null);
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('msg');
                done();
            })
        })

        // add other route under auth
    })

    // add decribe() for other routes

})
