import { Card, CardContent } from "../ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {team.map((member) => (
        <Card key={member.name} className="overflow-hidden">
          <div className="aspect-square">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </div>
          <CardContent className="p-6 text-center">
            <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{member.role}</p>
            <div className="flex justify-center space-x-4">
              <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={member.social.facebook} className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}