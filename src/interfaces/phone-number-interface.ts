export interface RingToTemplate {
    TemplateId: number
    ClientId: number
    RingTo: string
    Name: string
    TimeZone?: number
    ScheduleId?: number
    Default?: boolean
    Extension?: string
    ModifiedDate?: Date
    ModifiedBy?: string
    DisableIvr?: boolean
    AreaCode?: string
    IvrRecording?: string
    IgnoreFranchiseOverride?: boolean
    CallReportEmail?: string
    CallReportEmail_CC?: string
    CallReportEmail_BCC?: string
}

export interface CallTrackingNumber {
    NumberId: number
    ProjectId: number
    Number: string
    RingTo: string
    TwilioSid: string
    TemplateId?: number
    SppcAssignment: boolean
    Twilio: boolean
    CountryCode: string
    Active: boolean
    SoftDeleted?: boolean
    Deleted?: boolean
    DateDeleted?: Date
}

export interface IRingToTemplate {
    SetTemplate: (template: RingToTemplate) => void,
    ActiveTemplate?: RingToTemplate,
    SetClient: (client: number) => void,
    Client: number
}

export interface RemovedNumber {
    PhoneNumber: string,
    DateDeleted: Date,
    ModifiedBy: string,
    Campaign: string
}