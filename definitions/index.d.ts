/// <reference types="mongoose" />
export { ActionLog, ActionLogModel } from "./models/action-log";
export { CADIncident, CADIncidentModel } from "./models/cad-incident";
export { CADStatusMap, CADStatusMapModel } from "./models/cad-status-map";
export { CADStatus, CADStatusModel } from "./models/cad-status";
export { CADVehicle, CADVehicleModel } from "./models/cad-vehicle";
export { CADVehicleStatus, CADVehicleStatusModel } from "./models/cad-vehicle-status";
export { Department, DepartmentModel } from "./models/department";
export { DeviceMapping, DeviceMappingModel } from "./models/device-mapping";
export { IncidentEvent, IncidentEventModel } from "./models/incident-event";
export { IncidentTakeover, IncidentTakeoverModel } from "./models/incident-takeover";
export { Location, LocationModel } from "./models/location";
export { ManagedIncident, ManagedIncidentModel } from "./models/managed-incident";
export { RateLimit, RateLimitModel } from "./models/rate-limit";
export { Session, SessionModel } from "./models/session";
export { User, UserModel } from "./models/user";
export { UserRegistration, UserRegistrationModel } from "./models/user-registration";
export { UserDevice, UserDeviceModel } from "./models/user-device";
export { PersonnelImport, PersonnelImportModel } from "./models/personnel-import";
export * from "./models/helpers";
export declare function connect(url: string): Promise<{
    mongoose: typeof import("mongoose");
    connection: typeof import("mongoose");
    models: {
        ActionLog: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            departmentId: string;
            email: string;
            action: string;
            object: any;
            modified_unix_date: number;
        }, {}>;
        CADIncident: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            uuid: string;
            departmentId: string;
            AgencyID: string;
            IncidentNumber: string;
            TransactionID: string;
            AgencyIncidentCallTypeDescription: string;
            AgencyIncidentCallType: string;
            AgencyIncidentCallSubTypeDescription: string;
            AgencyIncidentCallSubType: string;
            AgencyIncidentPriorityDescription: string;
            PulsePointIncidentCallType: string;
            PulsePointDeterminantCode: string;
            AlarmLevel: string;
            CommandName: string;
            FireMap: string;
            TBMap: string;
            MapPages: string;
            TacticalChannel: string;
            TacticalAltChannel: string;
            CommandChannel: string;
            EntryDateTime: string;
            ClosedDateTime: string;
            CallReceivedDateTime: string;
            DispatchDateTime: string;
            IncidentLastUpdate: string;
            EnrouteDateTime: string;
            OnSceneDateTime: string;
            modified_date: string;
            modified_unix_date: number;
            start_unix_date: number;
            closed_unix_date: number;
            queued_at: number;
            scheduled_at: number;
            StreetName: string;
            StreetSuffix: string;
            Predirectional: string;
            Postdirectional: string;
            CityOrLocality: string;
            StateOrProvince: string;
            StateOfProvince: string;
            CommonPlaceName: string;
            CrossStreet1: string;
            CrossStreet2: string;
            StreetNumber: string;
            Building: string;
            Floor: string;
            Suite: string;
            City: string;
            County: string;
            PostalCode: string;
            CrossStreetName: string;
            LocationComment: string;
            full_address: string;
            address: string;
            cross_streets: string;
            PriorIncidentChanged: boolean;
            PriorIncident: {
                Address: string;
                Comment: {
                    Comment: string;
                    CommentSource: string;
                    CommentDateTime: string;
                }[];
                IncidentDateTime: string;
                IncidentNumber: string;
                Jurisdiction: string;
                Problem: string;
                Suite: string;
            }[];
            CallerNumber: string;
            tag: string;
            Latitude: string;
            Longitude: string;
            Comment: {
                Comment: string;
                CommentSource: string;
                CommentDateTime: string;
            }[];
            units: {
                UnitID: string;
                UnitDispatchNumber: string;
                TimeDispatched: string;
                TimeEnroute: string;
                TimeArrived: string;
                TimeStaged: string;
                TimeCleared: string;
                TimeAtHospital: string;
                TimePatient: string;
                TimeTransport: string;
                TimeTransporting: string;
                PersonnelCount: number;
                Personnel: {
                    PersonnelID: string;
                    PersonnelName: string;
                    PersonnelRank: string;
                    PersonnelWorkCode: string;
                    PersonnelNote: string;
                }[];
            }[];
            preference_location: string;
            admin_note: string;
            Interface: string;
            InterfaceVersion: string;
            CADSimulator: string;
            notificationType: {
                name: string;
                value: string;
            }[];
            notifiedUnits: string[];
            ReportNumber: string[];
            AgencyDeterminantCode: string;
            AgencyIncidentCategory: string;
            CFMap: string;
            CallSource: string;
            CaseNumber: string;
            CrossRefDataOwnerAgyID1: string;
            CrossRefDataSubmitterAgyID1: string;
            CrossRefEventCategory1: string;
            CrossRefEventNum1: string;
            EventLevel: string;
            EventNumber: string;
            FirstDueStation: string;
            MedicalAgencyIncidentType: string;
            MedicalEventCode: string;
            PopulationDensity: string;
            Priority: string;
            WorkstationID: string;
            LatitudeDegree: string;
            LatitudeMinute: string;
            LatitudeSecond: string;
            LongitudeDegree: string;
            LongitudeMinute: string;
            LongitudeSecond: string;
            Location: string;
            LocationType: string;
            OrigLocation: string;
            Jurisdiction: string;
        }, {}>;
        CADStatusMap: import("mongoose").Model<import("mongoose").Document & {
            departmentId: string;
            modifiedDate: number;
            fromStatusId: number;
            toStatusIds: {
                statusId: number;
                userEnabled: boolean;
            }[];
        }, {}>;
        CADStatus: import("mongoose").Model<import("mongoose").Document & {
            uuid: string;
            departmentId: string;
            modifiedDate: number;
            statusId: number;
            code: string;
            status: string;
            name: string;
            normalized: string;
            selfAssignable: boolean;
            roaming: boolean;
            options: {
                name: string;
                position: number;
                visible: boolean;
                cadKey: string;
                cadValues: {
                    name: string;
                    type: string;
                    visible: boolean;
                    value: string;
                    favorite: boolean;
                    position: number;
                }[];
            }[];
            color: {
                background: string;
                text: string;
            };
        }, {}>;
        CADVehicle: import("mongoose").Model<import("mongoose").Document & {
            uuid: string;
            departmentId: string;
            modifiedDate: number;
            vehicleId: string;
            radioName: string;
            station: {
                code: string;
                name: string;
            };
        }, {}>;
        CADVehicleStatus: import("mongoose").Model<import("mongoose").Document & {
            uuid: string;
            departmentId: string;
            vehicleId: string;
            radioName: string;
            requestTime: number;
            responseTime: number;
            status: string;
            statusCode: string;
            modifiedDate: number;
            requestStatus: number;
            owner: string;
            incidentNumber: string;
            options: {
                name: string;
                type: string;
                value: string;
                key: string;
            }[];
        } & {
            propagateToObject<T>(dbItem: {
                uuid: string;
                departmentId: string;
                vehicleId: string;
                radioName: string;
                requestTime: number;
                responseTime: number;
                status: string;
                statusCode: string;
                modifiedDate: number;
                requestStatus: number;
                owner: string;
                incidentNumber: string;
                options: {
                    name: string;
                    type: string;
                    value: string;
                    key: string;
                }[];
            } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "$isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
                _id: import("bson").ObjectId;
            } & {
                schema: import("mongoose").Schema<any> & {
                    _interface: {
                        uuid: string;
                        departmentId: string;
                        vehicleId: string;
                        radioName: string;
                        requestTime: number;
                        responseTime: number;
                        status: string;
                        statusCode: string;
                        modifiedDate: number;
                        requestStatus: number;
                        owner: string;
                        incidentNumber: string;
                        options: {
                            name: string;
                            type: string;
                            value: string;
                            key: string;
                        }[];
                    };
                };
            }, callback: (o: {
                uuid: string;
                departmentId: string;
                vehicleId: string;
                radioName: string;
                requestTime: number;
                responseTime: number;
                status: string;
                statusCode: string;
                modifiedDate: number;
                requestStatus: number;
                owner: string;
                incidentNumber: string;
                options: {
                    name: string;
                    type: string;
                    value: string;
                    key: string;
                }[];
            } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "$isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
                _id: import("bson").ObjectId;
            } & {
                schema: import("mongoose").Schema<any> & {
                    _interface: {
                        uuid: string;
                        departmentId: string;
                        vehicleId: string;
                        radioName: string;
                        requestTime: number;
                        responseTime: number;
                        status: string;
                        statusCode: string;
                        modifiedDate: number;
                        requestStatus: number;
                        owner: string;
                        incidentNumber: string;
                        options: {
                            name: string;
                            type: string;
                            value: string;
                            key: string;
                        }[];
                    };
                };
            }) => T): T;
        }, {}>;
        Department: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            uuid: string;
            department: string;
            fdid: string;
            city: string;
            state: string;
            contact_name: string;
            contact_phone: string;
            contact_email: string;
            modified_unix_date: number;
            active: boolean;
            pager_number: string;
            apikey: string;
            cadEmailUsername: string;
            cadMonitorEnabled: boolean;
            cadMonitorMinutes: number;
            cadBidirectionalEnabled: boolean;
            heartbeatEnabled: boolean;
            heartbeatMinutes: number;
            selfAssignmentEnabled: boolean;
            userContributionEnabled: boolean;
            vehicleSwapEnabled: boolean;
            pushEnabled: boolean;
            rtsEnabled: boolean;
            rtsChannelPrefix: string;
            rtsAuthKey: string;
            esriTokenDateExpiry: number;
            esriToken: {
                access_token: string;
                refresh_token: string;
                username: string;
                ssl: boolean;
                expires_in: number;
            };
            error: {
                code: number;
                error: string;
                error_description: string;
                message: string;
            };
            customWebUrl: string;
            customWebName: string;
            incidentTypes: {
                name: string;
                value: string;
            }[];
            agencies: {
                code: string;
                name: string;
                domain: string;
            }[];
            signupKey: string;
            signupDomains: string[];
        }, {}>;
        DeviceMapping: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            deviceType: string;
            mapId: string;
            deviceId: string;
            location: {
                longitude: number;
                latitude: number;
            };
            modified_unix_date: number;
            active: boolean;
            remoteAddress: string;
            uuid: string;
            note: string;
        }, {}>;
        IncidentEvent: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            departmentId: string;
            IncidentNumber: string;
            modified_unix_date: number;
            message: string;
            location: {
                longitude: number;
                latitude: number;
            };
            type: string;
            user: {
                username: string;
                email: string;
                radioName: string;
                userId: string;
            };
            serverTime: number;
            userTime: number;
            uuid: string;
        }, {}>;
        IncidentTakeover: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            departmentId: string;
            uuid: string;
            incident_id: string;
            incident_name: string;
            old_owner: string;
            new_owner: string;
            owner: string;
            status: string;
            request_time: number;
            last_response_time: number;
            response_time: number;
        }, {}>;
        Location: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            location: {
                longitude: number;
                latitude: number;
            };
        } & {
            propagateToObject<T>(this: {
                _id: import("bson").ObjectId;
                departmentId: string;
                userId: string;
                uuid: string;
                username: string;
                device_type: string;
                active: boolean;
                modified_unix_date: number;
                version: number;
                session: string;
                location: {
                    longitude: number;
                    latitude: number;
                };
            } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "$isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
                _id: import("bson").ObjectId;
            } & {
                schema: import("mongoose").Schema<any> & {
                    _interface: {
                        _id: import("bson").ObjectId;
                        departmentId: string;
                        userId: string;
                        uuid: string;
                        username: string;
                        device_type: string;
                        active: boolean;
                        modified_unix_date: number;
                        version: number;
                        session: string;
                        location: {
                            longitude: number;
                            latitude: number;
                        };
                    };
                };
            }, dbItem: {
                _id: import("bson").ObjectId;
                departmentId: string;
                userId: string;
                uuid: string;
                username: string;
                device_type: string;
                active: boolean;
                modified_unix_date: number;
                version: number;
                session: string;
                location: {
                    longitude: number;
                    latitude: number;
                };
            } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "$isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
                _id: import("bson").ObjectId;
            } & {
                schema: import("mongoose").Schema<any> & {
                    _interface: {
                        _id: import("bson").ObjectId;
                        departmentId: string;
                        userId: string;
                        uuid: string;
                        username: string;
                        device_type: string;
                        active: boolean;
                        modified_unix_date: number;
                        version: number;
                        session: string;
                        location: {
                            longitude: number;
                            latitude: number;
                        };
                    };
                };
            }, callback: (doc: {
                _id: import("bson").ObjectId;
                departmentId: string;
                userId: string;
                uuid: string;
                username: string;
                device_type: string;
                active: boolean;
                modified_unix_date: number;
                version: number;
                session: string;
                location: {
                    longitude: number;
                    latitude: number;
                };
            } & Pick<import("mongoose").Document, "toString" | "base" | "update" | "get" | "set" | "removeListener" | "off" | "init" | "validate" | "save" | "remove" | "updateOne" | "collection" | "id" | "toJSON" | "toObject" | "increment" | "model" | "$isDeleted" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "unmarkModified" | "replaceOne" | "validateSync" | "errors" | "isNew" | "schema" | "addListener" | "on" | "once" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "baseModelName" | "db" | "discriminators" | "modelName"> & {
                _id: import("bson").ObjectId;
            } & {
                schema: import("mongoose").Schema<any> & {
                    _interface: {
                        _id: import("bson").ObjectId;
                        departmentId: string;
                        userId: string;
                        uuid: string;
                        username: string;
                        device_type: string;
                        active: boolean;
                        modified_unix_date: number;
                        version: number;
                        session: string;
                        location: {
                            longitude: number;
                            latitude: number;
                        };
                    };
                };
            }) => T): T;
        }, {}>;
        ManagedIncident: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            start_unix_time: number;
            end_unix_time: number;
            par_unix_time: number;
            watch_unix_start_time: number;
            watch_unix_pause_time: number;
            modified_unix_date: number;
            channel_owner: string;
            channel: string;
            location: string;
            last_view: string;
            preference_location: string;
            address: string;
            name: string;
            cross_streets: string;
            api_incident_number: string;
            CommonPlaceName: string;
            TacticalChannel: string;
            TacticalAltChannel: string;
            active: boolean;
            slave_map_changed: boolean;
            managed: boolean;
            is_closed: boolean;
            source: string;
            CallerNumber: string;
            CommandChannel: string;
            notes: {
                message: string;
                entity_type: number;
                time: number;
                entity_id: number;
            }[];
            history: {
                message: string;
                entity_type: number;
                time: number;
                entity_id: number;
            }[];
        }, {}>;
        RateLimit: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            username: string;
            modified_unix_date: number;
            count: number;
        }, {}>;
        Session: import("mongoose").Model<import("mongoose").Document & {
            _id: string;
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
        }, {}>;
        User: import("mongoose").Model<import("mongoose").Document & {
            nick: string;
            email: string;
            name: string;
            departmentId: string;
            modified_date: string;
            when: string;
            agency: {
                code: string;
                name: string;
                domain: string;
            };
            active: boolean;
            admin: boolean;
            superuser: boolean;
            isPro: boolean;
            outsider: boolean;
            remoteLoggingEnabled: boolean;
            salt: string;
            pass: string;
            mapHidden: boolean;
            mapId: string;
            vehicle: {
                radioName: string;
                vehicleId: string;
            };
            sessionCountiPhone: number;
            sessionCountiPad: number;
            shareLocationEnabled: boolean;
            rtsAuthKey: string;
            token: string;
            tokenExpireDate: number;
        }, {}>;
        UserRegistration: import("mongoose").Model<import("mongoose").Document & {
            email: string;
            name: string;
            firstName: string;
            lastName: string;
            department: string;
            title: string;
            status: string;
            modifiedDate: number;
            presentedAt: number;
            managedIncidentsCount: number;
            checklistsCount: number;
            stage: string;
            firstIncidentUnixTime: number;
            lastIncidentLocation: string;
            lastIncidentUnixTime: number;
        }, {}>;
        UserDevice: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            userId: string;
            departmentId: string;
            devices: {
                token: string;
                env: string;
                ua: string;
                time: number;
                bundleIdentifier: string;
                silentEnabled: boolean;
                richEnabled: boolean;
                session: string;
            }[];
            notificationCount: number;
            notificationUnits: string[];
            notificationIncidentTypes: string[];
        }, {}>;
        PersonnelImport: import("mongoose").Model<import("mongoose").Document & {
            _id: import("bson").ObjectId;
            PersonnelID: string;
            PersonnelName: string;
            PersonnelRank: string;
            PersonnelWorkCode: string;
            PersonnelNote: string;
            departmentId: string;
            radioName: string;
            shiftStartTime: number;
            shiftEndTime: number;
            modified_unix_date: number;
        }, {}>;
    };
}>;
declare type UnboxPromise<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never;
export declare type BackendModels = UnboxPromise<ReturnType<typeof connect>>["models"];
export default connect;
//# sourceMappingURL=index.d.ts.map