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
import AlienActions from "./components/alien_actions";
import HumanActions from "./components/human_actions";
import {FillAlienTable, FillAbductionTable, FillConvictionLogTable, FillExcursionHumanTable, FillExcursionTable,
  FillExperimentAlienTable, FillExperimentTable, FillHumanTable, FillMurderTable, FillRedemptionTable,
  FillSpaceshipTable, FillTransportationTable} from "./components/fill_tables";
import {Q1Request, Q2Request, Q3Request, Q4Request, Q5Request, Q6Request, Q7Request, Q8Request, Q9Request, Q10Request,
  Q11Request, Q12Request} from "./components/request_results";
import {AlienExperimentConduct, AlienHostExcursion, AlienHumanAbduct, AlienHumanTransport,
  HumanAlienKill, HumanSpaceshipEscape} from "./components/actions_results";
import {ShowAbduction, ShowAlien, ShowConviction_Log, ShowExcursion, ShowExcursion_Human, ShowExperiment,
  ShowExperiment_Alien, ShowHuman, ShowMurder, ShowRedemption, ShowSpaceship, ShowTransportation} from "./components/show_tables";

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <div>
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

                <Route path="/actions_alien" component={AlienActions} exact/>
                <Route path="/actions_human" component={HumanActions} exact/>

                <Route path="/alien_host_excursion" component={AlienHostExcursion} exact/>
                <Route path="/alien_abduct_human" component={AlienHumanAbduct} exact/>
                <Route path="/alien_conduct_experiment" component={AlienExperimentConduct} exact/>
                <Route path="/alien_transport_human" component={AlienHumanTransport} exact/>
                <Route path="/human_escape_spaceship" component={HumanSpaceshipEscape} exact/>
                <Route path="/human_kill_alien" component={HumanAlienKill} exact/>


                <Route path="/showing_alien_table" component={ShowAlien} exact/>
                <Route path="/showing_spaceship_table" component={ShowSpaceship} exact/>
                <Route path="/showing_excursion_table" component={ShowExcursion} exact/>
                <Route path="/showing_human_table" component={ShowHuman} exact/>
                <Route path="/showing_experiment_table" component={ShowExperiment} exact/>
                <Route path="/showing_transportation_table" component={ShowTransportation} exact/>
                <Route path="/showing_redemption_table" component={ShowRedemption} exact/>
                <Route path="/showing_murder_table" component={ShowMurder} exact/>
                <Route path="/showing_abduction_table" component={ShowAbduction} exact/>
                <Route path="/showing_conviction_log_table" component={ShowConviction_Log} exact/>
                <Route path="/showing_experiment_alien_table" component={ShowExperiment_Alien} exact/>
                <Route path="/showing_excursion_human_table" component={ShowExcursion_Human} exact/>

            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
