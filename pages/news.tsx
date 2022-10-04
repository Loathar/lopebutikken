import ItemCard from "./itemCard";

const News = function () {
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="mt-12 text-gray-800 text-3xl tracking-wider uppercase mb-12">
          Nyheter!
        </h1>
        <section className="flex flex-row flex-wrap">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </section>
      </div>
    </>
  );
};

export default News;
