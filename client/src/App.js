
import './App.css';
import Login from './components/LogIn';
import {useState,useEffect} from 'react';
import Navigation from './components/Navigation';
import DietDetail from './components/DietDetail';
import { Route ,Switch } from 'react-router-dom';
import WorkoutDetails from './components/WorkoutDetails';
import Home from './components/Home';
import EditDietForm from './components/EditDietForm';
import EditWorkoutForm from './components/EditWorkoutForm';
import ChampionCard from './components/ChampionsCard';
import AddChampion from './components/AddChampion';
import Calculator from './components/Calculator';
import PlansWorkout from './components/PlansWorkout';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((r) => {
          setIsAuthenticated(true);
          setUser(r);
        });
      }
    });
    

  },[]);
  

  // Reroute user to <Login /> Component if not authenticated
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  /*we send setisauthenticated to the login to change the status so we take the decession which part is gonna render*/ 
  return (
    <>
    <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
    <Switch>
    <Route exact path="/">
      <Home name={user.name} user={user} />
    </Route>
    <Route exact path="/diets">
      <DietDetail diets={user.diets} />
    </Route>
    <Route exact path="/diets/:id/edit">
      <EditDietForm diets={user.diets}/>
    </Route>
    <Route exact path="/workouts/:id/edit">
      <EditWorkoutForm workouts={user.workouts}/>
    </Route>
    <Route exact path="/workouts">
      <WorkoutDetails workouts={user.workouts} />
    </Route>
    <Route exact path="/champions">
      <ChampionCard/>
    </Route>
    <Route exact path="/champions/new">
      <AddChampion/>
    </Route>
    <Route exact path="/calculator">
      <Calculator/>
    </Route>
    <Route exact path="/plansworkout">
    <PlansWorkout/>
    </Route>
    </Switch>
    </>
  );
}

export default App;
