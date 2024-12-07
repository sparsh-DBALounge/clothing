import { Button } from "./component/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full bg-[url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">New Season Arrivals</h1>
          <p className="mb-8 text-xl">Discover the latest trends in fashion</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative h-[400px] overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.name}
                href={`/product/${product.id}`}
                className="group rounded-lg bg-background p-4 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 aspect-square overflow-hidden rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 font-semibold">{product.name}</h3>
                <p className="text-muted-foreground">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "Women's Fashion",
    href: '/shop/women',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
  },
  {
    name: "Men's Fashion",
    href: '/shop/men',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2',
  },
  {
    name: "Kid's Fashion",
    href: '/shop/kids',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4',
  },
]

const featuredProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d',
  },
  {
    id: 3,
    name: 'Summer Dress',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
  },
  {
    id: 4,
    name: 'Casual Sneakers',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
  },
]