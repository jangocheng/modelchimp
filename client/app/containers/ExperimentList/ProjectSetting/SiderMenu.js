import React from 'react';
import styled from 'styled-components';

import { Menu, Icon, Layout } from 'antd';
import { DETAILS_KEY, MEMBERS_KEY } from './constants';

class Sider extends React.Component {
  render() {
    return (
      <Layout.Sider width={200} style={{ background: '#F0F2F5' }}>
        <Menu
          className={this.props.className}
          mode="inline"
          defaultSelectedKeys={[DETAILS_KEY]}
          onClick={this.props.onClick}
        >
            <Menu.Item key={DETAILS_KEY}>Project Details</Menu.Item>
            <Menu.Item key={MEMBERS_KEY}>Members</Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

const StyledSider = styled(Sider)`
  &.ant-menu {
    background:;
    border: 1px solid grey;
    border-radius: 3px;
  }
`;

export default StyledSider;
