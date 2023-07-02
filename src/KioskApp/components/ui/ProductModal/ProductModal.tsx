import Modal from 'react-modal';

import { useKiosk } from '@/context';
import { useUI } from '@/context/hooks/useUI';
import { IProduct } from '@/interfaces';

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
  const { setActiveProduct } = useKiosk();

  const handleCloseModal = () => {
    closeProductModal();
    setActiveProduct({} as IProduct);
  };

  return (
    <Modal isOpen={isProductModalOpen} style={customStyles}>
      <h1>From Modal</h1>

      <button type="button" onClick={handleCloseModal}>
        Close
      </button>
    </Modal>
  );
};

export default ProductModal;
