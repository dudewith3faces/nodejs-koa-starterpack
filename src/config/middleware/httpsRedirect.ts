import { BaseContext } from 'koa';
import { env } from '../keys';

export const httpsRedirect = async (
  ctx: BaseContext,
  next: () => Promise<any>,
) => {
  try {
    if (env !== 'dev') {
      const header = ctx.protocol;
      if (header !== 'https') {
        const url = `https://${ctx.header.host}${ctx.url}`;
        ctx.redirect(url);
      }
    }
    await next();
  } catch (e) {
    throw e;
  }
};
