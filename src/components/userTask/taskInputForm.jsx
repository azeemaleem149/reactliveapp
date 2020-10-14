import React from 'react';
import { Input,DatePicker,Select,Form, Button} from 'antd';
const { Option } = Select;




const TaskInputForm = (props) =>{
  const [form] = Form.useForm();

  // Getting All data from user input forms here 
      const onFinish=(values)=>{
      form.resetFields();
      let newValues=values;
      let previousData=JSON.parse(localStorage.getItem('previousData')) || [];
      const found=previousData.some(e=>e.heading===newValues.heading);
      if(!found){
      localStorage.setItem('previousData',JSON.stringify(previousData.concat(newValues)));
          if(!found){
            sendData(newValues);
          }}
      else return previousData;
      

      };  

      // Pass User Data to another component state 
      const sendData=(val)=>{
        props.sendData(val);
      }
      

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
            
                
                onFinish={onFinish} >
                    <Form.Item
                    name="heading"
                    rules={[
                        {
                        required: true,
                        message: 'Please Write Task Heding!',
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
                        message: 'Please select Date',
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
                        message: 'Whats Status of your Task',
                        },
                    ]}    
                    > 
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Status of Task"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} 
                        >
                            <Option value="Pending">Pending</Option>
                            <Option value="Done">Done</Option>
                            <Option value="Not Started">Not Started yet</Option>
                            
                      </Select>
                    </Form.Item>
    
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={props.action} onChange={props.sendData}>
                    Add Task
                    </Button>
                    
                    </Form.Item>
                    </Form>

          {/* Task Input Form End here  */}

        
        
        </div>
     );
                        }
 
export default TaskInputForm;