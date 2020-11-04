import React, { useContext } from "react";
import secretContext from "../../myContext";
import { Table } from "antd";

// Table Components Start from here
const TableComponent = () => {
  const values = useContext(secretContext);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Password",
      dataIndex: "password",
    },
  ];

  // Fething Data From State
  let data = [
    {
      key: "1",
      name: values.nickname,
      email: values.email,
      phone: values.phone,
      password1: values.password,
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} size="small" />
    </div>
  );
};

export default TableComponent;

// Table Components End here
