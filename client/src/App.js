import React  from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from 'containers/Login';
import Chat from 'containers/Chat';
import WebSocketConnector from 'containers/WebSocketConnector';
import * as urls from 'constants/urls';


class App extends React.Component {

  render() {
    return (
      <WebSocketConnector>
        <BrowserRouter>
          <Switch>
            <Route path={urls.chat} exact component={Chat}/>
            <Route path={urls.login} exact component={Login}/>
            <Redirect to={urls.chat} />
          </Switch>
        </BrowserRouter>
      </WebSocketConnector>
    );
  }
}

export default App;
