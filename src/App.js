import { ThemeProvider} from '@material-ui/core'
import theme from './Components/UI/theme'
import { Switch, Route} from 'react-router-dom'
import Navigation from './Components/UI/navigation'
import Footer from './Components/UI/footer'
import LandingPage from './Components/landingPage'
import StoriesPage from './Components/stories'
import Features from './Components/Features'
import Pricing from './Components/Pricing'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' render={() => <LandingPage />} />
        <Route exact path='/stories' render={() => <StoriesPage />} />
        <Route exact path='/features' render={() => <Features />} />
        <Route exact path='/pricing' render={() => <Pricing />} />
      </Switch>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
