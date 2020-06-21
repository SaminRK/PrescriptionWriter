import React from 'react';
import ReactDOM from 'react-dom';
import 'draft-js/dist/Draft.css';
import * as serviceWorker from './helper/serviceWorker';
import MyEditor from './components/MyEditor'
import InformationHeader from './components/InformationHeader';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <InformationHeader />
        <div className='columnContainer'>
          <div className='column'>
            <MyEditor />
          </div>
          <div className='column'>
            <MyEditor />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
