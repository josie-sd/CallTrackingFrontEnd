import React, { useState, ChangeEvent } from 'react';
import { RingToTemplate } from '../interfaces/phone-number-interface';
import {IRingToTemplate} from '../interfaces/IRingToTemplate';
import { GetRingToTemplates } from '../functions/support-tools-service';

export const RingToTemplates: React.FunctionComponent<IRingToTemplate> = () => {
    const [templateList, setTemplateList] = useState<Array<RingToTemplate> | null>(null);
    const [template, setTemplate] = useState<RingToTemplate | null>(null);
    const [client, setClient] = useState<number | null>(null);
    
    const handleClientInput = (text: string) => setClient(() => Number(text)); 

    const getRingToTemplates = (clientId: number) => {
        GetRingToTemplates(clientId).then(l => setTemplateList(l));
    } 

    const templateTable = () => {
        templateList?.map(template => {
            return (
                <div 
                    className="TemplateCard" 
                    onClick={() => setTemplate(() => template)}
                > 
                    Name: {template.Name}
                    Ring-To: {template.RingTo}
                    Schedule: {template.ScheduleId != null}
                    IVR: {template.IvrRecording}
                </div>
            )
        })
    }

    const selectedTemplate = () => {
        if(template){
            return(
                <div id="SelectedTemplate"> 
                    Currently Selected Template: 
                    <div className="templateCard">
                        Name: {template.Name}
                        Ring-To: {template.RingTo}
                        Schedule: {template.ScheduleId != null}
                        IVR: {template.IvrRecording}
                    </div>
                </div>
            )
        }
    }

    let content = (
        <div id="RingToTemplates">
            ClientID: 
            <input 
                type="text" 
                id="" 
                value={String(client)} 
                onChange={ e => handleClientInput(e.target.value) }
                />
            <input type="button" value="Search" onClick={() => { if(client) getRingToTemplates(client) }}/>
            {selectedTemplate()}
            {templateTable()}
            <input type='button' value='Back' onClick={(() => {/*
                Set the page back to the menu
            */})} />
        </div>
    );
    return content;
}