
const processes = [
  {
    title: "Buying",
    description:
      "We start by picking the best coffee beans from local farmers in Ethiopia. We make sure to choose the ones that taste the most amazing. Building good relationships with our suppliers helps us get top-quality beans.",
  },
  {
    title: "Processing",
    description:
      "Once we have the best beans, we use smart methods to get them ready. We clean and prepare them carefully, keeping all the natural flavours. Our super-advanced dry processes plant uses the latest tech to clean, dry, and sort coffee beans by colour. This way, we make sure the quality stays top-notch during processing – no shortcuts, just great tasty coffee.",
  },
  {
    title: "Exporting",
    description:
      "After the beans are just right, we handle the shipping part. Our team takes care of packing and sending the coffee from Ethiopia to all around the world. We make sure the fantastic taste of our coffee stays perfect until it reaches you.",
  },
];
export default function Process() {

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
          Coffee Export Process in Ethiopia : From
          <br />
          Bean Selection to Global Export
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="border border-4-orange-200 p-6 rounded-lg hover:border-orange-400 transition-colors duration-300"
            >
              <h3 className="text-xl text-text-primary font-bold text-center mb-2">
                {process.title}
                <div className="w-12 h-0.5 bg-bg-neutral mx-auto mt-2"></div>
              </h3>
              <p className="text-text-neutral text-center leading-relaxed mt-4 text-sm">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
