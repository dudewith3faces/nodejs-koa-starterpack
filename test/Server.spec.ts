import { should, use } from 'chai';
import chaiHTTP = require('chai-http');
import App from '../src/app';

class Server {
  constructor() {
    this.build();
  }

  private build() {
    (() => new App())();
    use(chaiHTTP);
    should();
  }
}

(() => new Server())();
