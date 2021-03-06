import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/homepage/Home'
import Qualifications from './components/pages/qualifications/Qualifications'
import Footer from './components/pages/footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/qualifications' exact component={ Qualifications }/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
