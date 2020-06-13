/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Header from 'components/Layout/Header';
import { connect } from 'react-redux';
import {
  Table, Row, Col, Card,
} from 'antd';
import { columns } from 'constants/table';
import { getUsers } from './actions';

const Home = (props) => {
  const { getUsers, users: { data: { users } } } = props;

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Header />
      <Row type="flex" justify="center">
        <Col sm={24} md={18}>
          <Card>
            <Table rowKey="id" dataSource={users} columns={columns} pagination={false} />
          </Card>
        </Col>
      </Row>
      ;
    </>
  );
};
function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, { getUsers })(Home);
