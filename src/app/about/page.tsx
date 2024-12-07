import { Separator } from "@radix-ui/react-separator"
import { CompanyValues } from "../component/about/company-values"
import { TeamSection } from "../component/about/team-section"

export default function AboutPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">About StyleHub</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Redefining fashion since 2020, StyleHub brings you the latest trends with
          a commitment to quality, sustainability, and customer satisfaction.
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 2021, StyleHub began with a simple mission: to make
              high-quality fashion accessible to everyone. What started as a small
              online boutique has grown into a global fashion destination.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to innovate and expand, bringing you the latest
              trends while maintaining our commitment to sustainability and ethical
              fashion practices.
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
              alt="StyleHub store"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
        <CompanyValues />
      </section>

      <Separator className="my-16" />

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
        <TeamSection />
      </section>

      {/* Stats Section */}
      <section className="rounded-lg bg-muted p-8">
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="mt-2 text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2 text-muted-foreground">Fashion Brands</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p className="mt-2 text-muted-foreground">Countries Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="mt-2 text-muted-foreground">Customer Support</p>
          </div>
        </div>
      </section>
    </div>
  )
}