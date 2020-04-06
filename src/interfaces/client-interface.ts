import { PhoneAssignment, Campaign, RingToTemplate } from './';

export interface NumberService {
    RingToTemplates: (clientId: number) => Promise<Array<RingToTemplate>>
    PortPaidNumber: (request: PpcPortRequest) => void
    PortOrganicNumber: (request: OrganicPortRequest) => void
}

export interface AssignmentService {
    ActiveCampaigns: (projectId: number) => Promise<Array<Campaign>>
    AddAssignment: (request: AssignmentRequest) => Promise<PhoneAssignment>
}

export interface AssignmentRequest {
    PhoneNumber: string
    CampaignId: number
}

export interface RestoreRequest {
    Number: string,
    ProjectId: number
}


export interface OrganicPortRequest {
    Number: string 
    ProjectId: number 
    RingTo?: string 
    TemplateId?: number
    Country: string  
}

export interface PpcPortRequest {
    Number: string 
    ProjectId: number 
    RingTo?: string 
    TemplateId?: number
    CampaignId: number
    Country: string 
}