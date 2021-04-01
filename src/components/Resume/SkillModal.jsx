import React from 'react'
import { Button, Modal, Form, Input, Radio, Select } from 'antd';


const SkillModal = ({ onCancel, visible, submit, confirmLoading, editingItem, resume }) => {
    const [form] = Form.useForm();
    editingItem ? form.setFieldsValue(editingItem) : form.resetFields()
    return (

        <Modal
            visible={visible}
            title="技能"
            okText="确定"
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
                    label="技能名称"
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
                    name="detail"
                    label="熟练程度"
                    rules={[
                        {
                            required: true,
                            message: '请输入技能名称',
                        },
                    ]}
                >
                    <Select>
                        {resume.skillLevel ? resume.skillLevel.map(level => (
                            <Select.Option key={level.ID} value={level.ID}>{level.item}</Select.Option>
                        )) : null}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="years"
                    label="从事年限"
                >
                    <Input />
                </Form.Item>
                <Form.Item name="memo" label="说明">
                    <Input type="textarea" />
                </Form.Item>
            </Form>
        </Modal >

    );
}
export default SkillModal