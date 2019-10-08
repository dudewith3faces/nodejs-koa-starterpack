import { IResponse } from '../../interface';

export class HTTPError implements Partial<Error> {
  constructor(
    public readonly error: IResponse,
    public readonly status: number,
    public readonly name?: string,
    public readonly message?: string,
  ) {}
}
