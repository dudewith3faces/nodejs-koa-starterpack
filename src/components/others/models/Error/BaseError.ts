export class BaseError implements Error {
  public status: number;
  public name: string;
  public message: any;
}
