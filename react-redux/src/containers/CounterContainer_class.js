import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment();
    }
    handleDecrement = () => {
        this.props.decrement();
    }
    render() {
        const {number, color} = this.props;
        return (
            <Counter
            color={color}
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            value={number} />
        );
    }
}

//현재 상태를 props로 넣어준다.
const mapStateToProps = (state) => ({
    number: state.counter.number,
    color: state.counter.color
});

// update하는 함수를 props로 넣어준다.
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);