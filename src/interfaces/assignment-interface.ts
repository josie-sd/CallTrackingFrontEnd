export interface PhoneAssignment {
    Id: number,
    ClientId: number
    ProjectId: number
    PhoneNumber: string
    PhoneNumberTypeId: number
    ObjectTypeId: number 
    ObjectId: number
    Active: boolean
    ModifiedBy: string
    Deleted: boolean
    PhoneNumberId: number
}

export interface AssignmentDetails {
    Id: number,
    ClientId: number
    ProjectId: number
    PhoneNumber: string
    Campaign: string
    Active: boolean
    ModifiedBy: string
    Existing?: boolean
}

export interface Campaign {
    Id: number,
    Name: string
}

export interface ICampaign {
    SetCampaign: (campaign: Campaign) => void,
    ActiveCampaign?: Campaign,
    Project: number 
}