import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import travelForm from './travel/TravelForm';
import profForm from './prof/ProfForm';
import main from './main'

injectTapEventPlugin()
const dest = document.getElementById('container')
const reducer = combineReducers({
  form: reduxFormReducer,
  routing: routerReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

let render = () => {
  ReactDOM.render(
    
    <Provider store={store}>      
      <BrowserRouter>  
        <div>  
          <Switch>
            <Route exact path="/industry" component={profForm}/>
            <Route exact path="/grower" component={travelForm}/>
            <Route exact path="/" component={main}/>
          </Switch> 
        </div>        
      </BrowserRouter>
    </Provider>,
    dest    
  )
}

render()

