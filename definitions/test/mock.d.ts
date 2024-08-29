/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Mongoose } from "mongoose";
export default function mockModule(dependencies: {
    mongoose: Mongoose;
}): {
    beforeEach: () => Promise<void>;
    cleanup: () => Promise<void>;
    actionLog: {
        departmentId: string;
        email: string;
        action: string;
        userId: string;
        object: {
            vehicleId: string;
            radioName: string;
        };
        before: {
            test: string;
        };
        after: {
            test: string;
        };
        delta: {
            test: string;
        };
    };
    mark43IncidentRetry: {
        departmentId: string;
        incidentNumber: string;
        active: boolean;
        mark43IncidentId: number;
        attempts: number;
        created: Date;
        modified: Date;
        retryPayload: {
            departmentId: number;
            activityType: string;
            relatedEvent: {
                mark43Id: number;
                cadAgencyEventNumber: string;
            };
        };
    };
    agency: {
        _id: import("mongoose").Types.ObjectId;
        departmentId: import("mongoose").Types.ObjectId;
        code: string;
        name: string;
        active: boolean;
        administrators: import("mongoose").Types.ObjectId[];
        personnelIntegration: boolean;
        personnelMonitorHours: number;
        crossStaffing: {
            radioName: string;
            crossStaffedUnits: string[];
            alwaysCrossStaff: boolean;
        }[];
    };
    arcGISGroup: {
        access: string;
        linkedDepartments: {
            department: string;
            departmentId: string;
            authUsername: string;
            authError: string;
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
    assignment: {
        position: number;
        active: boolean;
        name: string;
        userId: string;
        departmentId: string;
        description: string;
        isMandatory: boolean;
    };
    battalion: {
        name: string;
        active: boolean;
        isMandatory: boolean;
        userId: string;
        departmentId: string;
        AgencyId: import("mongoose").Types.ObjectId;
        position: number;
        units: {
            _id: import("mongoose").Types.ObjectId;
            uuid: string;
            agencyId: import("mongoose").Types.ObjectId;
            name: string;
            friendly_id: string;
            local_id: number;
            personnel: number;
            position: number;
            active: boolean;
            isMandatory: boolean;
            departmentId: string;
            userId: string;
            api_battalion_id: string;
            battalion_uuid: string;
            battalion_name: string;
            modified_date: string;
            modified_unix_date: number;
            modified: Date;
        }[];
    };
    cadIncident: {
        _id: import("mongoose").Types.ObjectId;
        uuid: string;
        departmentId: string;
        AgencyID: string;
        IncidentNumber: string;
        TransactionID: string;
        AgencyIncidentCallTypeDescription: string;
        StreetName: string;
        StreetSuffix: string;
        Predirectional: string;
        Postdirectional: string;
        CityOrLocality: string;
        Floor: string;
        Suite: string;
        City: string;
        Building: string;
        StateOrProvince: string;
        CommonPlaceName: string;
        LocationComment: string;
        CrossStreet1: string;
        CrossStreet2: string;
        cross_streets: string;
        PostalCode: string;
        CallerNumber: string;
        PriorIncidentChanged: boolean;
        PriorIncident: {
            IncidentNumber: string;
            IncidentDateTime: string;
            Problem: string;
            Address: string;
            Suite: string;
            Jurisdiction: string;
            Comment: {
                Comment: string;
                CommentSource: string;
                CommentDateTime: string;
                CommentConfidential: boolean;
                CommentOpts: {
                    type: string;
                    item: string;
                };
            }[];
        }[];
        Latitude: number;
        Longitude: number;
        Comment: {
            Comment: string;
            CommentSource: string;
            CommentDateTime: string;
            CommentConfidential: boolean;
            CommentOpts: {
                type: string;
                item: string;
            };
        }[];
        units: {
            UnitDispatchNumber: string;
            UnitID: string;
            TimeDispatched: string;
            Personnel: {
                PersonnelID: string;
                PersonnelName: string;
                PersonnelNote: string;
                PersonnelRank: string;
                PersonnelWorkCode: string;
            }[];
            AlarmAtDispatch: string;
            TimeEnroute: string;
            TimeArrived: string;
            TimeStaged: string;
            TimeCleared: string;
            TimeAtHospital: string;
            TimePatient: string;
            TimeTransport: string;
            TimeTransporting: string;
            PersonnelCount: number;
            uuid: string;
        }[];
        preference_location: string;
        EntryDateTime: string;
        ClosedDateTime: string;
        closed_unix_date: number;
        start_unix_date: number;
        modified_unix_date: number;
        ReportNumber: {
            name: string;
            number: string;
        }[];
        radioChannels: {
            name: string;
            channel: string;
            url: string;
            channelDescription: string;
        }[];
        record: {
            name: string;
            value: string;
        };
        sharedSource: {
            isExternal: boolean;
            name: string;
            reasons: {
                date: Date;
                name: string;
            }[];
        };
        sharedTo: {
            active: boolean;
            departmentId: string;
            expireAt: Date;
            name: string;
            reasons: {
                date: Date;
                name: string;
            }[];
            startAt: Date;
        }[];
    };
    cadIncidentBlock: {
        EntryDateTime: string;
        ClosedDateTime: string;
        source: string;
        departmentId: string;
        AgencyIncidentCallTypeDescription: string;
        IncidentNumber: string;
        ReportNumber: {
            name: string;
            number: string;
        }[];
        createdAt: string;
    };
    cadStatus: {
        _id: import("mongoose").Types.ObjectId;
        code: string;
        codeDisplay: string;
        color: {
            background: string;
            text: string;
        };
        departmentId: string;
        modifiedDate: number;
        name: string;
        normalized: string;
        options: {
            cadKey: string;
            cadValues: {
                favorite: boolean;
                name: string;
                position: number;
                type: string;
                value: string;
                visible: boolean;
                isDefault: boolean;
                latitude: number;
                longitude: number;
                time: number;
            }[];
            name: string;
            position: number;
            visible: boolean;
        }[];
        roaming: boolean;
        selfAssignable: boolean;
        status: string;
        statusId: number;
        uuid: string;
    };
    cadStatusMap: {
        departmentId: string;
        fromStatusId: number;
        modifiedDate: number;
        toStatusIds: {
            statusId: number;
            userEnabled: boolean;
            position: number;
        }[];
    };
    cadVehicle: {
        _id: import("mongoose").Types.ObjectId;
        uuid: string;
        radioName: string;
        vehicleId: string;
        modifiedDate: number;
        departmentId: string;
        station: {
            code: string;
            name: string;
        };
        capability: string;
    };
    cadVehicleStatus: {
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
        incidentNumber: string;
        capability: string;
        owner: string;
        ownerId: string;
    };
    cadVehicleStatusHistory: {
        departmentId: string;
        vehicleId: string;
        radioName: string;
        status: string;
        statusCode: string;
        requestedAt: number;
        requestedBy: string;
        modifiedDate: number;
        incidentNumber: string;
    };
    checklist: {
        _id: import("mongoose").Types.ObjectId;
        uuid: string;
        position: number;
        active: boolean;
        name: string;
        userId: string;
        departmentId: string;
        local_id: number;
        isMandatory: boolean;
        agencyId: import("mongoose").Types.ObjectId;
        items: {
            _id: import("mongoose").Types.ObjectId;
            uuid: string;
            checklist_uuid: string;
            position: number;
            active: boolean;
            name: string;
            checked: number;
            api_checklist_id: string;
            userId: string;
            departmentId: string;
            local_id: number;
            isMandatory: boolean;
            description: string;
            modified_date: string;
            modified_unix_date: number;
        }[];
        modified_date: string;
        modified_unix_date: number;
    };
    checklistItem: {
        _id: import("mongoose").Types.ObjectId;
        uuid: string;
        checklist_uuid: string;
        position: number;
        active: boolean;
        name: string;
        checked: number;
        api_checklist_id: string;
        userId: string;
        departmentId: string;
        local_id: number;
        isMandatory: boolean;
        description: string;
        modified_date: string;
        modified_unix_date: number;
    };
    csvImport: {
        _id: import("mongoose").Types.ObjectId;
        batchId: string;
        departmentId: string;
        agencyId: string;
        importType: string;
        fileType: string;
        fileName: string;
        fileSize: string;
        records: never[];
        userId: string;
        status: string;
        sendNotification: boolean;
    };
    department: {
        _id: import("mongoose").Types.ObjectId;
        department: string;
        addressDetails: {
            city: string;
            address: string;
            state: string;
            zipCode: string;
            country: string;
        };
        active: boolean;
        apikey: string;
        partialApiKey: string;
        personnelStaffingEnabled: boolean;
        rtsEnabled: boolean;
        rtsChannelPrefix: string;
        pubNubV3: {
            token: string;
            expireAt: Date;
            runAt: Date;
        };
        agencyIds: import("mongoose").Types.ObjectId[];
        signupKey: string;
        incidentTypes: {
            name: string;
            value: string;
            allowPartialMatch: boolean;
            callTypeDescription: never[];
            callType: never[];
        }[];
        shareLocationPhones: boolean;
        shareLocationTablets: boolean;
        cadOneWayVehiclesEnabled: boolean;
        mowsEnabled: boolean;
        shareAVL: {
            enabled: boolean;
            opAreaCode: string;
            opAreaName: string;
            fadeZoomLevel: number;
        };
        accountType: string;
        timeZone: string;
        firstArrivingEnabled: boolean;
        firstArriving: {
            token: string;
            apiUrl: string;
        };
        simpleSenseEnabled: boolean;
        simpleSense: {
            token: string;
        };
        licensing: {
            tcPro2Way: number;
            tcPro1Way: number;
            tcMobile: number;
            tcWeb: number;
            fireMapperPro: number;
            sendToCAD: number;
            tcStreams: number;
        };
        webDisclaimer: {
            message: string;
            enabled: boolean;
        };
        notificationEmails: string[];
        externalNotificationsEnabled: boolean;
        restrictedComments: {
            enabled: boolean;
            callTypesAllowed: never[];
            statusesAllowed: never[];
            restrictedFields: never[];
            restrictedMessage: string;
        };
        customButtons: {
            name: string;
            url: string;
            order: number;
            allowExternal: boolean;
            defaultExternal: boolean;
            allowFloating: boolean;
            color: {
                background: string;
                text: string;
            };
        }[];
        reportNumberEnabled: boolean;
        samsara: {
            enabled: boolean;
            token: string;
        };
        reportOdometer: string;
    };
    deviceMapping: {
        _id: import("mongoose").Types.ObjectId;
        nick: string;
        departmentId: string;
        deviceType: string;
        mapId: string;
        deviceId: string;
        modified_unix_date: number;
        active: boolean;
        remoteAddress: string;
        note: string;
        mapHidden: boolean;
    };
    deviceMappingWithWhiteSpaces: {
        _id: import("mongoose").Types.ObjectId;
        nick: string;
        departmentId: string;
        deviceType: string;
        mapId: string;
        deviceId: string;
        modified_unix_date: number;
        active: boolean;
        remoteAddress: string;
        note: string;
        mapHidden: boolean;
    };
    esri: {
        _id: import("mongoose").Types.ObjectId;
        departmentId: import("mongoose").Types.ObjectId;
        modified_unix_date: number;
        auth: {
            username: string;
            encrypted: {
                iv: string;
                encryptedData: string;
            };
        };
        fireMapperAuth: {
            username: string;
            encrypted: {
                iv: string;
                encryptedData: string;
            };
            encryptedAccessCode: {
                iv: string;
                encryptedData: string;
            };
        };
        maps: {
            offline: never[];
            size: number;
            modified: number;
            modifiedAt: Date;
            mapLayers: {
                url: string;
                itemId: string;
                layerType: string;
                title: string;
                layerId: string;
                visibility: boolean;
                opacity: number;
                access: string;
                owner: string;
            }[];
            owner: string;
            title: string;
            url: string;
            access: string;
            baseMap: {
                baseMapLayers: {
                    opacity: number;
                    id: string;
                    type: string;
                    layerType: string;
                    title: string;
                    styleUrl: string;
                    visibility: boolean;
                    layerId: string;
                    itemId: string;
                    url: string;
                    access: string;
                    owner: string;
                }[];
                title: string;
            };
            itemId: string;
            type: string;
            tags: string[];
            development: boolean;
        }[];
        mapsProperties: {
            itemId: string;
            download: boolean;
        }[];
    };
    gstMapping: {
        _id: import("mongoose").Types.ObjectId;
        departmentId: string;
        unitId: string;
        modified_unix_date: number;
        active: boolean;
        remoteAddress: string;
        note: string;
        mapHidden: boolean;
        gstAgency: string;
        deviceType: string;
    };
    incidentEvent: {
        IncidentNumber: string;
        departmentId: string;
        modified_unix_date: number;
        message: string;
        location: {
            longitude: number;
            latitude: number;
        };
        userTime: number;
        type: string;
        user: {
            email: string;
            username: string;
            radioName: string;
            userId: string;
        };
        uuid: string;
    };
    incidentNotified: {
        _id: import("mongoose").Types.ObjectId;
        departmentId: string;
        IncidentNumber: string;
        incidentTypes: string[];
        units: string[];
        unitsByDispatch: {
            UnitID: string;
            UnitDispatchNumber: string;
        }[];
        sent: never[];
        updated: Date;
    };
    incidentTakeover: {
        _id: import("mongoose").Types.ObjectId;
        incident_id: string;
        incident_name: string;
        incident_number: string;
        departmentId: string;
        old_owner: string;
        new_owner: string;
        owner: string;
        status: string;
        request_time: number;
    };
    jobLog: {
        host: string;
        jobName: string;
        state: string;
        bidDate: Date;
        startDate: Date;
        completedDate: Date;
        forceClosed: boolean;
    };
    releaseNote: {
        title: string;
        notes: string;
        version: string;
        releaseDate: Date;
        status: string;
    };
    cadSimulation: {
        departmentId: string;
        active: boolean;
        friendlyId: string;
        modifiedDate: number;
        modified: Date;
        title: string;
        notes: string;
        simulation: boolean;
        notify: boolean;
        rts: boolean;
        tags: never[];
        incidentType: string;
        streetName: string;
        locationComment: string;
        suite: string;
        CrossStreet1: string;
        city: string;
        state: string;
        lat: string;
        lon: string;
        firemap: string;
        mapPages: string;
        tacticalChannel: string;
        commandChannel: string;
        radioChannels: never[];
        closeDelay: number;
        priorIncidents: never[];
        randomPriorIncidents: boolean;
        randomStaffing: boolean;
        sequences: {
            _id: import("mongoose").Types.ObjectId;
            title: string;
            alarm: string;
            sequenceId: number;
            unitsConfig: {
                alarmLevelAtDispatch: string;
                units: string[];
            };
            comments: {
                comment: string;
                source: string;
            }[];
        }[];
    };
    location: {
        _id: import("mongoose").Types.ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        heading: number;
        locationGeoJSON: {
            type: string;
            coordinates: number[];
        };
        session: string;
        opAreaCode: string;
        opAreaName: string;
        shared: boolean;
        state: string;
        sendToCAD: boolean;
        color: {
            text: string;
            background: string;
        };
        modified: Date;
    };
    mailLog: {
        mailId: string;
        event: string;
        timestamp: number;
        recipient: string;
        recipientDomain: string;
        tags: string[];
        deliveryStatus: {};
        message: {};
        flags: {};
        envelope: {};
        logLevel: string;
        reason: string;
        severity: string;
    };
    managedIncident: {
        _id: import("mongoose").Types.ObjectId;
        CallerNumber: string;
        CommandChannel: string;
        TacticalAltChannel: string;
        TacticalChannel: string;
        active: boolean;
        address: string;
        api_incident_number: string;
        channel: string;
        channel_owner: string;
        departmentId: string;
        end_time: string;
        end_unix_time: number;
        esri_map: {
            json: string;
            map_type: string;
            name: string;
            url: string;
            uuid: string;
        };
        history: {
            entity_id: string;
            entity_type: number;
            message: string;
            time: number;
            user: string;
        }[];
        is_closed: boolean;
        location: string;
        managed: number;
        modified_date: string;
        modified_unix_date: number;
        name: string;
        preference_location: string;
        slave_map_changed: boolean;
        source: string;
        start_time: string;
        start_unix_time: number;
        units: {
            UnitID: string;
            assignment: {
                name: string;
                uuid: string;
                modified_date: string;
                modified_unix_date: number;
                built_in: boolean;
                isMandatory: boolean;
                description: string;
                active: boolean;
                position: number;
            };
            AlarmAtDispatch: number;
            uuid: string;
            parent_uuid: string;
            local_id: string;
            active: boolean;
            air_time: string;
            api_unit_dispatch_number: string;
            checked: boolean;
            column_position: number;
            group_position: number;
            incident_position: number;
            isSupervisor: boolean;
            is_part_of_group: boolean;
            location_on_image: string;
            location_on_map: string;
            modified_date: string;
            modified_unix_date: number;
            note: string;
            personnelOnScene: number;
            Personnel: {
                PersonnelID: string;
                PersonnelName: string;
                PersonnelNote: string;
                PersonnelRank: string;
                PersonnelWorkCode: string;
            }[];
            status: string;
            status_unix_date: number;
            time: string;
            warning: number;
        }[];
        userId: string;
        uuid: string;
        ReportNumber: {
            name: string;
            number: string;
        }[];
        radioChannels: {
            name: string;
            channel: string;
            url: string;
            channelDescription: string;
        }[];
        record: {
            name: string;
            value: string;
        };
        sharedSource: {
            isExternal: boolean;
            name: string;
            reasons: {
                date: Date;
                name: string;
            }[];
        };
        sharedTo: {
            active: boolean;
            departmentId: string;
            expireAt: Date;
            name: string;
            reasons: {
                date: Date;
                name: string;
            }[];
            startAt: Date;
        }[];
    };
    message: {
        departmentId: string;
        active: boolean;
        title: string;
        body: string;
        actionTitle: string;
        color: {
            background: string;
            text: string;
        };
        url: string;
        priority: number;
        type: {
            type: string;
            typeOpts: {
                major: number;
                minor: number;
                patch: number;
            };
        };
        created: Date;
        uuid: string;
        requestId: string;
    };
    monitor: {
        _id: import("mongoose").Types.ObjectId;
        departmentId: string;
        agencyId: string;
        notificationType: string;
        status: string;
        sentAt: Date;
        sentUnixDate: number;
    };
    personnelImport: {
        _id: import("mongoose").Types.ObjectId;
        PersonnelID: string;
        PersonnelName: string;
        PersonnelRank: string;
        PersonnelWorkCode: string;
        PersonnelNote: string;
        departmentId: string;
        radioNames: string[];
        shiftStartTime: number;
        shiftStart: Date;
        shiftEndTime: number;
        shiftEnd: Date;
        modified_unix_date: number;
        modified: Date;
        active: boolean;
        agencyCode: string;
        agencyName: string;
        importNotes: string;
    };
    rateLimit: {
        _id: import("mongoose").Types.ObjectId;
        username: string;
        modified_unix_date: number;
        count: number;
    };
    session: {
        when: string;
        user: string;
        email: string;
        nick: string;
        deviceId: string;
        remoteAddress: string;
        userAgent: string;
        why: string;
        departmentId: string;
        source: string;
        token: string;
        active: boolean;
        ended: string;
    };
    template: {
        position: number;
        active: boolean;
        name: string;
        userId: string;
        departmentId: string;
        isMandatory: boolean;
        group: never[];
        checklist: never[];
        agencyId: import("mongoose").Types.ObjectId;
    };
    user: {
        _id: import("mongoose").Types.ObjectId;
        nick: string;
        email: string;
        mapId: string;
        departmentId: string;
        isPro: boolean;
        agencyId: import("mongoose").Types.ObjectId;
        managedAgencies: import("mongoose").Types.ObjectId[];
        shareLocationPhone: boolean;
        shareLocationTablet: boolean;
        notificationSounds: {
            sound: string;
            soundType: string;
        }[];
        offlineMapsEnabled: boolean;
        offDutyEnabled: boolean;
        webMapSettings: {
            defaultZoomLevel: number;
            defaultCenter: number[];
            defaultMap: string;
        };
        restrictedCommentsEnabled: boolean;
    };
    userDevice: {
        userId: string;
        departmentID: string;
        devices: {
            token: string;
            env: string;
            ver: string;
            ua: string;
            time: number;
            drift: number;
            bundleIdentifier: string;
            silentEnabled: boolean;
            criticalAlertsEnabled: boolean;
            session: string;
            active: boolean;
            offDuty: boolean;
            t: Date;
            channelId: string;
        }[];
        notificationCount: number;
        notificationUnitSettings: {
            radioName: string;
            notificationType: string;
            notificationMode: string;
        }[];
        notificationIncidentSettings: {
            incidentType: string;
            notificationType: string;
            notificationMode: string;
        }[];
        notificationSounds: {
            ios: {
                sound: string;
                soundType: string;
                os: string;
            };
            android: {
                sound: string;
                soundType: string;
                os: string;
            };
        };
        offDuty: boolean;
        criticalAlertsVolume: string;
    };
    userRegistration: {
        email: string;
        name: string;
        firstName: string;
        lastName: string;
        department: string;
        title: string;
        modifiedDate: number;
        status: string;
        stage: string;
        presentedAt: number;
        managedIncidentsCount: number;
        checklistsCount: number;
        firstIncidentUnixTime: number;
        lastIncidentLocation: string;
        lastIncidentUnixTime: number;
    };
    validationReport: {
        _id: import("mongoose").Types.ObjectId;
        departmentId: import("mongoose").Types.ObjectId;
        modified: Date;
        location: never[];
        statusMap: never[];
        status: never[];
        vehicleStatus: never[];
        vehicle: never[];
        incident: {
            message: string;
            firstSeenAt: Date;
            lastSeenAt: Date;
            clearedAt: Date;
            payload: {
                AgencyID: string;
                IncidentNumber: string;
                ReportNumber: string;
            };
        }[];
        personnel: never[];
    };
};
//# sourceMappingURL=mock.d.ts.map