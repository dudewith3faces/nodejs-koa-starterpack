import { IHelmetConfiguration } from 'helmet';
import Helmet from 'koa-helmet';

const options: IHelmetConfiguration = {
  // hidePoweredBy: { setTo: "PHP/5.6.33" },
  hsts: false,
  permittedCrossDomainPolicies: false,
  // dnsPrefetchControl: false,
  // frameguard: {action: "origin"},
  // ieNoOpen: false,
  // noSniff: false,
  // xssFilter: false,
};

export const helmet = Helmet(options);
