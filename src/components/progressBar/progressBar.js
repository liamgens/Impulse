import React from 'react';
import ProgressBarStyle from './progressBar.css';


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