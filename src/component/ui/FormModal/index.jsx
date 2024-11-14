import React, { useState } from 'react';
import { Modal, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        Apply Now
      </Button>
      <Modal
        title=""
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        centered
        bodyStyle={{ padding: '24px' }}
        className="rounded-xl"
      >
        <div className="text-center">
          <div className="rounded-full bg-gray-100 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            {/* Replace with an avatar image if needed */}
            <img src="https://via.placeholder.com/64" alt="Avatar" className="rounded-full" />
          </div>
          <h2 className="text-xl font-bold">Become a Leader</h2>
          <p className="text-gray-500 mb-6">
            Apply now to join our leaders' community and make an impact!
          </p>
        </div>

        <form className="space-y-4">
          <Input placeholder="First name" className="w-full rounded-md" />
          <Input placeholder="Last name" className="w-full rounded-md" />
          <Input placeholder="Phone number" className="w-full rounded-md" />
          <Input.TextArea placeholder="Cover letter" className="w-full rounded-md" rows={4} />

          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={() => false} // Prevent automatic upload
            className="w-full"
          >
            <Button icon={<UploadOutlined />} className="w-full">
              CV upload or drag and drop (PDF max. 15 MB)
            </Button>
          </Upload>

          <Button type="primary" className="w-full mt-4" onClick={handleCloseModal}>
            Apply Now
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default FormModal;
