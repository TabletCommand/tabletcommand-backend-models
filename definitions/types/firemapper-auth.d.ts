export interface FireMapperEncryptedType {
    iv: string;
    encryptedData: string;
}
export interface FireMapperAuthType {
    username: string;
    encrypted: FireMapperEncryptedType;
    encryptedAccessCode: FireMapperEncryptedType;
}
//# sourceMappingURL=firemapper-auth.d.ts.map