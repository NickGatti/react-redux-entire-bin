import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'

class App extends Component {
  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  userStarredMessage = (message) => {
    message.starred = !message.starred
    this.setState( this.state.messages.concat(message) )
  }

  userSelectedMessage = (message) => {
    message.selected = !message.selected
    this.setState( this.state.messages.concat(message) )
  }

  userReadMessage = (message) => {
    message.read = true
    this.setState( this.state.messages.concat(message) )
  }

  selectedIndicator = () => {
    let amountSelected = this.state.messages.filter( message => {
      return message.selected
    } ).length

    let action  = ''

    if (amountSelected === this.state.messages.length) {
      action = '-check'
    } else if (amountSelected === 0) {
      action = ''
    } else {
      action = '-minus'
    }

    return action
  }

  selectedIndicatorFunc = () => {
    let amountSelected = this.state.messages.filter( message => {
      return message.selected
    } ).length
    
    if ( amountSelected === this.state.messages.length ) {
      this.setState({
        message: this.state.messages.map( message => {
          message.selected = false
          return message
        } )
      })
    } else {
      this.setState({
        message: this.state.messages.map( message => {
          message.selected = true
          return message
        } )
      } )
    }
  }

  markAsReadFunc = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    this.setState( this.state.messages.concat(selectedMessages.map( message => {
      message.read = true
      return message
    } ) ) )
  }

  markAsUnReadFunc = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    this.setState( this.state.messages.concat(selectedMessages.map( message => {
      message.read = false
      return message
    } ) ) )
  }

  disabledReadButton = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    let readStatusArray = selectedMessages.map( message => {
      return message.read ? true : false
    } )
    return readStatusArray.includes( true ) || readStatusArray.length === 0 ? 'disabled' : ''
  }

  disabledUnReadButton = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    let readStatusArray = selectedMessages.map( message => {
      return message.read ? true : false
    } )
    return readStatusArray.includes( false ) || readStatusArray.length === 0  ? 'disabled' : ''    
  }

  disabledDeleteMessageButton = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected )
    let readStatusArray = selectedMessages.map( message => {
      return message.selected ? true : false
    } )
    return readStatusArray.includes( false ) || readStatusArray.length === 0  ? 'disabled' : ''        
  }  

  disabledApplyLabelDropDown = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected ).length
    return selectedMessages === 0 ? 'disabled' : ''
  }

  disabledRemoveLabelDropDown = () => {
    let selectedMessages = this.state.messages.filter( message => message.selected ).length
    return selectedMessages === 0 ? 'disabled' : ''    
  }

  applyLabelAction = (label) => {
    if (label === 'Apply label') return
    let selectedMessages = this.state.messages.filter( message => message.selected )

    this.setState( this.state.messages.concat( selectedMessages.map( message => {
      if ( message.labels.includes( label ) ) return message
      message.labels.push(label)
      return message
    } ) ) )
  }

  removeLabelAction = (label) => {
    if (label === 'Remove label') return
    let selectedMessages = this.state.messages.filter( message => message.selected )

    this.setState( this.state.messages.concat( selectedMessages.map( message => {
      message.labels.splice(label, 1)
      return message
    } ) ) )
  }

  deleteMessage = () => {
    this.setState({
      messages: this.state.messages.filter( message => {
        return !message.selected
      } ).map( message => {
        message.selected = false
        return message
      } )
    })
  }

  render() {
    return (
      <div className="App">
        <Toolbar 
          messages={ this.state.messages }
          selectedIndicator={ this.selectedIndicator }
          selectedIndicatorFunc={ this.selectedIndicatorFunc }
          markAsReadFunc={ this.markAsReadFunc }
          markAsUnReadFunc={ this.markAsUnReadFunc }
          disabledReadButton={ this.disabledReadButton }
          disabledUnReadButton={ this.disabledUnReadButton }
          disabledDeleteMessageButton={ this.disabledDeleteMessageButton }
          disabledApplyLabelDropDown={ this.disabledApplyLabelDropDown }
          disabledRemoveLabelDropDown={ this.disabledRemoveLabelDropDown }
          applyLabelAction={ this.applyLabelAction }
          removeLabelAction={ this.removeLabelAction }
          deleteMessage={ this.deleteMessage }
        />
        <MessageList 
          messages={ this.state.messages }
          userStarredMessage={ this.userStarredMessage }
          userSelectedMessage={ this.userSelectedMessage }
          userReadMessage={ this.userReadMessage }
        />
      </div>
    );
  }
}

export default App;
