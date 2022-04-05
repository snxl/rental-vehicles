import * as winston from 'winston'

declare module 'winston' {
  export interface Logger {
    critical: winston.LogMethod
  }
}
