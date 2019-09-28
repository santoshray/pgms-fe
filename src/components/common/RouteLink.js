import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const RouteLink = (linkLabel,routeName)=> withRouter(({ history }) => (
  <Button variant="link" onClick={() => { history.push(routeName) }}>
    {linkLabel}
  </Button>
));

export default RouteLink;