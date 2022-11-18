export function openCart() {
  return {
    type: "openCart",
  };
}
export function closeCart() {
  return {
    type: "closeCart",
  };
}
export function handleOrder(data) {
  return {
    type: "orderBy",
    payload: data,
  };
}
