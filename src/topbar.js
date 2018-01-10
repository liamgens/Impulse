import React from 'react';
import DropMenu from './dropmenu';
import './topbar.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

const projects =["Blog", "Impulse", "Lecture Buddy", "Asteroid Quest"];

export default class TopBar extends React.Component{
    render(){
        return(
            <div className="topbar-div">
                <Col xs={6} md={6}>
                    <DropMenu items={projects.sort()}/>
                </Col>
                <Col xs={6} md={6}>                
                    <DropMenu/>
                </Col>
            </div>
        )
    }
}
