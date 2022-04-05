import winstonLogger from './winstonLogger'

export default {
  warn: (arg: any, event?: string, eventObject?: Object) => winstonLogger.warn(arg),
  error: (arg: any, event?: string, eventObject?: Object) => winstonLogger.error(arg),
  info: (arg: any, event?: string, eventObject?: Object) => winstonLogger.info(arg),
  critical: (arg: any, event?: string, eventObject?: Object) => winstonLogger.critical(arg),
  beautify: (arg: any) => JSON.stringify(arg, undefined, 2)
}
