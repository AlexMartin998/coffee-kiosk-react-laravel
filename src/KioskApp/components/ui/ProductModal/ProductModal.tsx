import Modal from 'react-modal';

import { useUI } from '@/context/hooks/useUI';

interface ProductModalProps {}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ProductModal: React.FC<ProductModalProps> = () => {
  const { isProductModalOpen, closeProductModal } = useUI();

  const handleModalClick = () => {
    closeProductModal();
  };

  return (
    <Modal isOpen={isProductModalOpen} style={customStyles}>
      <h1>From Modal</h1>

      <button type="button" onClick={handleModalClick}>
        Close
      </button>
    </Modal>
  );
};

export default ProductModal;
