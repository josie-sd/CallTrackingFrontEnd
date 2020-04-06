import React, { useState } from 'react';
import { Navigation, RemovedNumber, RestoreRequest } from '../interfaces';
import { GetRemovedNumbers, RestoreNumber } from '../services';

export const RemovedNumbers: React.FunctionComponent<Navigation> = (props) => { 
    const [project, setProject] = useState<number>(0);
    const [number, setNumber] = useState<RemovedNumber | undefined>(undefined);
    const [numberList, setNumberList] = useState<Array<RemovedNumber> | undefined>(undefined);

    const getRemovedNumbers = (project: number) => {
        GetRemovedNumbers(project).then(n => setNumberList(n));
    } 

    const restoreNumber = () => {
        if(project > 0 && number){
            let request: RestoreRequest = {
                Number: number.PhoneNumber,
                ProjectId: project
            }
            RestoreNumber(request);
        }
    }

    const renderNumbers = () => {
        if(numberList){
            return numberList.map((n: RemovedNumber) => {
                return (
                    <div className='number-card' key={n.PhoneNumber} onClick={() => setNumber(n)}>
                        <span>Number: {n.PhoneNumber}</span>
                        <span>Campaign: {n.Campaign}</span>
                        <span>Modified By: {n.ModifiedBy}</span>
                        <span>Date Deleted: {n.DateDeleted}</span>
                    </div>
                );
            })
        }
    }

    const renderActiveNumber = () => {
        if(number){
            return (
                <div className='activeNumber'>
                    <span>Number: {number.PhoneNumber}</span>
                    <span>Campaign: {number.Campaign}</span>
                    <span>Modified By: {number.ModifiedBy}</span>
                    <span>Date Deleted: {number.DateDeleted}</span>
                </div>
            )
        }
    }

    let content =(
        <div>
            <h3>Get Removed Numbers</h3>
            <label>Search By Project</label>
            <input type='text' value={project} onChange={(e) => setProject(Number(e.target.value)) } />
            <input type='button' value='Search' onClick={() => { if(project > 0) getRemovedNumbers(project) }} />
            {renderActiveNumber()}
            {renderNumbers()}
            <input type='button' value='Restore Selected Number' onClick={() => { if(project > 0 && number) restoreNumber() }} />
            <input type='button' value='Back' onClick={(() => props.Back())} />
        </div>
    );

    return content
}