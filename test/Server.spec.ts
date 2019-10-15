import { assert, should, use } from 'chai';
import chaiHTTP = require('chai-http');
import { server } from '../src/server';

class ServerTest {
  constructor() {
    this.build();
  }

  private build() {
    use(chaiHTTP);
    should();
    this.server();
  }

  private server() {
    it('start', () => {
      try {
        // const res = server;
        assert.isObject(server);
      } catch (e) {
        assert.isNull(e);
      }
    });
  }
}

describe('SERVER', () => new ServerTest());
