import { RingToTemplate, PpcPortRequest, OrganicPortRequest } from './phone-number-interface';
import { AssignmentRequest } from './assignment-interface';

export interface NumberService {
    RingToTemplates: (clientId: number) => Array<RingToTemplate>
    PortPaidNumber: (request: PpcPortRequest) => void
    PortOrganicNumber: (request: OrganicPortRequest) => void
}

export interface AssignmentService {
    ActiveCampaigns: (projectId: number) => void
    AddAssignment: (request: AssignmentRequest) => void
}