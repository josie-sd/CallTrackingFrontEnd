import React, { useState } from 'react';
import { RingToTemplates } from './ring-to-templates';
import { RingToTemplate, Navigation, Campaign, PpcPortRequest, OrganicPortRequest } from '../interfaces';
import { PortPaidNumber, PortOrganicNumber } from '../services';
import { Campaigns } from './campaigns';

export const PortingWizard: React.FunctionComponent<Navigation> = (props) => { 
    const [number, setNumber] = useState<string>("");
    const [client, setClient] = useState<number>(0);
    const [project, setProject] = useState<number>(0);
    const [template, setTemplate] = useState<RingToTemplate | undefined>(undefined);
    const [campaign, setCampaign] = useState<Campaign | undefined>(undefined);
    const [toggle, setToggle] = useState(true);

    const handleSubmit = () => {
        if(toggle){
            if(campaign && template && project && number){
                let request: PpcPortRequest = {
                    Number: number,
                    ProjectId: project,
                    CampaignId: campaign?.Id,
                    TemplateId: template?.TemplateId,
                    Country: "US"
                }
                PortPaidNumber(request);
            }
        }
        else{
            let request: OrganicPortRequest = {
                Number: number,
                ProjectId: project,
                TemplateId: template?.TemplateId,
                Country: "US"
            }
            PortOrganicNumber(request);
        }        
    }

    const handleReset = () => {
        setNumber('');
        setProject(0);
        setTemplate(undefined);
        setCampaign(undefined);
    }

    const renderCampaign = () => {
        if(toggle){
            return(
                <div className='wizrd-input'>    
                    <label className="ppc">Search for active campaigns by Project Id: </label>
                    <Campaigns SetCampaign={(c) => setCampaign(c)} ActiveCampaign={campaign} Project={project} /> 
                </div>
            )
        }
        else return null;
    }

    const renderCampaignRadio = () => {
        if(toggle) {
            return(
                <div className='req'>
                    <label>Campaign </label>
                    <input type="radio" disabled checked={campaign ? true : false} />
                </div>
            )
        }
    }

    const togglebtn = (t: boolean) => {
        if(!toggle) t = !t 
        return t ? 'toggle-btn active' : 'toggle-btn';
    }

    const checklist = () => {
        let val = "porting-checklist"; 
        if(toggle){
            if(campaign && template && project && number) val = "porting-checklist happy"
            if(!campaign || !template || !project || !number) val = "porting-checklist warn"
        }
        if(!toggle){
            if(template && project && number) val = "porting-checklist happy"
            if(!template || !project || !number) val = "porting-checklist warn"
        }
        return val
    }

    let content = (
        <div className='yr-a-wizard-arry'>
            <div className='toggle-banner'>
                <input type="button" className={togglebtn(true)} onClick={() => {setToggle(true)}} value="PPC" />
                <input type="button" className={togglebtn(false)} onClick={() => {setToggle(false)}} value="Organic" />
            </div>
            <div className={checklist()}><h3>Required Items</h3>
                <div className='req'>
                    <label>Phone Number </label>
                    <input type="radio" disabled checked={number ? true : false} />
                </div>
                <div className='req'>
                    <label>Project </label>
                    <input type="radio" disabled checked={project > 0 ? true : false} />
                </div>
                {renderCampaignRadio()}
                <div className='req'>
                    <label>Ring-To </label>
                    <input type="radio" disabled checked={template ? true : false} />
                </div>
            </div>
            <div className='input-window'>
                <h3>Values</h3>
                <div className='wizrd-input'>
                    <label>Enter the Phone Number that you want to port in: </label>
                    <input type="text" value={number.trim()} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className='wizrd-input'>
                    <label>Enter the ProjectId for the website that needs this number: </label>
                    <input type="text" value={project} onChange={(e) => setProject(Number(e.target.value))} />
                </div>
                {renderCampaign()}
                <div className='wizrd-input'>
                    <label>Search Ring-To Template By Client Id: </label>
                    <RingToTemplates SetTemplate={(t) => setTemplate(t)} ActiveTemplate={template} SetClient={(c) => {setClient(c)}} Client={client} />
                </div>
            </div>
            <div className='nav-footer'>
                <input type='button' value='Back' onClick={(() => props.Back())} />   
                <input className="btn-submit" type="button" value='Clear' onClick={() => { handleReset() }} />   
                <input className="btn-submit" type="button" value='Submit' onClick={() => { handleSubmit() }} />   
            </div>
        </div>
    );

    return content;
}