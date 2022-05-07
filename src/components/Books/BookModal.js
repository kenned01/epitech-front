import { Button, Form, Input, Modal } from 'antd';
import { TransformData } from '../../Providers/TransformProvider';

import React from 'react';

const BookModal = ({
    isVisisble, 
    toggleModal,
    data = {
        title: "",
        description: "",
        author: ""
    },
    callback = (values, rawData) => {}
}) => {

    const submitBook = (values) => {
        callback(
            TransformData(values),
            values
        )
    }

    return (
        <Modal visible={isVisisble} onOk={toggleModal} onCancel={toggleModal} footer={[]}>
            <Form
                onFinish={submitBook}
                initialValues={data}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{required: true, message: 'Please input the title'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{required: true, message: 'Please input the description'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Author"
                    name="author"
                    rules={[{required: true, message: 'please input the author'}]}
                >
                    <Input />
                </Form.Item>

                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form>
        </Modal>
    );
};

export default BookModal;