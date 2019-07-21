import { expect, request, should, use } from 'chai';
import chaiHTTP = require('chai-http');
import App from './app';
import { PORT } from './config';

class Server {
  constructor() {
    this.build();
  }

  private req() {
    return request(`localhost:${PORT}/api`);
  }

  private build() {
    (() => new App().startApp())();
    use(chaiHTTP);
    should();
    this.auth();
  }

  private auth() {
    describe('AUTH ROUTES', () => {
      // test route
      it('GET /api/auth/test', (done) => {
        this.req()
          .get('/auth/test')
          .end((err, res) => {
            expect(err).to.be.equal(null);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('msg');
            done();
          });
      });

      // add other route under auth
    });
  }
}

(() => new Server())();
