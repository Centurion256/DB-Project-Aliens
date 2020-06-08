import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/login";
import AlienHome from "./components/home_pages/alien_home";
import HumanHome from "./components/home_pages/human_home";
import AdminHome from "./components/home_pages/admin_home";
import AdminFill from "./components/admin_fill";
import AdminShow from "./components/admin_show";
import HumanShow from "./components/human_show";
import AlienShow from "./components/alien_show";
import AdminRequest from "./components/admin_request";
import HumanRequest from "./components/human_request";
import AlienRequest from "./components/alien_request";
import {FillAlienTable, FillAbductionTable, FillConvictionLogTable, FillExcursionHumanTable, FillExcursionTable,
  FillExperimentAlienTable, FillExperimentTable, FillHumanTable, FillMurderTable, FillRedemptionTable,
  FillSpaceshipTable, FillTransportationTable} from "./components/fill_tables";
import {Q1Request, Q2Request, Q3Request, Q4Request, Q5Request, Q6Request, Q7Request, Q8Request, Q9Request, Q10Request,
  Q11Request, Q12Request} from "./components/request_results";


function App() {
  return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Login} exact/>
                <Route path="/alien_home" component={AlienHome} exact/>
                <Route path="/human_home" component={HumanHome} exact/>
                <Route path="/admin_home" component={AdminHome} exact/>

                <Route path="/filling_admin" component={AdminFill} exact/>

                <Route path="/show_admin" component={AdminShow} exact/>
                <Route path="/show_human" component={HumanShow} exact/>
                <Route path="/show_alien" component={AlienShow} exact/>

                <Route path="/request_admin" component={AdminRequest} exact/>
                <Route path="/request_human" component={HumanRequest} exact/>
                <Route path="/request_alien" component={AlienRequest} exact/>

                <Route path="/filling_alien_table" component={FillAlienTable} exact/>
                <Route path="/filling_spaceship_table" component={FillSpaceshipTable} exact/>
                <Route path="/filling_excursion_table" component={FillExcursionTable} exact/>
                <Route path="/filling_human_table" component={FillHumanTable} exact/>
                <Route path="/filling_experiment_table" component={FillExperimentTable} exact/>
                <Route path="/filling_transportation_table" component={FillTransportationTable} exact/>
                <Route path="/filling_redemption_table" component={FillRedemptionTable} exact/>
                <Route path="/filling_murder_table" component={FillMurderTable} exact/>
                <Route path="/filling_abduction_table" component={FillAbductionTable} exact/>
                <Route path="/filling_conviction_log_table" component={FillConvictionLogTable} exact/>
                <Route path="/filling_experiment_alien_table" component={FillExperimentAlienTable} exact/>
                <Route path="/filling_excursion_human_table" component={FillExcursionHumanTable} exact/>

                <Route path="/request_q1" component={Q1Request} exact/>
                <Route path="/request_q2" component={Q2Request} exact/>
                <Route path="/request_q3" component={Q3Request} exact/>
                <Route path="/request_q4" component={Q4Request} exact/>
                <Route path="/request_q5" component={Q5Request} exact/>
                <Route path="/request_q6" component={Q6Request} exact/>
                <Route path="/request_q7" component={Q7Request} exact/>
                <Route path="/request_q8" component={Q8Request} exact/>
                <Route path="/request_q9" component={Q9Request} exact/>
                <Route path="/request_q10" component={Q10Request} exact/>
                <Route path="/request_q11" component={Q11Request} exact/>
                <Route path="/request_q12" component={Q12Request} exact/>

            </Switch>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
