import React from 'react';

export default class Layout extends React.Component {

  render() {
    return (
      <div>
      	<h2>
      		Header
      	</h2>      	
      	{this.props.children}
      	<h2>
      		Footer
      	</h2>
      </div>
    );
  }
}
