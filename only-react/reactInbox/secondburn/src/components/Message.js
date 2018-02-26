import React from 'react'

const Message = ({message, funcs}) => {
    let outputLbls = funcs.outputLabels(message)
    let outputRead = funcs.outputRead(message)
    let outputChecked = funcs.outputChecked(message)
    let outputSelected = funcs.outputSelected(message)

    return (
        <div 
            className={`row message ${outputRead} ${outputSelected}`}
        >
        <div 
            className="col-xs-1"
        >
            <div 
                className="row"
            >
            <div 
                className="col-xs-2"
            >
                <input 
                    onChange={ () => funcs.selectMessageFunc() }
                    type="checkbox" 
                    checked={outputChecked}
                />
            </div>
            <div 
                className="col-xs-2"
            >
                <i 
                    onClick={ () => funcs.starMessageFunc() }
                    className="star fa fa-star"
                ></i>
            </div>
            </div>
        </div>
        <div 
            onClick={ () => funcs.readMessageFunc() }
            className="col-xs-11"
        >
            {outputLbls}
            <a href="#">
            {message.subject}
            </a>
        </div>
        </div>
    )
}

export default Message