import React from 'react';
import DropMenu from './dropmenu';
import TopBar from './topbar';


export default class Home extends React.Component{
render(){
  console.log("path" + this.props.routes[this.props.routes.length - 1]);

  return(
  <div>
    <TopBar />
  </div>
)
}
};
