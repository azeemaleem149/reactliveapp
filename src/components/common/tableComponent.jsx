import React from "react";
import Helper from "../../helper";
import { Table } from "antd";

// Table Components Start from here
const TableComponent = () => {
  const HelperData = Helper(1);
  let name = HelperData.nickname;
  let email = HelperData.email;
  let phone = HelperData.phone;
  let password = HelperData.password;

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
      password1: password,
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
