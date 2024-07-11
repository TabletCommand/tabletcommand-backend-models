export default function MockModule(): {
    cleanup: () => Promise<string>;
    arcGISGroup: {
        access: string;
        linkedDepartments: {
            department: string;
            departmentId: string;
            authUsername: string;
            authError: null;
            users: {
                username: string;
                email: string;
                userId: string;
            }[];
        }[];
        externalOrgIds: string[];
        groupId: string;
        outsiders: {
            fullName: string;
            memberType: string;
            orgId: string;
            username: string;
        }[];
        owner: string;
        protected: boolean;
        title: string;
        users: {
            fullName: string;
            memberType: string;
            orgId: string;
            username: string;
        }[];
    };
};
//# sourceMappingURL=mock.d.ts.map