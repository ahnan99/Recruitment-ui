import React from 'react'
import { DatePicker, Modal, Form, Input, Radio } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';
const JobModal = ({ onCancel, visible, submit, confirmLoading, editingItem }) => {
    const [form] = Form.useForm();
    editingItem ?
        form.setFieldsValue({ ...editingItem, dateEnd: editingItem ? moment(editingItem.dateEnd, dateFormat) : null, dateStart: editingItem ? moment(editingItem.dateStart, dateFormat) : null }) :
        form.resetFields()
    return (

        <Modal
            visible={visible}
            title="工作"
            okText="確定"
            cancelText="取消"
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            destroyOnClose
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        submit(values, editingItem);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item
                    name="item"
                    label="单位名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入单位名称',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="detail"
                    label="请输入职位名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入技能名称',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="dateStart"
                    label="起始日期"
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item name="dateEnd" label="截止日期">
                    <DatePicker />
                </Form.Item>
            </Form>
        </Modal >

    );
}
export default JobModal