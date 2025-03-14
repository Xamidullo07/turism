import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Hotel, Landmark, MapIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1682686581362-796145f0e123?q=80&w=2940&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        />
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Discover Amazing Places</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Explore landmarks, find perfect hotels, and navigate through detailed cadastral information
          </p>
          <Link href="/landmarks">
            <Button size="lg" className="text-base md:text-lg px-6 md:px-8">
              Start Exploring
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-card/50 backdrop-blur transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <MapIcon className="h-10 md:h-12 w-10 md:w-12 mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold mb-3">Cadastral Information</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Access detailed land registry and property information with our comprehensive cadastral system.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <Landmark className="h-10 md:h-12 w-10 md:w-12 mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold mb-3">Notable Landmarks</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Discover historical sites, cultural attractions, and must-visit locations in the region.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur transform hover:scale-105 transition-transform duration-300 sm:col-span-2 md:col-span-1">
            <CardContent className="p-6">
              <Hotel className="h-10 md:h-12 w-10 md:w-12 mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold mb-3">Premium Hotels</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Find and book the best accommodations that suit your preferences and budget.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}