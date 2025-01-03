import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

export type OrderItem = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: string;
  categoryId: {
    categoryName: string;
    _id: string;
  };
  createdAt: Date;
  updatedAt: Date;
  salePercent: number;
  quantity: number;
};

type Order = {
  orderItems: OrderItem[];
};

const CartContext = createContext<{
  order: Order;
  addOrderItem: (_newOrderItem: OrderItem) => void;
  removeFromCart: (_orderId: string) => void;
  clearCart: () => void;
  updateItemQuantity: (_orderId: string, _newQuantity: number) => void;
}>({
  order: { orderItems: [] },
  addOrderItem: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  updateItemQuantity: () => {},
});

const useOrder = () => useContext(CartContext);

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<Order>({ orderItems: [] });

  useEffect(() => {
    const orderedItems = localStorage.getItem("orderDetails");
    if (orderedItems) {
      try {
        setOrder(JSON.parse(orderedItems));
      } catch (e) {
        console.error("Failed to parse order items from localStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (order.orderItems.length > 0) {
      localStorage.setItem("orderDetails", JSON.stringify(order));
    } else {
      localStorage.removeItem("orderDetails");
    }
  }, [order]);

  const addOrderItem = (newOrderItem: OrderItem) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.orderItems.find(
        (order) => order._id === newOrderItem._id
      );

      if (existingItem) {
        return {
          ...prevOrder,
          orderItems: prevOrder.orderItems.map((order) =>
            order._id === newOrderItem._id
              ? { ...order, quantity: order.quantity + newOrderItem.quantity }
              : order
          ),
        };
      } else {
        return {
          ...prevOrder,
          orderItems: [
            ...prevOrder.orderItems,
            { ...newOrderItem, quantity: newOrderItem.quantity },
          ],
        };
      }
    });
  };

  const updateItemQuantity = (orderId: string, newQuantity: number) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.orderItems.find(
        (order) => order._id === orderId
      );

      if (existingItem) {
        const updatedItems = prevOrder.orderItems.map((item) =>
          item._id === orderId ? { ...item, quantity: newQuantity } : item
        );

        return {
          ...prevOrder,
          orderItems: updatedItems,
        };
      }

      return prevOrder;
    });
  };

  const removeFromCart = (orderId: string) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      orderItems: prevOrder.orderItems.filter((order) => order._id !== orderId),
    }));
  };

  const clearCart = () => {
    setOrder({ orderItems: [] });
  };

  return (
    <CartContext.Provider
      value={{
        order,
        addOrderItem,
        removeFromCart,
        clearCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useOrder, OrderProvider };
