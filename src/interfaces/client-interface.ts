import { RingToTemplate, PpcPortRequest, OrganicPortRequest } from './phone-number-interface';
import { AssignmentRequest, PhoneAssignment } from './assignment-interface';

export interface NumberService {
    RingToTemplates: (clientId: number) => Promise<Array<RingToTemplate>>
    PortPaidNumber: (request: PpcPortRequest) => void
    PortOrganicNumber: (request: OrganicPortRequest) => void
}

export interface AssignmentService {
    ActiveCampaigns: (projectId: number) => Promise<Array<PhoneAssignment>>
    AddAssignment: (request: AssignmentRequest) => void
}