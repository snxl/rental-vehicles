import Vehicle from '@src/domain/models/vehicle'

export interface Input {
  limit: number
  offset: number
}

export interface Output {
  vehicles: Vehicle[]
}
