function Cart({
  cartItems,
  setCartItems,
  isOpen,
  setIsOpen,
}) {
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];

    updatedCart[index].quantity += 1;

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }

    setCartItems(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];

    updatedCart.splice(index, 1);

    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-[100]">

      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-2xl font-bold">
            🛒 My Cart
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="p-5 overflow-y-auto h-[calc(100%-150px)]">

          {cartItems.length === 0 ? (
            <div className="text-center mt-20">

              <div className="text-6xl mb-4">
                🛒
              </div>

              <h3 className="text-xl font-bold">
                Your cart is empty
              </h3>

              <p className="text-gray-500 mt-2">
                Add some products to your cart
              </p>

            </div>
          ) : (
            <div className="space-y-4">

              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-3"
                >

                  <div className="flex gap-3">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">

                      <h3 className="font-bold">
                        {item.name}
                      </h3>

                      <p className="text-gray-600">
                        ${item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-2">

                        <button
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                          className="w-8 h-8 border rounded-lg font-bold"
                        >
                          -
                        </button>

                        <span className="font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(index)
                          }
                          className="w-8 h-8 border rounded-lg font-bold"
                        >
                          +
                        </button>

                      </div>

                    </div>

                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

        {/* Total */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-5">

            <div className="flex justify-between text-lg font-bold mb-4">

              <span>Total</span>

              <span>
                ${totalPrice}
              </span>

            </div>

            <button
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700"
            >
              Proceed to Checkout
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;