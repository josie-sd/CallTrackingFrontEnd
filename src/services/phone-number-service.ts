import { SupportToolsService, Methods, Endpoints } from './support-tools-service';
import { RestoreRequest, PpcPortRequest, OrganicPortRequest, RemovedNumber, RingToTemplate } from '../interfaces';

export const GetRingToTemplates = (clientId: number) => {
    return SupportToolsService(`${Endpoints.Numbers}/RingToTemplates?ClientId=${clientId}`, Methods.Get).then(data => {
        let jsonData = JSON.stringify(data);
        let json = JSON.parse(jsonData);
        let templates: Array<RingToTemplate> = [];
        for(var t in json){
            const current = json[t];
            const rTemplate: RingToTemplate = {
                TemplateId:  current.templateId,
                ClientId:  current.clientId,
                RingTo:  current.ringTo,
                Name:  current.name,
                TimeZone: current?.timeZone,
                ScheduleId: current?.scheduleId,
                Default: current?.default,
                Extension: current?.extension,
                ModifiedDate: current?.modifiedDate,
                ModifiedBy: current?.modifiedBy,
                DisableIvr: current?.disableIVR,
                AreaCode: current?.areaCode,
                IvrRecording: current?.ivR_Recording,
                IgnoreFranchiseOverride: current?.ignoreFranchiseOverride,
                CallReportEmail: current?.callReportEmail,
                CallReportEmail_CC: current?.callReportEmail_CC,
                CallReportEmail_BCC: current?.callReportEmail_BCC,
            }
            templates.push(rTemplate);
        }
        return templates
    });
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
    SupportToolsService(`${Endpoints.Numbers}/PortPaidNumber`, Methods.Post, body, false);
}

export const PortOrganicNumber = (request: OrganicPortRequest) => {
    const body = {
        "ProjectId": request.ProjectId,
        "Number": request.Number,
        "Country": request.Country,
        "RingTo": request.RingTo,
        "TemplateId": request.TemplateId 
    }
    SupportToolsService(`${Endpoints.Numbers}/PortOrganicNumber`, Methods.Post, body, false);
}

export const GetRemovedNumbers = (projectId: number) => {
    return SupportToolsService(`${Endpoints.Numbers}/RemovedNumbers?ProjectId=${projectId}`, Methods.Get).then(data => {
        let jsonData = JSON.stringify(data);
        let json = JSON.parse(jsonData);
        let numbers: Array<RemovedNumber> = [];
        for(var t in json){
            const current = json[t];
            const rNumber: RemovedNumber = {
                PhoneNumber: current.phoneNumber,
                DateDeleted: current.dateDeleted,
                ModifiedBy: current.modifiedBy,
                Campaign: current.campaignName
            }
            numbers.push(rNumber);
        }
        return numbers
    });
}

export const RestoreNumber = (request: RestoreRequest) => {
    const body = {
        "ProjectId": request.ProjectId,
        "Number": request.Number
    }
    SupportToolsService(`${Endpoints.Numbers}/RestoreNumber`, Methods.Post, body, false);
}