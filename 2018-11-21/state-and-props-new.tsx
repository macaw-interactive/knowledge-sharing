import * as React from 'react';
import { Omit } from './types/omit';
import { Event } from './types/Event';

/**
 * New way of fetching the data
 */
type WithEventsProps = {
    events: []
};

function withEvents<T extends WithEventsProps>(WrappedComponent: React.ComponentType<T>): React.ComponentType<Omit<T, keyof WithEventsProps>> {
    type WithEventsAllProps = WithEventsProps & LoadEvents & T;

    const mapStateToProps = (state: RootState): WithEventsProps => {
        return { events: state.events };
    };

    const mapDispatchToProps = (dispatch: Dispatch<Action>): { loadEvents: LoadEventsFunc } => {
        return {
            loadEvents: () => dispatch(createLoadEventsAction())
        };
    };

    class WithEvents extends React.Component<WithEventsAllProps> {
        public componentDidMount(): void {
            if (!this.props.events.data && !this.props.events.loading) {
                this.actions.loadEvents();
            }
        }

        public render(): JSX.Element { 
            return (
                <WrappedComponent {...this.props} />
            );
        }

        private get actions(): Readonly<LoadEvents> {
            return this.props;
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithEvents);
}





/** Implementation */
type CalendarProps = {};
type CalendarAllProps = CalendarProps & WithEventsProps;

class Calendar extends React.Component<CalendarAllProps> {
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

export default withEvents(Calendar);