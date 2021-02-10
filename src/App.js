import { ThemeProvider} from '@material-ui/core'
import theme from './Components/UI/theme'
import { Switch, Route} from 'react-router-dom'
import Navigation from './Components/UI/navigation'
import Footer from './Components/UI/footer'
import LandingPage from './Components/landingPage'
import './App.css';
import StoriesPage from './Components/stories'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' render={() => <LandingPage />} />
        <Route exact path='/stories' render={() => <StoriesPage />} />
      </Switch>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
