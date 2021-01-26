import Start from './components/Start'
import Start2P from './components/Start2P'
import Results from './components/Results'
import Results1P from './components/Results1P'
import Quiz1P from './components/Quiz1P'
import Quiz from './components/Quiz'
import Thanks from './components/Thanks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// library.add(faTimesCircle)



function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path='/home' component={Start}></Route>
        <Route exact path='/quiz-1-p' component={Quiz1P}></Route>
        <Route exact path='/start-2-p' component={Start2P}></Route>
        <Route exact path='/quiz-2-p' component={Quiz}></Route>
        <Route exact path='/results-1-p' component={Results1P}></Route>
        <Route exact path='/results' component={Results}></Route>
        <Route exact path='/thanks' component={Thanks}></Route>
      </Router>
    </div>
  );
}

export default App;
