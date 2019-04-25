import React, {Component} from 'react';
import TimerForm from 'TimerForm';
import Timer from 'Timer';

class EditableTimer extends Component{
    render() {
        if(this.props.editFormOpen) {
            return (
                <TimerForm>
                    title={this.props.title}
                    project={this.props.project}
                </TimerForm>
            );
        } else {
            return (
                <Timer>
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                </Timer>
            )
        }
    }
}


export default EditableTimer;
