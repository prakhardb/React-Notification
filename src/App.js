import React, { Component } from 'react';
import Data from './data'
import './App.css';
import base from './base';
import Notification  from 'react-web-notification';

class App extends Component {
  state ={
    message : {},
    load : 'no',
    title: '',
    ignore: true,
    options: {},
  }
  handlePermissionGranted(){
    console.log('Permission Granted');
    this.setState({
      ignore: false
    });
  }
  handlePermissionDenied(){
    console.log('Permission Denied');
    this.setState({
      ignore: true
    });
  }
  handleNotSupported(){
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag){
    console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag){
    console.log(e, 'Notification error tag:' + tag);
  }

  handleNotificationOnClose(e, tag){
    this.setState({
      ignore: true
    });
    console.log(e, 'Notification closed tag:' + tag);
  }

  handleNotificationOnShow(e, tag){
    console.log(e, 'Notification shown tag:' + tag);
  }

  handleButtonClick() {

    if(this.state.ignore) {
      return;
    }
      else {
        this.setState({ignore: false})
      }
  }
   componentDidMount = () => {
     this.ref = base.syncState(`message/attachment`, {
       context: this,
       state: 'message'
   });
   }
   Connect = (event) =>{
     console.log(event.target);
        this.setState({load : 'yes'});
        this.setState({options: {
          icon: 'https://praktice.ai/img/praktice_logo.png'
        } })
  }
  render() {
    const payload = (this.state.message.payload)
    console.log(payload)
    return (
      <div className="back">
        <header className="App-header">
        <div className='wrapper'>
        
        {this.state.load==='yes' ? <div className='back'><div className='wrapper'><div className='header2'><p>Praktice.ai assignment</p></div><Data data={this.state.message} /></div></div>
        : <div className='wrapper'>
          <div className='header'>
            <p>Praktice.ai Assignment</p>
          </div>
          <div className='back'/>
          
        </div>
        }
      </div>
        </header>
      <div className='button' onClick={this.Connect} name="yes">{this.state.load==='no' ?<p>Ready to rock!</p>: <p>Conversation on!</p>}</div>
      
       {this.state.load==='yes' ?<Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          title='Srinath sent you an attachment'
          options={this.state.options}
        /> : ' '
      }
      </div>
    );
  }
}


export default App;
