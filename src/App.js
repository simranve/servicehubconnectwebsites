import './assets/style/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import { createBrowserHistory } from 'history';

import Homepage from './container/Homepage/Homepage';
import Rideshare from './container/Rideshare/Rideshare';
import Carpool from './container/Rideshare/Carpool';
import CarpoolList from './container/Rideshare/CarpoolList';
import CarpoolDetail from './container/Rideshare/CarpoolDetail';
import Settings from './container/Settings/Settings';
import ServiceDetails from './container/Rideshare/ServiceDetails';
import TrackProfessional from './container/TrackProfessional/TrackProfessional';
import RescheduleService from './container/TrackProfessional/RescheduledService';
import MyService from './container/MyService/MyService';
import MyInvoice from './container/MyService/MyInvoice';
import Support from './container/Rideshare/Support';
import BusinessDetail from './container/Rideshare/BusinessDetail';
import { SnackbarProvider } from "notistack";

const history = createBrowserHistory()

const App = () => {
  return (
    <Router history={history}>
      <SnackbarProvider>
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/subcategory' component={Rideshare} />
          <Route path='/subcategory' render={(props) => <Rideshare {...props} />} />
          <Route exact path='/carpool' component={Carpool} />
          <Route exact path='/carpoollist' component={CarpoolList} />
          <Route exact path='/carpooldetail' component={CarpoolDetail} />
          <Route exact path='/servicedetail' component={ServiceDetails} />
          <Route exact path='/trackprofessional' component={TrackProfessional} />
          <Route exact path='/rescheduleservice' component={RescheduleService} />
          <Route exact path='/myservice' component={MyService} />
          <Route exact path='/myinvoice' component={MyInvoice} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/businessdetail' component={BusinessDetail} />

          <Route exact path='/settings' component={Settings} />
        </Switch>
        
      </div>
      </SnackbarProvider>
    </Router>
  )
};

export default App
