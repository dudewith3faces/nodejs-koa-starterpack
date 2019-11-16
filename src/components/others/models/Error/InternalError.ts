import { HttpStatus } from '../../constant';
import { BaseError } from './BaseError';

export class InternalError extends BaseError {
  constructor() {
    super();
    this.status = HttpStatus.INTERNAL_SERVER_ERROR;
    this.name = 'INTERNAL_ERROR';
    this.message = { msg: 'Error occured. Please try again later.' };
  }
}
