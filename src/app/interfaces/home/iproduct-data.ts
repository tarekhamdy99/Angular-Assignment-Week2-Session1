export interface IProductData {
  id: number;
  title: string;
  description: string;
  imageCover: string;
  price: number;
  quantity: number;
  images: string[];
  onSale: boolean;
}
