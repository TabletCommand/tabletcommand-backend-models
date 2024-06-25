// These should be converted to Typescript Enum after upgrading mongoose to 6.x or newer

export type LocationSource =
  "CAD" | "FleetComplete" | "GST" |
  "Samsara" | "Skymira" | "SKYTRAC" | "Somewear" |
  "TC-Android" | "TC-iOS" | "TCMobile-Android" | "TCMobile-iOS" |
  "VehicleModem";
export type LocationKindType = "fixed-wing" | "helicopter" | "marine" | "person" | "vehicle";
