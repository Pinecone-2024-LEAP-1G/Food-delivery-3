import { createContext, useState, useEffect, useContext, ReactNode } from "react";

type OrderItem = {
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
}>({
  order: { orderItems: [] }, 
  addOrderItem: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

const useOrder = () => useContext(CartContext);

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<Order>({ orderItems: [] });

  useEffect(() => {
    const storedOrderItems = localStorage.getItem("orderDetails");
    if (storedOrderItems) {
      setOrder({ orderItems: JSON.parse(storedOrderItems) });
    }
  }, []);

  useEffect(() => {
    if (order.orderItems.length > 0) {
      localStorage.setItem("orderDetails", JSON.stringify(order.orderItems));
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
          orderItems: prevOrder.orderItems.map((order) => {
            if (order._id === newOrderItem._id) {
              return { ...order, quantity: order.quantity + 1 };
            }
            return order;
          }),
        };
      }
      return {
        ...prevOrder,
        orderItems: [...prevOrder.orderItems, { ...newOrderItem, quantity: 1 }],
      };
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
    <CartContext.Provider value={{ order, addOrderItem, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { useOrder, OrderProvider };
