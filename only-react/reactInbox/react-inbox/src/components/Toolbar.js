import React, { Component } from 'react'

class Toolbar extends Component {

render() {
    let unReadMessages = this.props.messages.filter( message => !message.read ).length

        return (
            <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                <span className="badge badge">{unReadMessages}</span>
                unread messages
                </p>

                <button className="btn btn-default">
                <i 
                    onClick={ () => this.props.selectedIndicatorFunc() }
                    className={`fa fa${ this.props.selectedIndicator() }-square-o`}
                ></i>
                </button>

                <button 
                    onClick={ () => this.props.markAsReadFunc() }
                    className="btn btn-default" 
                    disabled={`${ this.props.disabledReadButton() }`}
                >
                Mark As Read
                </button>

                <button 
                    onClick={ () => this.props.markAsUnReadFunc() }
                    className="btn btn-default" 
                    disabled={`${ this.props.disabledUnReadButton() }`}
                >
                Mark As Unread
                </button>

                <select 
                    className="form-control label-select" 
                    disabled={`${ this.props.disabledApplyLabelDropDown() }`}
                    onChange={ () => this.props.applyLabelAction( document.querySelectorAll('select')[0].value ) }
                >
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <select 
                    className="form-control label-select" 
                    disabled={`${ this.props.disabledRemoveLabelDropDown() }`}
                    onChange={ () => this.props.removeLabelAction( document.querySelectorAll('select')[1].value ) }
                >
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
                </select>

                <button 
                    className="btn btn-default" 
                    disabled={`${ this.props.disabledDeleteMessageButton() }`}
                >
                <i 
                    className="fa fa-trash-o"
                    onClick={ () => this.props.deleteMessage() }
                ></i>
                </button>
            </div>
            </div>
        )
    }
}

export default Toolbar