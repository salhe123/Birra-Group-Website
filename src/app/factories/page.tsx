import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Factories - Birra Group's Premium Ethiopian Coffee Processing",
  description:
    "Discover Birra Group's state-of-the-art coffee factories in Ethiopia, producing premium coffee beans from Ethiopia's finest coffee-growing regions like Sidamo, Harrar, and Limu.",
  keywords: [
    "coffee factories Ethiopia",
    "Ethiopian coffee processing",
    "premium coffee factories",
    "coffee beans Ethiopia",
    "Sidamo coffee",
    "Harrar coffee",
    "Limu coffee",
    "Birra Group coffee factories",
    "Ethiopian coffee exports",
    "coffee manufacturing Ethiopia",
  ],
  openGraph: {
    title:
      "Coffee Factories - Birra Group's Premium Ethiopian Coffee Processing",
    description:
      "Explore Birra Group's coffee factories in Ethiopia, where we process premium coffee beans sourced from regions like Sidamo, Harrar, and Limu.",
    url: "https://birragroup.com/factories",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Birra Group Coffee Factories",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Coffee Factories - Birra Group's Premium Ethiopian Coffee Processing",
    description:
      "Learn about Birra Group's coffee factories in Ethiopia, processing premium coffee beans from regions like Sidamo, Harrar, and Limu.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/factories",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const coffeeTypes = [
  {
    name: "Harar Coffee",
    description:
      "Medium to light acidity, full body, and mocha flavor with an aftertaste.",
    image: "/factory1.jpg",
  },
  {
    name: "Lekempti Coffee",
    description:
      "Medium to pointed acidity, good mouthfeel, and fruity character.",
    image: "/factory2.jpg",
  },
  {
    name: "Jimmah Coffee",
    description: "Medium acidity, boldness, and a pleasant mouthfeel.",
    image: "/factory3.jpg",
  },
  {
    name: "Limu Coffee",
    description:
      "Medium to pointed acidity, full body, and a unique winey character.",
    image: "/factory4.jpg",
  },
];

export default function CoffeeFactoriesPage() {
  return (
    <div className="min-h-screen font-sans">
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Birra Coffee General Trading P.L.C
        </h1>
        <p className="text-xl text-text-muted">
          The Reliable and Committed Business Partner
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Company Overview</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg">
                Established in 2010, Birra Coffee General Trading P.L.C began
                its journey in the competitive world of coffee export trade. The
                company exports top-quality Highland Arabica Coffee from
                Ethiopia, including unwashed and washed varieties, to
                destinations such as the Middle East, Europe, Japan, and the
                USA. It is a proud member of the Ethiopian Coffee Exporters
                Association.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">
            Our Exportable Coffee Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeTypes.map((coffee, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg"
              >
                <CardHeader className="p-0">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{coffee.name}</CardTitle>
                  <p className="text-sm">{coffee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Expansion of Operations
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Beyond coffee exports, Birra Coffee General Trading P.L.C has
                expanded into various sectors:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Industrial Raw Materials</Badge>
                <Badge variant="secondary">Finished Goods</Badge>
                <Badge variant="secondary">Vehicles</Badge>
                <Badge variant="secondary">Real Estate Development</Badge>
                <Badge variant="secondary">Industrial Ventures</Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
