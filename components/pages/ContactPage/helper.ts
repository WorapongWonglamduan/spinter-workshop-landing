import { useForm } from "react-hook-form";

// ประเภทข้อมูลสำหรับฟอร์มติดต่อ
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ประเภทข้อมูลสำหรับ field configuration
export interface FormFieldConfig {
  name: keyof ContactFormData;
  type: "text" | "email" | "tel" | "textarea";
  labelKey: string;
  placeholder?: string;
  required: boolean;
  validation?: {
    pattern?: RegExp;
    message?: string;
  };
  rows?: number;
  gridCol?: "full" | "half";
}

// JSON Configuration สำหรับ form fields
export const formFieldsConfig: FormFieldConfig[] = [
  {
    name: "firstName",
    type: "text",
    labelKey: "form.firstName",
    required: true,
    validation: {
      message: "form.validation.firstNameRequired",
    },
    gridCol: "half",
  },
  {
    name: "lastName",
    type: "text",
    labelKey: "form.lastName",
    required: true,
    validation: {
      message: "form.validation.lastNameRequired",
    },
    gridCol: "half",
  },
  {
    name: "email",
    type: "email",
    labelKey: "form.email",
    required: true,
    validation: {
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "form.validation.emailInvalid",
    },
    gridCol: "full",
  },
  {
    name: "phone",
    type: "tel",
    labelKey: "form.phone",
    required: true,
    validation: {
      message: "form.validation.phoneRequired",
    },
    gridCol: "full",
  },
  {
    name: "subject",
    type: "text",
    labelKey: "form.subject",
    required: true,
    validation: {
      message: "form.validation.subjectRequired",
    },
    gridCol: "full",
  },
  {
    name: "message",
    type: "textarea",
    labelKey: "form.message",
    required: true,
    validation: {
      message: "form.validation.messageRequired",
    },
    rows: 5,
    gridCol: "full",
  },
];

// hook สำหรับจัดการฟอร์มติดต่อด้วย React Hook Form
const useContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // ในสถานการณ์จริงจะส่งข้อมูลไปยัง API
    console.log("Form submitted:", data);
    alert("ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุด");
    // รีเซ็ตฟอร์ม
    reset();
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formFieldsConfig,
  };
};

export default function helper() {
  return {
    useContactForm,
  };
}
