import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Add Results</button>
                <ul>
                    {this.props.results.map(res => (
                        <li key={res.id} onClick={() => this.props.onDeleteResults(res.id)}>{res.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.storeResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionTypes.increment()),
        onDecrementCounter: () => dispatch(actionTypes.decrement()),
        onAddCounter: () => dispatch(actionTypes.add(5)),
        onSubtractCounter: () => dispatch(actionTypes.subtract(5)),
        onStoreResults: (result) => dispatch(actionTypes.storeResult(result)),
        onDeleteResults: (id) => dispatch(actionTypes.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);