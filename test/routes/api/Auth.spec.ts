import { assert, request, use } from 'chai';
import chaiHTTP = require('chai-http');
import { PORT } from '../../../src/config';

export class AuthAPITest {
  constructor() {
    this.build();
  }

  private build() {
    use(chaiHTTP);
    this.test();
  }

  private req() {
    return request(`localhost:${PORT}/api`);
  }

  private test() {
    it('GET /api/auth/test', (done) => {
      this.req()
        .get('/auth/test')
        .end((err, res) => {
          assert.isNull(err);
          assert.equal(res.status, 200, 'reponse should be 200');
          assert.isObject(res.body);
          assert.equal(
            res.body.msg,
            'auth test route work',
            "msg should be 'auth test route work'",
          );
          done();
        });
    });
  }
}

(() => new AuthAPITest())();
