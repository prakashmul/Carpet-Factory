import React, { useMemo, useState, useCallback, useEffect } from "react";

type Product = {
  imageSrc: string;
  name: string;
  link: string;
  buttonText: string;
};

const products: Product[] = [
  {
    imageSrc:
      "https://www.revivalrugs.com/cdn/shop/files/Euna_overhead_carousel.png?v=1751015938&width=580",
    name: "Washable Eunha Rug in Berry",
    link: "https://www.revivalrugs.com/collections/hana-collection",
    buttonText: "SHOP MORE COLORS",
  },
  {
    imageSrc:
      "https://www.revivalrugs.com/cdn/shop/files/image-14.png?v=1726760440&width=580",
    name: "Washable Helen Rug",
    link: "https://www.revivalrugs.com/products/washable-wool-hand-knotted-rug-helen",
    buttonText: "SHOP MORE",
  },
  {
    imageSrc:
      "https://www.revivalrugs.com/cdn/shop/files/image-12.png?v=1726404124&width=580",
    name: "Wool Milord Rug",
    link: "https://www.revivalrugs.com/products/handknotted-rug-milord?variant=42587589050467",
    buttonText: "SHOP ALL EDITH",
  },
  {
    imageSrc:
      "https://www.revivalrugs.com/cdn/shop/files/image_17.png?v=1719472237&width=580",
    name: "Jute Crimson Hart",
    link: "https://www.revivalrugs.com/collections/hart-jute-rugs",
    buttonText: "SHOP ALL JUTE HART",
  },
  {
    imageSrc:
      "https://www.revivalrugs.com/cdn/shop/files/image_16.png?v=1719145447&width=580",
    name: "Washable Helen Rug",
    link: "https://www.revivalrugs.com/products/washable-wool-hand-knotted-rug-helen",
    buttonText: "SHOP ALL COLORS",
  },
  {
    imageSrc:
      "https://www.revivalrugs.com/cdn/shop/files/Euna_overhead_carousel.png?v=1751015938&width=580",
    name: "Washable Eunha Rug in Berry",
    link: "https://www.revivalrugs.com/collections/hana-collection",
    buttonText: "SHOP MORE COLORS",
  },
  {
    imageSrc:
      "https://www.revivalrugs.com/cdn/shop/files/image-14.png?v=1726760440&width=580",
    name: "Washable Helen Rug",
    link: "https://www.revivalrugs.com/products/washable-wool-hand-knotted-rug-helen",
    buttonText: "SHOP MORE",
  },
];

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const ProductCategory: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track mobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goPrev = useCallback(
    () => setActive((i) => (i - 1 + products.length) % products.length),
    []
  );
  const goNext = useCallback(
    () => setActive((i) => (i + 1) % products.length),
    []
  );

  const layout = useMemo(() => {
    const STEP_X = 140;
    const SHRINK = 0.12;
    const MAX_STEPS = 4;

    return products.map((_, i) => {
      let d = i - active;
      if (d > products.length / 2) d -= products.length;
      if (d < -products.length / 2) d += products.length;

      const abs = Math.abs(d);
      const capped = Math.min(abs, MAX_STEPS);
      const tx = d * STEP_X;
      const scale = clamp(1 - SHRINK * capped, 0.55, 1);
      const opacity = clamp(1 - 0.1 * capped, 0.35, 1);
      const z = 100 - capped;

      return { d, tx, scale, opacity, z };
    });
  }, [active]);

  const MAX_VISIBLE = isMobile ? 1 : 3; // 1 side for mobile, 3 for desktop

  return (
    <section className="bg-white py-16 select-none">
      <div className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900">
          Product Category
        </h2>

        {/* Stage */}
        <div className="relative mt-8">
          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={goPrev}
            className="absolute -left-4 md:left-[-2] top-1/2 -translate-y-1/2 z-[200] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-slate-900"
            >
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={goNext}
            className="absolute -right-4 md:right-[-2] top-1/2 -translate-y-1/2 z-[200] w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-slate-900"
            >
              <path
                d="M9 18l6-6-6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Carousel */}
          <div className="relative h-[400px] sm:h-[430px]">
            <div className="absolute inset-0" />
            {products.map((p, i) => {
              let { tx, scale, opacity, z, d } = { ...layout[i], d: i - active };
              if (d > products.length / 2) d -= products.length;
              if (d < -products.length / 2) d += products.length;

              // Show only active ± MAX_VISIBLE
              if (Math.abs(d) > MAX_VISIBLE) return null;

              return (
                <div
                  key={i}
                  className="absolute left-1/2 bottom-0 will-change-transform cursor-pointer"
                  style={{
                    transform: `translateX(calc(-50% + ${tx}px)) scale(${scale})`,
                    zIndex: z,
                    opacity,
                    transition:
                      "transform 2000ms cubic-bezier(.2,.8,.2,1), opacity 450ms cubic-bezier(.2,.8,.2,1)",
                  }}
                  onClick={() => setActive(i)}
                  role="button"
                  aria-label={p.name}
                >
                  <img
                    src={p.imageSrc}
                    alt={p.name}
                    className="h-[360px] sm:h-[390px] w-auto object-contain rounded-lg shadow-xl"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Active title + button */}
        <div className="mt-6 text-center">
          <p className="text-lg md:text-xl font-semibold text-slate-800">
            {products[active].name}
          </p>
          <a href={products[active].link} className="inline-block mt-3">
            <button className="px-6 py-2 rounded-full bg-slate-900 text-white font-semibold shadow hover:bg-slate-800 transition">
              {products[active].buttonText}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
