import React, { useEffect, useState } from "react";
import { ConfigProvider, Modal, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import img from "../../../assets/images/leaders/Avatars.png";

const FormModal = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(true); 

  const addFile = async (userData) => {
    try {
      const res = await request.post("api/base/file/upload", userData);
      console.log('userData', userData);
    } catch (err) {
      console.error(err); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    addFile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleFormSubmit = () => {
    console.log("Form submitted!");
    onClose();
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#030712", 
          colorPrimaryHover: "#000", 
        },
      }}
    >
      <Modal
        title="Become a Leader"
        open={visible}
        onCancel={onClose}
        footer={null}
        centered
        bodyStyle={{ padding: "12px" }}
        className="rounded-lg h-[90vh]"
      >
        <div className="text-center">
          <div className="h-12 mx-auto mb-2 flex items-center justify-center">
            <img
              src={img}
              alt="Avatar"
              className="rounded-full"
            />
          </div>
          <h2 className="text-xl font-bold">Become a Leader</h2>
          <p className="text-gray-500 mb-6">
            Apply now to join our leaders' community and make an impact!
          </p>
        </div>

        <form className="space-y-4">
          <Input placeholder="First name" className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none" />
          <Input placeholder="Last name" className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none" />
          <Input placeholder="Phone number" className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none" />
          <Input.TextArea
            placeholder="Cover letter"
            className="w-full rounded-lg py-3 bg-[#F3F3F7] outline-none"
            rows={4}
          />

          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={() => false}
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
            onClick={handleFormSubmit}
          >
            Apply Now
          </Button>
        </form>
      </Modal>
    </ConfigProvider>
  );
};

export default FormModal;


