export interface RingToTemplate{
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

export interface CallTrackingNumber{
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

export interface OrganicPortRequest{
    Number: string 
    ProjectId: number 
    RingTo: string 
    TemplateId?: number
    Country: string  
}

export interface PpcPortRequest{
    Number: string 
    ProjectId: number 
    RingTo: string 
    TemplateId?: number
    CampaignId: number
    Country: string 
}