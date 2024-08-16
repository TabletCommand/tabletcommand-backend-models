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

export enum UserStealthStatus {
  Prohibited = "prohibited",  // User cannot go stealth
  Visible = "visible",        // User can go stealth, visible
  Hidden = "hidden"           // User can go stealth, hidden
}
