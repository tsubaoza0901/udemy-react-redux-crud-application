import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { postEvent } from '../actions'; // 追加

class EventsNew extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    );
  }
}

// const mapDispatchToProps = { postEvents };

export default connect(null, null)(EventsNew);
