import { IResponse } from '../../../../Interface';
import { HttpStatus } from '../../constant';
import { BaseError } from './BaseError';

export class BadRequest extends BaseError {
  constructor(error: IResponse) {
    super();
    this.status = HttpStatus.BAD_REQUEST;
    this.name = 'BAD_REQUEST';
    this.message = error;
  }
}
