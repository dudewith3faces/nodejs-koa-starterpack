import { should, use } from 'chai';
import chaiHTTP = require('chai-http');
import App from '../src/app';

class ServerTest {
  constructor() {
    this.build();
  }

  private build() {
    (() => new App())();
    use(chaiHTTP);
    should();
  }
}

(() => new ServerTest())();
