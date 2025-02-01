import React from "react";
import "./FooterModal.css";

interface FooterModalProps {
  isOpen: boolean;
  title: string;
  content: string | React.ReactNode;
  onClose: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="footer-modal-overlay">
      <div className="footer-modal-content">
        <div className="footer-modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="footer-modal-body">{content}</div>
      </div>
    </div>
  );
};

export default FooterModal;
