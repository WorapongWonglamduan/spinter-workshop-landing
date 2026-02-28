import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

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

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formFieldsConfig,
    isLoading,
    submitStatus,
    setSubmitStatus,
  };
};

export default function helper() {
  return {
    useContactForm,
  };
}
