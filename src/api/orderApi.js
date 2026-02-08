import api from "./axios";

export const checkout = async (orderData) => {
  const res = await api.post("/api/orders/checkout", orderData);
  return res.data;
};
