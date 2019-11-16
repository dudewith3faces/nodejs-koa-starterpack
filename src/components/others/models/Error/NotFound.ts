import { HttpStatus } from '../../constant';
import { BaseError } from './BaseError';

export class NotFound extends BaseError {
  constructor(error: { msg: string }) {
    super();
    this.status = HttpStatus.NOT_FOUND;
    this.name = 'NOT_FOUND';
    this.message = error;
  }
}
