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
    return request(`localhost:${PORT}/api/auth`);
  }

  private test() {
    it('GET /api/auth/test', async () => {
      try {
        const { status, body } = await this.req().get('/test');
        assert.equal(status, 200, 'reponse should be 200');
        assert.isObject(body);
        assert.equal(
          body.msg,
          'auth test route work',
          "msg should be 'auth test route work'",
        );
      } catch (e) {
        assert.isNotNull(e);
      }
    });
  }
}

describe('AUTH API', () => new AuthAPITest());
