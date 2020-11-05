import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "antd";
import { taskData } from "../../myContext";
import Helper from "../../helper";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import "./userTask.scss";
import TaskInputForm from "./taskInputForm";

const deleteNotify = () => {
  toast.info("Task Deleted Successfully");
};

const UserTask = () => {
  // Data is consuming of Context store
  const comingData = useContext(taskData);

  useEffect(() => {
    const item = Helper(2);
    if (item) {
      setData1(item);
    }
  }, [comingData]); //context data is updating here before render the component

  // All states here
  const [visible, setVisible] = useState(false);
  const [data1, setData1] = useState([]);

  // Model Box Functions
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handler = () => {
    setVisible(false);
  };

  // Update state with new incoming Context Data

  const getData = () => {
    let tryValue = data1.slice();
    tryValue.push(comingData.provideValues);
    setData1(tryValue);
  };
  // Delete Task function
  const deleteFunction = (val) => {
    const filteredItems = data1.filter((item) => item.heading !== val);
    setData1(filteredItems);
    localStorage.setItem("previousData", JSON.stringify(filteredItems));
    deleteNotify();
  };
  return (
    <div>
      <div className="taskContainer">
        {data1.length > 0 && (
          <strong style={{ color: "#1890FF" }} className="taskCounter">
            Total Tasks={data1.length}
          </strong>
        )}
        <Button type="primary" onClick={showModal} className="taskButton">
          + Add Task
        </Button>
      </div>
      <div className="taskContainer1"></div>

      {data1.length <= 0 && <p className="noTaskTest">No Tasks Available</p>}

      <Modal
        title="Put Your Task"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <TaskInputForm action={handler} onLoad={getData} />
      </Modal>
      <Table striped bordered hover>
        <thead>
          {!data1.length <= 0 && (
            <tr>
              <th>Heading of Task</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          )}
        </thead>

        <tbody>
          {data1.map(function (item, key) {
            return (
              <tr key={key}>
                <td>{item.heading}</td>
                <td>{item.date.toString()}</td>
                <td>{item.status}</td>
                <td>
                  <Button danger onClick={() => deleteFunction(item.heading)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Table component End */}
    </div>
  );
};

export default UserTask;
