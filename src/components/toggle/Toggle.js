import React, {Component} from 'react'
import './Toggle.css'

class Toggle extends Component {

  constructor(props) {
    super(props)
    this.state = {value: 'ON'};
    this.handleClickEvent = this.handleClickEvent.bind(this)
  }

  handleClickEvent(e) {
    if (this.state.value === 'ON')
      this.setState({value: 'OFF'});
    else
      this.setState({value: 'ON'});
  }

  render() {
    return (
      <div className="Toggle-main" onClick={this.handleClickEvent}>{this.state.value}</div>
    )
  }
}

export default Toggle
