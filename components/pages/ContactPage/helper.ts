import { useState, ChangeEvent, FormEvent } from 'react';

// ประเภทข้อมูลสำหรับฟอร์มติดต่อ
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// hook สำหรับจัดการฟอร์มติดต่อ
const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // ในสถานการณ์จริงจะส่งข้อมูลไปยัง API
    console.log('Form submitted:', formData);
    alert('ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด');
    // รีเซ็ตฟอร์ม
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
};

export default function helper() {
  return {
    useContactForm
  };
}
