import { Heart, Globe, Leaf, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export function CompanyValues() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction in everything we do, ensuring the best shopping experience.",
    },
    {
      icon: Globe,
      title: "Global Fashion",
      description: "Bringing the latest international fashion trends to your doorstep.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to sustainable fashion and reducing environmental impact.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control to ensure premium products for our customers.",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {values.map((value) => (
        <Card key={value.title} className="text-center">
          <CardHeader>
            <div className="mb-4 flex justify-center">
              <value.icon className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-xl">{value.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{value.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}