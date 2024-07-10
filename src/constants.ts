// These should be converted to Typescript Enum after upgrading mongoose to 6.x or newer


export enum LocationSource {
  CAD = "CAD",
  FleetComplete = "FleetComplete",
  GST = "GST",
  Samsara = "Samsara",
  Skymira = "Skymira",
  SKYTRAC = "SKYTRAC",
  Somewear = "Somewear",
  TCAndroid = "TC-Android",
  TCIOS = "TC-iOS",
  TCMobileAndroid = "TCMobile-Android",
  TCMobileIOS = "TCMobile-iOS",
  VehicleModem = "VehicleModem"
}

export enum LocationKindType {
  FixedWing = "fixed-wing",
  Helicopter = "helicopter",
  Marine = "marine",
  Person = "person",
  Vehicle = "vehicle"
}
