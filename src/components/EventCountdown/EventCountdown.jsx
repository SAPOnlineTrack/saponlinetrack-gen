import React, { Component } from "react";

import Countdown from 'react-countdown';

import "./EventCountdown.css";

const CompletionMessage = () => <span>&#127752; We are live!!! &#127758;</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <CompletionMessage />;
    } else {
        // Render a countdown
        return <span>We are going live in {hours}:{minutes}:{seconds} </span>;
    }
};

class EventCountdown extends React.Component {

    render() {
        const { sessions } = this.props;

        return (
            <div className='event-countdown'>
                <Countdown date={Date.UTC(2020, 4, 30, 12, 0, 0)} renderer={renderer} />
            </div>
        );
    }
}

export default EventCountdown;
