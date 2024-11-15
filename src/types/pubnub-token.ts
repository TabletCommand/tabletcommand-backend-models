export interface PubNubTokenSchemaType {
  token: string,
  expireAt: Date,
  runAt: Date,
  // Environment where this token was created for
  env?: string,
}
