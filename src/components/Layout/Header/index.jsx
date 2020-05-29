import React from 'react';
import { PageHeader } from 'antd';

const style = {
  sitePageHeader: {
    border: '1px solid rgb(235, 237, 240)',

  },
};
export default () => (
  <PageHeader
    className={style.sitePageHeader}
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
);
