import React, { useState } from 'react';
import { Assignment } from './components/add-assignment';
import './styles/_app.scss';
import { ScorpionIcon } from './styles/logo';
import { PortingWizard } from './components/porting-wizard';
import { RemovedNumbers } from './components/removed-numbers';
import { MoveNumber } from './components/move-number';

const App = () => {
  const [page, setPage] = useState<string>('Menu');

  const renderPage =(p: string) => {
    if(p === 'Menu') {
      return (
        <div className="nav-banner">
          <input id="PortingWizard" className='nav-btn' type="button" value="Port Number" onClick={() => { setPage(() => 'PortingWizard')}} />
          <input id="AddAssignment" className='nav-btn' type="button" value="Add Assignment"  onClick={() => { setPage(() => 'AddAssignment')}} />
          <input id="RemovedNumber" className='nav-btn' type="button" value="Restore Removed Number"  onClick={() => { setPage(() => 'RemovedNumber')}} />
          <input id="MoveNumber" className='nav-btn' type="button" value="Move Number"  onClick={() => { setPage(() => 'MoveNumber')}} />
        </div>
      );
    }
    if(p === 'PortingWizard') return <PortingWizard Back={() => { setPage(() => "Menu") }} /> 
    if(p === 'AddAssignment') return <Assignment Back={() => { setPage(() => "Menu") }} /> 
    if(p === 'RemovedNumber') return <RemovedNumbers Back={() => { setPage(() => "Menu") }} /> 
    if(p === 'MoveNumber') return <MoveNumber Back={() => { setPage(() => "Menu") }} /> 
  }

  let content = (
    <React.Fragment>
      <div className="app">
      <div className='scorpion-header'><span className='bug'>{ ScorpionIcon() }</span></div>
        {renderPage(page)}
      </div>
    </React.Fragment>
  );
  
  return content
}

export default App;
