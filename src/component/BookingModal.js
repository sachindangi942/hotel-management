"use client";

import { Modal, Form, Input, DatePicker, Button } from "antd";
import dayjs from "dayjs";

export default function BookingModal({ room, onClose, onConfirm }) {
  const [form] = Form.useForm();

  if (!room) return null;

  const handleFinish = (values) => {
    onConfirm({
      roomId: room.id,
      guestName: values.name,
      phone: values.phone,
      checkIn: values.checkIn.format("YYYY-MM-DD"),
      checkOut: values.checkOut.format("YYYY-MM-DD"),
    });

    form.resetFields();
  };

  return (
    <Modal
      open={!!room}
      onCancel={onClose}
      footer={null}
      title={`Booking - Room ${room.id}`}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          label="Guest Name"
          name="name"
          rules={[{ required: true, message: "Please enter guest name" }]}
        >
          <Input placeholder="Enter guest name" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[{ required: true, message: "Please enter phone number" }]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>

        <Form.Item
          label="Check-In Date"
          name="checkIn"
          rules={[{ required: true, message: "Select check-in date" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Check-Out Date"
          name="checkOut"
          rules={[{ required: true, message: "Select check-out date" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Confirm Booking
        </Button>
      </Form>
    </Modal>
  );
}
