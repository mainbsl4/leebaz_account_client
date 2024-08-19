"use client"
import React from 'react';
import { Table } from 'antd';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};



export default function MainTable({columns, data}) {
    
  return (
    <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
  />
  )
}
