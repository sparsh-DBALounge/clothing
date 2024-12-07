export type Product = {
    id: string
    name: string
    price: number
    category: string
    image: string
    description: string
    sizes: string[]
    colors: string[]
    inStock: boolean
  }
  
  export const mensProducts: Product[] = [
    {
      id: "mens-classic-tee",
      name: "Classic Fit Cotton T-Shirt",
      price: 29.99,
      category: "men",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      description: "Premium cotton t-shirt with a comfortable classic fit.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Navy"],
      inStock: true,
    },
    {
      id: "mens-denim-jacket",
      name: "Vintage Denim Jacket",
      price: 89.99,
      category: "men",
      image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d",
      description: "Classic denim jacket with a vintage wash and comfortable fit.",
      sizes: ["M", "L", "XL"],
      colors: ["Light Blue", "Dark Blue"],
      inStock: true,
    },
    {
      id: "mens-chino-pants",
      name: "Slim Fit Chino Pants",
      price: 59.99,
      category: "men",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
      description: "Versatile chino pants perfect for any casual occasion.",
      sizes: ["30", "32", "34", "36"],
      colors: ["Khaki", "Navy", "Olive"],
      inStock: true,
    },
    {
      id: "mens-oxford-shirt",
      name: "Classic Oxford Shirt",
      price: 49.99,
      category: "men",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      description: "Timeless Oxford shirt made from premium cotton.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Blue", "Pink"],
      inStock: true,
    },
  ]