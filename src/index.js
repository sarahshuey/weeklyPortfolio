import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutUs from'./components/AboutUs';
import BaseLayout from'./components/BaseLayout';
import CampingNeeds from'./components/CampingNeeds';
import ContactUs from'./components/ContactUs';
import FishingTackle from'./components/FishingTackle';
import HikingGear from'./components/HikingGear';



ReactDOM.render(
<BrowserRouter>
   <BaseLayout>
     <Switch>
       <Route exact path="/" component={App} />
       <Route path="/ContactUs" component={ContactUs} />
       <Route path="/AboutUs" component={AboutUs} />
       <Route path="/CampingNeeds" component={CampingNeeds} />
       <Route path="/FishingTackle" component={FishingTackle} />
       <Route path="/HikingGear" component={HikingGear} />
     </Switch>
   </BaseLayout>
 </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
