import React from 'react';

export default ({match}) => (
    <div>
      <h1>{match.params.project} {match.params.id}</h1>
    </div>
);