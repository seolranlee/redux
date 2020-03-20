import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
import {bindActionCreators} from 'redux';


const CounterContainer = ({ color, number, increment, decrement }) => {
    return (
        <div>
            <Counter 
                color={color} 
                number={number}
                onIncrement={()=>increment()}
                onDecrement={()=>decrement()}
            />
        </div>
    );
};

// const mapStateToProps = ({ counter }) => ({
//     color: counter.color,
//     number: counter.number,
// });

// const mapDispacthToProps = dispatch => bindActionCreators(
// {
//     increment,
//     decrement
// }, 
//     dispatch
// );

export default connect(
    ({ counter }) => ({
        color: counter.color,
        number: counter.number,
    }),
    {
        increment,
        decrement,
    }
    )(CounterContainer); // 구독한다. HOC