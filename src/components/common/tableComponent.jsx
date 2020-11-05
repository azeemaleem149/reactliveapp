import React from "react";
import { Table } from "antd";

// Table Components Start from here
const TableComponent = () => {
  let allValues = localStorage.getItem("values");
  let getValues = JSON.parse(allValues);
  let name = getValues.nickname;
  let email = getValues.email;
  let phone = getValues.phone;
  let password = getValues.password;

  // Table Column Data
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
      name,
      email,
      phone,
      password,
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
