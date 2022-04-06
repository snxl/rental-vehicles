import Vehicle from '@src/domain/models/vehicle'

export function getValidVehicle (): Vehicle {
  const vehicle = new Vehicle()
  vehicle.id = 1
  vehicle.name = 'test'
  vehicle.brand = 'test brand'
  vehicle.year = new Date()

  return vehicle
}
