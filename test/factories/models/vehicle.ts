import Vehicle from '@src/domain/models/vehicle'

export function getValidVehicle (): Vehicle {
  const vehicle = new Vehicle()
  vehicle.id = 1
  vehicle.name = 'test'
  vehicle.brand = 'test brand'
  vehicle.year = new Date()

  return vehicle
}

export function getArrayVehicle (): Vehicle[] {
  const vehicle: Vehicle[] = []

  const vehicleOne = new Vehicle()
  vehicleOne.id = 1
  vehicleOne.name = 'test'
  vehicleOne.brand = 'test brand'
  vehicleOne.year = new Date()
  vehicle.push(vehicleOne)

  return vehicle
}
