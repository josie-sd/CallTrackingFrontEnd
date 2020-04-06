import React, { useState } from 'react';
import { RingToTemplate, IRingToTemplate } from '../interfaces';
import { GetRingToTemplates } from '../services';

export const RingToTemplates: React.FunctionComponent<IRingToTemplate> = (props) => {
    const [templateList, setTemplateList] = useState<Array<RingToTemplate> | null>(null);

    const templateTable = () => {
        return templateList?.map(template => {
            return (
                <div 
                    className="TemplateCard" 
                    onClick={() => props.SetTemplate(template)}
                    key={template.TemplateId}
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
        if(props.ActiveTemplate){
            return(
                <div id="SelectedTemplate"> 
                    Currently Selected Template: 
                    <div className="templateCard">
                        Name: {props.ActiveTemplate.Name}
                        Ring-To: {props.ActiveTemplate.RingTo}
                        Schedule: {props.ActiveTemplate.ScheduleId != null}
                        IVR: {props.ActiveTemplate.IvrRecording}
                    </div>
                </div>
            )
        }
    }

    let content = (
        <div className="ring-to">
            <input 
                type="text" 
                id="TemplateInput" 
                value={String(props.Client) ? String(props.Client) : 0} 
                onChange={ e => props.SetClient(Number(e.target.value)) }
                />
            <input 
                type="button" 
                value="Search" 
                onClick={() => { 
                    if(props.Client) GetRingToTemplates(props.Client).then(l => setTemplateList(l)); 
                }}/>
            {selectedTemplate()}
            {templateTable()}
        </div>
    );
    return content;
}