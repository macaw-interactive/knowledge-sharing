import * as React from 'react';
import { Event } from './types/Event';

/**
 * Old way of fetching the data
 */

type CalendarProps = {
    events: []
};

class Calendar extends React.Component<CalendarProps> {
    render() {
        return (
            <div className="a-calendar">
                {this.props.events.map((event: Event, index: number) => (
                    <div className="a-calendar__event">{event.name}</div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        events: state.events
    };
};

export default connect(mapStateToProps)(Calendar);