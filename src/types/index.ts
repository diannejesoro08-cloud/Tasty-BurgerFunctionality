export interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItemProps extends MenuItemProps {
  quantity: number;
}
