import React from 'react';
import style from './dropmenu.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';


class DropMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: this.props.items != null ? this.props.items[0] : "New",
            values: this.props.items != null ? this.props.items : ["New", "Open", "In Progress", "Done"],
            hidden: true,
            flipped: "scale(1,-1)",
            project: this.props.project != null ? true : false
        }

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    // Updates the current category being displayed
    handleSelectionChange(project) {
        this.setState({ current: project });
        this.onClick();
    }

    onClick() {
        // Flip the arrow icon and toggle the list
        this.setState((prevState, props) => ({
            hidden: !(prevState.hidden)
        }))

        let scale = this.state.hidden ? "scale(-1,1)" : "scale(1,-1)";
        this.setState({ flipped: scale });

    }

    render() {

        //This renders the correct options that are still available
        let listItems = [];
        for (let i = 0; i < this.state.values.length; i++) {
            if (this.state.values[i] != this.state.current) {
                listItems.push(<ListItem key={i} onClick={this.handleSelectionChange} content={this.state.values[i]} />)
            }
        }

        return (
            <div>
                <div className={style["current"]} onClick={this.onClick}>
                    <div className={style["drop-icon"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" transform={this.state.flipped}>
                            <path d="M47.449,66.182L47.449,66.182c-0.663,0-1.299-0.264-1.768-0.732l-27.36-27.363c-0.977-0.977-0.977-2.56,0-3.535 c0.977-0.977,2.559-0.977,3.535,0l25.593,25.596l25.595-25.594c0.977-0.977,2.559-0.977,3.535,0s0.977,2.559,0,3.535L49.217,65.449 C48.748,65.918,48.112,66.182,47.449,66.182z"
                            />
                        </svg>
                    </div>
                    <h4>{this.state.current}</h4>
                </div>
                <List hidden={this.state.hidden}>
                    <ul className={style["options-list"]}>
                        {listItems}
                    </ul>
                </List>
            </div>
        )
    }
}

// Used to display the other options in the dropdown menu.
class List extends React.Component {
    render() {
        return (
            <div>
                {this.props.hidden ? null : <div className={style["toggle-base"]}>{this.props.children}</div>}
            </div>
        )
    }
}

// Individual item in dropdown menu
class ListItem extends React.Component {
    render() {
        return (
            <li onClick={() => this.props.onClick(this.props.content)}>{this.props.content}</li>
        )
    }
}

export default DropMenu;