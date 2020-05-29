/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Header from 'components/Layout/Header';
import { connect } from 'react-redux';
import { getUsers } from './actions';

const Home = (props) => {
  // eslint-disable-next-line no-shadow
  const { getUsers } = props;
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Header />
  );
};
function mapStateToProps(state) {
  return {
    users: state,
  };
}

export default connect(mapStateToProps, { getUsers })(Home);
