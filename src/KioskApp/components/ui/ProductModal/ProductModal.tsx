import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { ItemCounter } from '@/KioskApp/shared/components';
import { useCart, useKiosk } from '@/context';
import { useUI } from '@/context/hooks/useUI';
import { ICartProduct, IProduct } from '@/interfaces';
import { formattingMoney } from '@/shared/helpers';

interface ProductModalProps {}

interface PMState {
  productInCart: ICartProduct;
}

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
  const { addProductToCart } = useCart();

  const [tempCartProduct, setTempCartProduct] = useState<
    PMState['productInCart']
  >({} as ICartProduct);

  useEffect(() => {
    setTempCartProduct({
      id: activeProduct.id,
      image: activeProduct.image,
      price: activeProduct.price,
      quantity: 1,
      title: activeProduct.name,
      categoryId: activeProduct.category_id,
    });
  }, [activeProduct]);

  if (!isProductModalOpen) return <></>;

  const handleCloseModal = () => {
    closeProductModal();
    setActiveProduct({} as IProduct);
  };

  const handleUpdateQuantity = (updatedQuantity: number) => {
    setTempCartProduct(currProd => ({
      ...currProd,
      quantity: updatedQuantity,
    }));
  };

  const handleAddProductToOrder = () => {
    if (!tempCartProduct.id) return;

    addProductToCart({ ...tempCartProduct });
    closeProductModal();
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

          <h1 className="text-3xl font-bold mt-5">{activeProduct.name}</h1>
          <p className="mt-5 font-black text-5xl text-amber-500">
            {formattingMoney(activeProduct.price)}
          </p>

          <ItemCounter
            currentValue={tempCartProduct.quantity}
            maxValue={5}
            onUpdateQuantity={handleUpdateQuantity}
          />

          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded-none"
            onClick={handleAddProductToOrder}
          >
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
