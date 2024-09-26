"use client";

import type React from "react";
import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { clx } from "@/lib/utils/clx/clx-merge";

type TTextRevealCard = {
  text: string;
  revealText: string;
  children?: React.ReactNode;
};

// EXPORTS
export const TextRevealCardTitle = clx.h2("mb-2 text-lg text-white");
export const TextRevealCardDescription = clx.p("text-sm text-[#a9a9a9]");

// INTERNAL
const TextRevealCardRef = clx.div(
  "relative w-[80rem] overflow-hidden rounded-lg bg-black p-8 text-center"
);
const TextRevealCardContainer = clx.div(
  "relative  flex h-40 items-center overflow-hidden"
);
const RevealText = clx.p(
  "bg-gradient-to-b from-white to-neutral-300 bg-clip-text md:py-10 font-bold text-transparent text-white md:text-[3rem] text-[1.2rem] ml-10"
);
const NormalText = clx.p(
  "bg-[#323238] bg-clip-text md:py-10 font-bold text-transparent md:text-[3rem] text-[1.2rem] ml-10"
);
const MaskOverflow = clx.div(
  "overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
);

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        FUNCTIONS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

export function TextRevealCard({
  text,
  revealText,
  children,
}: TTextRevealCard) {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      // @ts-expect-error: Ignore this error
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  const ROTATE_DEG = (widthPercentage - 50) * 0.1;

  return (
    <TextRevealCardRef
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
    >
      {children}

      <TextRevealCardContainer>
        <motion.div
          style={{ width: "70rem" }} // Lebar tetap untuk RevealText
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 bg-black will-change-transform"
        >
          <RevealText
            style={{
              width: "70rem", // Pastikan lebar RevealText tetap
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
          >
            {revealText}
          </RevealText>
        </motion.div>

        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${ROTATE_DEG}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform"
        />

        <MaskOverflow>
          <NormalText style={{ width: "70rem" }}>{text}</NormalText>
          <MemoizedStars />
        </MaskOverflow>
      </TextRevealCardContainer>
    </TextRevealCardRef>
  );
}

//
function Stars() {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0 text-center">
      {[...Array(140)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        />
      ))}
    </div>
  );
}

export const MemoizedStars = memo(Stars);
