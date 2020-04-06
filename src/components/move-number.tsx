import React from 'react';
import { Navigation } from '../interfaces';

export const MoveNumber: React.FunctionComponent<Navigation> = (props) => { 
    return (
    <div>
        <span>Move Number</span>
        <input type='button' value='Back' onClick={(() => props.Back())} />
    </div>
    );
}