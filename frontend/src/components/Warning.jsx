import React from 'react';
import { Alert } from 'react-bootstrap';

function Warning({ error }) {
  return <Alert variant="danger">{error}</Alert>;
}

export default Warning;
