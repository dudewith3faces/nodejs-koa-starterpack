import { join } from 'path';

const dir = (name: string) =>
  join(__dirname, '..', '..', 'templates', `${name}.html`);

const emails = {};

export { emails };
