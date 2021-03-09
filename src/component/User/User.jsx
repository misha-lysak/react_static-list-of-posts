import React from 'react';
import PropTypes from 'prop-types';
import { userType } from '../../types';

export const User = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>
      {`Street: ${user.address.street}`}
    </p>
    <p>
      {`City: ${user.address.city}`}
    </p>
    <p>
      {`Suite: ${user.address.suite}`}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.shape(userType),
};

User.defaultProps = {
  user: null,
};
