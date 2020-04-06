import React, { useState } from 'react';
import { GetActiveCampaigns } from '../services';
import { Campaign, ICampaign } from '../interfaces';

export const Campaigns: React.FunctionComponent<ICampaign> = (props) => {
    const [campaignList, setCampaignList] = useState<Array<Campaign> | undefined>(undefined);

    const getCampaigns = (projectId: number) => {
        GetActiveCampaigns(projectId).then(c => setCampaignList(c));
    } 

    const CampaignList = () => {
        return campaignList?.map(c => {
            console.log(c)
            return (
                <div 
                    className="Campaign" 
                    onClick={() => props.SetCampaign(c)}
                > 
                    Name: {c.Name}
                </div>
            )
        })
    }

    let content = (
        <div id="Campaigns">
            <input type="button" value="Search By ProjectId" onClick={() => { if(props.Project > 0) getCampaigns(props.Project) }}/>
            {CampaignList()}
        </div>
    );
    
    return content;
}