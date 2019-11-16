import { HttpStatus } from '../../constant';
import { BaseError } from './BaseError';

export class UnauthorisedError extends BaseError {
  constructor(error: { msg: string }) {
    super();
    this.status = HttpStatus.UNAUTHORISED;
    this.name = 'NOT_FOUND';
    this.message = error;
  }
}
