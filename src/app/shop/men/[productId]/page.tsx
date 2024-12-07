"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { mensProducts } from "@/lib/products"
import { Button } from "@/app/component/ui/button"
import { Select, SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/app/component/ui/select"

export default function ProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const product = mensProducts.find((p) => p.id === params.productId)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-xl font-semibold">${product.price}</p>
          <p className="mt-4 text-muted-foreground">{product.description}</p>

          <div className="mt-8 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <Select onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      <div className="flex items-center">
                        <div
                          className="mr-2 h-4 w-4 rounded-full border"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                        {color}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="mt-8 w-full"
              disabled={!selectedSize || !selectedColor || !product.inStock}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}