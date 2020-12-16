import { InjectionToken } from "@angular/core";

export interface FBConfig {
  app_id: string;
  version: string;
}

export const FB_CONFIG = new InjectionToken<FBConfig>('fb_config');

