import React from 'react'
import mainWindowStyle from './mainWindow.css'

export default class ApplicationHeader extends React.Component {
    render() {
        return (
            <div className={mainWindowStyle.applicationHeader}>
                Header
            </div>
        )
    }
}