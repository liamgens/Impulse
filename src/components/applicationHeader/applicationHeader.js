import React from 'react'
import mainWindowStyle from '../app/app.css'

export default class ApplicationHeader extends React.Component {
    render() {
        return (
            <div className={mainWindowStyle.applicationHeader}>
                Header
            </div>
        )
    }
}