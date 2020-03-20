export interface PhoneAssignment {
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

export interface AssignmentRequest {
    PhoneNumber: string
    CampaignId: number
}