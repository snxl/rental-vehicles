import { createLogger, format, transports } from 'winston'
import { customLevels, customColors } from './levels'

const { combine, timestamp, label, prettyPrint, json, colorize, simple, printf } = format

const winstonLogger = createLogger({
  level: 'info',
  levels: customLevels,
  format: combine(
    label({ label: 'dev-logger' }),
    prettyPrint(),
    json(),
    simple(),
    colorize({
      all: false,
      colors: customColors
    }),
    timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
    printf(info => `[${info.timestamp}] ${info.level}  [${info.service} - ${info.label}] : ${JSON.stringify(info.message)}`)
  ),
  defaultMeta: { service: 'ms_admin' },
  transports: [
    new transports.Console()
  ]
})

winstonLogger.on('error', () => console.error('failed in winston logger'))

export default winstonLogger
