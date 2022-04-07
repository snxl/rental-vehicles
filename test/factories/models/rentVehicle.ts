import RentVehicle from '@src/domain/models/rentVehicle'

export function getValidRentVehicle (): RentVehicle {
  const rentVehicle = new RentVehicle()
  rentVehicle.id = 1
  rentVehicle.UserId = 1
  rentVehicle.VehicleId = 1

  return rentVehicle
}

export function createRentVehicle (): RentVehicle {
  const rentVehicle = new RentVehicle()
  rentVehicle.UserId = 1
  rentVehicle.VehicleId = 1

  return rentVehicle
}
