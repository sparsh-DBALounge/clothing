"use client"

import { useState } from "react"
import { mensProducts, Product } from "@/lib/products"
import { ProductCard } from "@/app/component/products/product-card"
import { ProductFilters } from "@/app/component/products/product-filters"

export default function MenPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mensProducts)

  const handleSizeFilter = (sizes: string[]) => {
    if (sizes.length === 0) {
      setFilteredProducts(mensProducts)
      return
    }
    
    const filtered = mensProducts.filter((product) =>
      sizes.some((size) => product.sizes.includes(size))
    )
    setFilteredProducts(filtered)
  }

  const handleColorFilter = (colors: string[]) => {
    if (colors.length === 0) {
      setFilteredProducts(mensProducts)
      return
    }
    
    const filtered = mensProducts.filter((product) =>
      colors.some((color) => product.colors.includes(color))
    )
    setFilteredProducts(filtered)
  }

  const handleSort = (sort: string) => {
    const sorted = [...filteredProducts]
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "newest":
        // In a real app, you'd sort by date
        sorted.reverse()
        break
    }
    setFilteredProducts(sorted)
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Men's Collection</h1>
        <ProductFilters
          onSizeFilter={handleSizeFilter}
          onColorFilter={handleColorFilter}
          onSortChange={handleSort}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}