import React from 'react';

const ResultBox = (props) => {
    return (
        <div className="result-body">
            {props.children}
        </div>
    )
}

const Handle = (props) => {
    return (
        <div className="handle">
            {props.handle}
        </div>
    )
}

const Name = (props) => {
    return (
        <div className="name">
            {props.name}
        </div>
    )
}

const Result = (props) => {
    return (
        <div className="message">
            <br />
            {props.result}
        </div>
    )
}

const ResultBody = (props) => {
    return (
        <ResultBox>
            <div className="inner-body">
                <div className="body">
                    <div className="inner-body">
                        <Name name={props.name} />
                        <Handle handle={props.handle} />
                    </div>
                    <Result result={props.result} />
                </div>
            </div>
        </ResultBox>
    )
}

export { ResultBody }