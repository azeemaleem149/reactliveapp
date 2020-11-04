import React from "react";
import { Input, DatePicker, Select, Form, Button } from "antd";
import { Helper2 } from "../../helper";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const { Option } = Select;

// React Toastify Error
const error = () => {
  toast.error("Choose another Name");
};
const nameHeading = () => {
  toast.success("Your Task Added Successfully");
};

const TaskInputForm = (props) => {
  const [form] = Form.useForm();

  // Getting All data from user input forms here
  const onFinish = (values) => {
    form.resetFields();
    let newValues = values;
    const helperData = Helper2();
    let previousData = helperData || [];
    const found = previousData.some((e) => e.heading === newValues.heading);
    if (!found) {
      localStorage.setItem(
        "previousData",
        JSON.stringify(previousData.concat(newValues))
      );
      if (!found) {
        nameHeading();
        dispatchData({ type: "getValues", payload: newValues });
      }
    } else return error();
  };

  const dispatchData = useDispatch();

  return (
    <div>
      {/* Task Input Form Start here  */}
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="heading"
          rules={[
            {
              required: true,
              message: "Please Write Task Heding!",
            },
          ]}
        >
          <Input placeholder="Task Heading" />
        </Form.Item>
        <Form.Item
          name="date"
          rules={[
            {
              required: true,
              message: "Please select Date",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="status"
          rules={[
            {
              required: true,
              message: "Whats Status of your Task",
            },
          ]}
        >
          <Select
            style={{ width: 200 }}
            placeholder="Status of Task"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Pending">Pending</Option>
            <Option value="Done">Done</Option>
            <Option value="Not Started">Not Started yet</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={props.action}
          >
            Add Task
          </Button>
        </Form.Item>
      </Form>
      {/* Task Input Form End here  */}
    </div>
  );
};

export default TaskInputForm;
