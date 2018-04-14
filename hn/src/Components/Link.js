import React from 'react';

class Link extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <div>
        <div>
          {link.description} ({link.url})
        </div>
      </div>
    )    
  }

  _voteForLink = async () => {

  }
}

export default Link;