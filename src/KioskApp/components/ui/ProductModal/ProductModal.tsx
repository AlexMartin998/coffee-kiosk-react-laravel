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
  const { setActiveProduct, activeProduct } = useKiosk();

  const handleCloseModal = () => {
    closeProductModal();
    setActiveProduct({} as IProduct);
  };

  return (
    <Modal isOpen={isProductModalOpen} style={customStyles}>
      <div className="md:flex gap-10">
        <div className="md:w-1/3">
          <img
            src={`/img/${activeProduct.image}.jpg`}
            alt={`${activeProduct.name} image`}
          />
        </div>

        <div className="md:w-2/3">
          <div className="flex justify-end">
            <button type="button" onClick={handleCloseModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
