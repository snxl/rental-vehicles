import app from './app'
import log from '@src/shared/helpers/log'
import config from '@src/shared/config/keys'
import os from 'os'
import cluster from 'cluster'

function start (): void {
  if (cluster.isPrimary) {
    const numberOfCpus = os.cpus().length

    for (let index = 0; index < numberOfCpus; index++) {
      cluster.fork()
    }

    cluster.on('exit', (worker, code) => {
      if (code !== 0 && !worker.exitedAfterDisconnect) {
        log.info(`Worker ${worker.process.pid} died\n`)
        cluster.fork()
      }
    })
  } else {
    runServer()
  }
}

function runServer (): void {
  const port = config.PORT ?? 3333

  app.listen(port, () => {
    log.info(`We are live on ${port}`)
    log.info(`Environment: ${config.environment}`)
  })
}

start()
