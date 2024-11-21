export type ClassType = {
    id: number;
    name: string;
    schedules: Schedule[];
}

export type Schedule = {
    id: number;
    day: string;
    hour: number;
}

export type Membership = {
    start: Date;
    duration: number;
    limit: number;
    classes: MembershipClass[];
}

export type MembershipClass = {
    id: number;
    membership_id: number;
    membership: Membership;
    class_id: number;
    class: ClassType;
    visits: Visit[];
    created_at: Date;
    updated_at: Date;
}

export type Visit = {
    id: number;
    membership_class_id: number;
    membership_class: MembershipClass;
    date: Date;
    observations?: string;
    created_at: Date;
    updated_at: Date;
}