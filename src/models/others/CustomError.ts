import { IResponse } from "../../types";

export class CustomError implements Partial<Error> {
  constructor(
    public readonly error: IResponse,
    public readonly status: number,
    public readonly name?: string,
    public readonly message?: string
  ) {}
}
