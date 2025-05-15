import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CoffeeHero() {
  return (
    <div className="relative bg-[#330605] min-h-[80vh] px-4 py-16 md:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c4-8 2-16-4-16s-12 8-8 16 8 8 12 0zm24 24c4-8 2-16-4-16s-12 8-8 16 8 8 12 0zm-48 0c4-8 2-16-4-16s-12 8-8 16 8 8 12 0z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className=" text-4xl font-semibold mb-4 text-white">
            Birra Coffee Exporter in Ethiopia
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="h-0.5 w-12 bg-orange-500"></div>
            <div className="text-orange-500">◆</div>
            <div className="h-0.5 w-12 bg-orange-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="mx-auto">
            <div className="relative rounded-xl overflow-hidden w-80 h-80 border-4 border-white/20">
              <Image
                src="/logo.jpg"
                fill
                alt="Various coffee beans from light to dark roast"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-white space-y-6">
            <h2 className="text-2xl font-bold">
              Are you in search of a reliable coffee exporter from Ethiopia?
            </h2>

            <div className="space-y-3">
              <p className="leading-relaxed">
                Welcome to Birra Coffee General Trading P.L.C, your trusted
                partner in delivering premium coffee to the world. Since our
                establishment in 2010, we have been at the forefront of sourcing
                and exporting the finest unwashed and washed Ethiopian Highland
                Arabica Coffee. With over a decade of expertise, we connect the
                rich heritage of Ethiopian coffee to global markets, including
                the Middle East, Europe, Japan, and the USA.
              </p>

              <p className="leading-relaxed">
                At Birra Coffee, quality and sustainability are at the heart of
                our operations. Our coffee varieties, such as Harrar, Lekempti,
                Jimmah, and Limu, are meticulously sourced and processed to meet
                international standards, ensuring a delightful experience for
                coffee enthusiasts. As an active member of the Ethiopian Coffee
                Exporters Association, we pride ourselves on our commitment to
                excellence, bolstered by a dedicated team of over 300 skilled
                employees and cutting-edge facilities.
              </p>
              <p>
                Join hands with Birra Coffee General Trading P.L.C, where every
                cup tells the story of Ethiopia’s vibrant coffee culture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#442817] text-white px-8 py-3 rounded hover:bg-[#5d371f] transition-colors"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                size="lg"
                className="bg-[#442817] text-white px-8 py-3 rounded hover:bg-[#5d371f] transition-colors"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
