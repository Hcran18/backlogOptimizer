"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroParallax = ({ products }: { products: { title: string; thumbnail: string }[] }) => {
  const firstRow = products.slice(0, 4); // Keep the first 4 products for the first row
  const secondRow = products.slice(4, 8); // Keep the next 4 products for the second row
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);

  return (
    <div ref={ref} className="h-[150vh] w-full antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] overflow-hidden">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          opacity,
        }}
        className="absolute top-0 w-full h-full z-0"
      >
        {/* First Row - Slightly move it to the right */}
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-20 mb-20"
        >
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>

        {/* Second Row - Slightly move it to the left */}
        <motion.div
          className="flex flex-row mb-20 space-x-20"
        >
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative">
      <div className="p-8 mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight md:leading-normal">
          Backlogger <br />
        </h1>
        <p className="text-lg md:text-xl font-normal text-neutral-300 max-w-2xl mx-auto">
          Optimize the Way You Play
        </p>
        <Button className="mt-6 px-6 py-3 text-lg font-semibold hover:bg-primary/80 transition-all duration-300 rounded-lg">
          <Link to={"/optimizer"} className="text-black">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {/* Removed the <a> tag */}
      <div className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
