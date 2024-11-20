import React, { useState } from "react";
import { ConfigProvider, Modal, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import request from "../../../services/api";
import img from "../../../assets/images/leaders/Avatars.png";

const FormModal = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    coverLatter: "",
  });

  const handleFileUpload = async (file) => {
    if (!file.type.includes("pdf") || file.size > 15 * 1024 * 1024) {
      toast.error(
        file.size > 15 * 1024 * 1024
          ? "File size exceeds 15 MB!"
          : "Only PDF files are allowed!",
      );
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      const response = await request.post("api/base/file/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const uploadedFileUrl = response?.data?.data?.fileUrl;
      if (uploadedFileUrl) {
        setFileUrl(uploadedFileUrl);
      }
    } catch (err) {
      console.error("File upload error:", err);
      toast.error("Failed to upload file.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!fileUrl) {
      toast.error("Please upload a file before submitting!");
      return;
    }

    try {
      const finalData = {
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          coverLatter: formData.coverLatter,
          phoneNumber: formData.phoneNumber,
          cvUrl: fileUrl,
        },
      };
      
      await request.post("api/admin/call-request", finalData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Application submitted successfully!");
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (info) => handleFileUpload(info.file);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#030712",
          colorPrimaryHover: "#000",
        },
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <Modal
        title="Become a Leader"
        open={visible}
        onCancel={onClose}
        footer={null}
        centered
        className="rounded-lg h-[90vh]"
      >
        <div className="text-center">
          <div className="h-12 mx-auto mb-2 flex items-center justify-center">
            <img src={img} alt="Avatar" className="rounded-full" />
          </div>
          <h2 className="text-xl font-bold">Become a Leader</h2>
          <p className="text-gray-500 mb-6">
            Apply now to join our leaders' community and make an impact!
          </p>
        </div>

        <form className="space-y-4">
          <Input
            placeholder="First name"
            name="firstName"
            onChange={handleFormChange}
            className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none"
          />
          <Input
            placeholder="Last name"
            name="lastName"
            onChange={handleFormChange}
            className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none"
          />
          <Input
            placeholder="Phone number"
            name="phoneNumber"
            onChange={handleFormChange}
            className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none"
          />
          <Input.TextArea
            placeholder="Cover letter"
            name="coverLatter"
            onChange={handleFormChange}
            className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none"
            rows={4}
          />

          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={(file) => {
              handleFileChange({ file });
              return false;
            }}
            className="w-full mx-auto block text-center"
          >
            <div className="text-center mx-auto py-3">
              <Button icon={<UploadOutlined />} className="w-full">
                Upload
              </Button>
              <p className="w-2/3 mx-auto">
                CV upload or drag and drop (PDF max. 15 MB)
              </p>
            </div>
          </Upload>

          <Button
            type="primary"
            className="w-full bg-[#030712] p-6"
            loading={loading}
            onClick={handleSubmit}
          >
            Apply Now
          </Button>
        </form>
      </Modal>
    </ConfigProvider>
  );
};

export default FormModal;
