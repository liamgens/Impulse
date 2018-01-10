import React from 'react';
import TopBar from './topbar';

export default ({match}) => (
    <div>
      <TopBar />
      <h1>{match.params.project} {match.params.id}</h1>
    </div>
);