// frontend/src/services/api.ts

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const api = {
  // Obtener todos los productos
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    return response.json();
  },

  // Obtener un producto por ID
  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching product: ${response.statusText}`);
    }
    return response.json();
  },

  // Construir URL completa de la imagen
  getImageUrl(imagePath: string): string {
    if (!imagePath) return "/placeholder.jpg";
    if (imagePath.startsWith("http")) return imagePath;
    return `${API_BASE_URL}${imagePath}`;
  }
};