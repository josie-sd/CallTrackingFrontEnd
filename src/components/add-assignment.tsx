import React, { useState } from 'react'
import { Navigation, AssignmentDetails, AssignmentRequest } from '../interfaces';
import { AddAssignment } from '../services';

export const Assignment: React.FunctionComponent<Navigation> = (props) => {
    const [assignment, setAssignment] = useState<AssignmentDetails | null>(null);
    const [phone, setPhone] = useState<string | null>(null);
    const [campaign, setCampaign] = useState<number | null>(null);

    const addAssignment = (request: AssignmentRequest) => {
        console.log(request);
        return AddAssignment(request).then(a => {setAssignment(a)});
    }

    const renderReturnedAssignment = () => {
        if(assignment){
            const exists = assignment.Existing ? <strong>Found an Existing Assignment for this Number</strong> : null;
            return(
                <div className="assignment-card" key={assignment.Id}>
                    {exists}
                    ClientId: {assignment.ClientId}
                    ProjectId: {assignment.ProjectId}
                    PhoneNumber: {assignment.PhoneNumber} 
                    Campaign: {assignment.Campaign}
                    Active: {assignment.Active}
                    ModifiedBy: {assignment.ModifiedBy}
                </div>
            )
        }
    }
    
    let content = (
        <div className="assignment-input">
            <div className="post-input">
                <label>Phone Number:</label>  
                <input 
                    type="text" 
                    id="PhoneInput" 
                    value={phone ? phone : ""} 
                    onChange={ e => setPhone(e.target.value) }
                />
            </div>
            <div className="post-input">
                <label>Campaign:</label>  
                <input 
                    type="text" 
                    className='campaign-input'
                    value={campaign ? campaign : 0} 
                    onChange={ e => setCampaign(Number(e.target.value)) }
                />
            </div>
            <input 
                type="button" 
                value="Create Assignment" 
                onClick={() => { 
                    if(phone && campaign) {
                        let request: AssignmentRequest = {
                            PhoneNumber: phone,
                            CampaignId: campaign
                        }
                        addAssignment(request);
                    } 
                }}
            />
            {renderReturnedAssignment()}
            <input type='button' value='Back' onClick={(() => props.Back())} />
        </div>
    );
    return content;
}