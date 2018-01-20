import React from 'react';


export default class ProgressBar extends React.Component {
    render() {
        return (
            <div className={ProgressBarStyle.background}>
                <div className={ProgressBarStyle.foreground} style={{ width: this.props.percentage }}>
                </div>
            </div>
        )
    }
}