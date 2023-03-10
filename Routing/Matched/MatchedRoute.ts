import {
  AppEnvType,
  AppLocaleType,
  AppVersionType,
  HttpMethodType,
} from "../deps.ts";
import {
  IMatchedRoute,
  MatchedRouteParamsType,
  MatchedRouteType,
} from "./types.ts";

export class MatchedRoute implements IMatchedRoute {
  constructor(private readonly matched: MatchedRouteType) {
  }

  public getName(): string {
    return this.matched.name;
  }

  public getUrl(): URL {
    return this.matched.url;
  }

  public getParams(): MatchedRouteParamsType | null {
    return this.matched.params ?? null;
  }

  public getMethod(): HttpMethodType | null {
    return this.matched.method;
  }

  public getIp(): string {
    return this.matched.ip;
  }

  public getLocale(): AppLocaleType {
    return this.matched.locale;
  }

  public getEnv(): AppEnvType {
    return this.matched.env;
  }

  public getVersion(): AppVersionType | null {
    return this.matched.version ?? null;
  }
}
