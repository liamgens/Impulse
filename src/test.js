import React from 'react';
import TopBar from './topbar';
import Task from './task';
import { Bootstrap, Grid, Row, Col } from 'react-bootstrap';

export default () => (
  <div>
    <Row>
      <TopBar />
    </Row>
    <Row>
      <Col xs={6} md={4}>
        <Task />
      </Col>
    </Row>
  </div>
);