import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Services from './functions/support-tools-service';
import { NumberService, AssignmentService } from './interfaces/client-interface';
import { RingToTemplates } from './components/ring-to-templates';

const App = () => {
  const [page, setPage] = useState<string>('Menu');

  const renderPage =(p: string) => {
    if(p == 'RingToTemplates') {
      return <RingToTemplates Back={() => { console.log('I am trying'); setPage(() => "Menu") }} />
    }
  }

  let content = (
    <React.Fragment>
      <div className="App">
        <input id="PortOrganicNumber" type="button" value="Port Organic Number" />
        <input id="PortPaidNumber" type="button" value="Port Paid Number" />
        <input id="RingToTemplates" type="button" value="Ring To Templates" onClick={() => { console.log('Page status = ', page); setPage(() => 'RingToTemplates')}}/>
        <input id="ActiveCampaigns" type="button" value="Active Campaigns" />
        <input id="AddAssignment" type="button" value="Add Assignment" />
        {renderPage(page)}
      </div>
    </React.Fragment>
  );
  

  const numberClient: NumberService = {
    PortOrganicNumber: Services.PortOrganicNumber,
    PortPaidNumber: Services.PortPaidNumber,
    RingToTemplates: Services.GetRingToTemplates
  }
  const assignmentClient: AssignmentService = {
    ActiveCampaigns: Services.ActiveCampaigns,
    AddAssignment: Services.AddAssignment
  }
  

  return content
}

export default App;
