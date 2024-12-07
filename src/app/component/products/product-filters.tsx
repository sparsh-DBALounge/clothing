"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger} from "../ui/dropdown-menu"
interface ProductFiltersProps {
  onSizeFilter: (sizes: string[]) => void
  onColorFilter: (colors: string[]) => void
  onSortChange: (sort: string) => void
}

export function ProductFilters({
  onSizeFilter,
  onColorFilter,
  onSortChange,
}: ProductFiltersProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const sizes = ["S", "M", "L", "XL"]
  const colors = ["White", "Black", "Navy", "Blue"]
  const sortOptions = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Newest", value: "newest" },
  ]

  const handleSizeChange = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size]
    setSelectedSizes(newSizes)
    onSizeFilter(newSizes)
  }

  const handleColorChange = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color]
    setSelectedColors(newColors)
    onColorFilter(newColors)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Size
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {sizes.map((size) => (
            <DropdownMenuCheckboxItem
              key={size}
              checked={selectedSizes.includes(size)}
              onCheckedChange={() => handleSizeChange(size)}
            >
              {size}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Color
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {colors.map((color) => (
            <DropdownMenuCheckboxItem
              key={color}
              checked={selectedColors.includes(color)}
              onCheckedChange={() => handleColorChange(color)}
            >
              <div className="flex items-center">
                <div
                  className="mr-2 h-4 w-4 rounded-full border"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
                {color}
              </div>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Sort
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {sortOptions.map((option) => (
            <DropdownMenuCheckboxItem
              key={option.value}
              onCheckedChange={() => onSortChange(option.value)}
            >
              {option.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}