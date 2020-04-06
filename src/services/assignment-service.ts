import { SupportToolsService, Methods, Endpoints } from "./support-tools-service";
import { AssignmentDetails, Campaign, AssignmentRequest } from "../interfaces";

export const GetActiveCampaigns = (projectId: number) => {
    return SupportToolsService(`${Endpoints.Assignments}/ActiveCampaigns?ProjectId=${projectId}`, Methods.Get).then(data => {
        let jsonData = JSON.stringify(data);
        let json = JSON.parse(jsonData);
        let campaigns: Array<Campaign> = [];
        for(var t in json){
            const current = json[t];
            const rCampaign: Campaign = {
                Id: current.id,
                Name: current.campaignName
            }
            campaigns.push(rCampaign);
        }
        return campaigns
    });
}

export const AddAssignment = (request: AssignmentRequest) => {
    let response = SupportToolsService(`${Endpoints.Assignments}/CreateAssignment`, Methods.Post, { "PhoneNumber": request.PhoneNumber, "CampaignId": request.CampaignId }).then(data => {
        let jsonData = JSON.stringify(data);
        let json = JSON.parse(jsonData);
        let assignment: AssignmentDetails = {
            Id: json.id,
            ClientId: json.clientId,
            ProjectId: json.projectId,
            PhoneNumber: json.phoneNumber,
            Campaign: json.campaign,
            Active: json.active,
            ModifiedBy: json.modifiedBy,
            Existing: json.existing
        };
        return assignment
    });
    return response;
}