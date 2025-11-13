import React, { useState } from "react";
import { Modal, Input, Form } from "antd";

const EditUserModal = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOk = () => {
    onSave(formData);
  };

  return (
    <Modal
      title="Edit User Details"
      open={true}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input name="name" value={formData.name} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" value={formData.email} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phone">
          <Input name="phone" value={formData.phone} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Website">
          <Input name="website" value={formData.website} onChange={handleChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
