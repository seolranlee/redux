import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';

class PaletteContainer extends Component {
    handleSelect = color => {
        this.props.chageColor(color);
    }
    render() {
        const {color} = this.props;
        return (
            <Palette 
                onSelect={this.handleSelect} 
                selected={color} 
            />
        );
    }
}

//현재 상태를 props로 넣어준다.
const mapStateToProps = (state) => ({
    color: state.counter.color
});

// update하는 함수를 props로 넣어준다.
const mapDispatchToProps = dispatch => ({
    chageColor: color => dispatch(changeColor(color))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteContainer);