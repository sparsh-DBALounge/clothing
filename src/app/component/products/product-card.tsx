import Link from "next/link"
import { Product } from "@/lib/products"
import { Card,CardContent,CardFooter } from "../ui/card"
import { Badge } from "../ui/badge"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/men/${product.id}`}>
      <Card className="group overflow-hidden">
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!product.inStock && (
            <Badge variant="destructive" className="absolute right-2 top-2">
              Out of Stock
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.sizes.join(" · ")}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <span className="font-semibold">${product.price}</span>
            <div className="flex gap-1">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="h-3 w-3 rounded-full border"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}