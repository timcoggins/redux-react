// LightContainer.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    light: state
});

const mapDispatchToProps = dispatch => ({
    onSwitch: () => dispatch({ type: "SWITCH" })
});

const LightComponent = ({ light, onSwitch }) => (
    <div>
        <p>{light}</p>
        <button onClick={onSwitch}>switch</button>
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LightComponent);