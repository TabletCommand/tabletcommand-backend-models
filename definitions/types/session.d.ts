import { OAuthSchemaType } from "./oauth";
export interface SessionType {
    _id: string;
    id?: string;
    nick: string;
    email: string;
    user: string;
    active: boolean;
    token: string;
    source: string;
    departmentId: string;
    why: string;
    when: string;
    ended: string;
    userAgent: string;
    remoteAddress: string;
    deviceId: string;
    authSource: string;
    oAuth: OAuthSchemaType;
}
//# sourceMappingURL=session.d.ts.map