import { PpcPortRequest, OrganicPortRequest } from "../interfaces/phone-number-interface";
import { AssignmentRequest } from "../interfaces/assignment-interface";

const Endpoints = {
    Numbers: 'https://localhost:44357/api/phonenumber/',
    Assignments: 'https://localhost:44357/phoneassignment/'
}

const Methods = {
    Get: 'GET',
    Post: 'POST'
}

export async function SupportToolsService(endpoint: string, method: string, body?: object, ) {    
    let options = body ? { method: method, body: JSON.stringify(body) } : { method: method };
    let result = await fetch(endpoint, options)
	.then(response => response.json())
	.then(data => data);

	return result;
};

export const RingToTemplates = (clientId: number) => {
    return SupportToolsService(`${Endpoints.Numbers}/RingToTemplates`, Methods.Post, { "ClientId": clientId });
}

export const PortPaidNumber = (request: PpcPortRequest) => {
    const body = {
        "ProjectId": request.ProjectId,
        "Number": request.Number,
        "CampaignId": request.CampaignId,
        "Country": request.Country,
        "RingTo": request.RingTo,
        "TemplateId": request.TemplateId 
    }
    return SupportToolsService(`${Endpoints.Numbers}/PortPaidNumber`, Methods.Post, body);
}

export const PortOrganicNumber = (request: OrganicPortRequest) => {
    
    const body = {
        "ProjectId": request.ProjectId,
        "Number": request.Number,
        "Country": request.Country,
        "RingTo": request.RingTo,
        "TemplateId": request.TemplateId 
    }
    return SupportToolsService(`${Endpoints.Numbers}/PortOrganicNumber`, Methods.Post, body);
}

export const ActiveCampaigns = (ProjectId: number) => {
    return SupportToolsService(`${Endpoints.Assignments}/ActiveCampaigns`, Methods.Post, { "ProjectId": ProjectId });
}

export const AddAssignment = (request: AssignmentRequest) => {
    return SupportToolsService(`${Endpoints.Assignments}/CreateAssignment`, Methods.Post, { "CampaignId": request.CampaignId, "Number": request.PhoneNumber });
}