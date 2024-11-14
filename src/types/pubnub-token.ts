export interface PubNubTokenSchemaType {
  token: string,
  expireAt: Date,
  runAt: Date,
  // Environment where this token was created for
  env?: string,
  refreshInStaging: boolean, // default false, true if user email is @tabletcommand.com
}
