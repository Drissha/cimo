"use client";
import { useRef } from "react";

import { Logos } from "@/components/ui/_logos";
import {
  BeamCircle,
  BeamsConnecting,
  BeamsConnectingContainer,
} from "@/components/ui/beams-connecting";

export default function DemoBeamsConnecting_Converge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <BeamsConnectingContainer ref={containerRef}>
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <BeamCircle ref={div1Ref}>
            <Logos.framerMotion className="size-6" />
          </BeamCircle>
          <BeamCircle ref={div5Ref}>
            <Logos.shadcn className="size-6 text-neutral-950" />
          </BeamCircle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <BeamCircle ref={div2Ref}>
            <Logos.aceternity className="size-6 text-neutral-950" />
          </BeamCircle>
          <BeamCircle ref={div4Ref} className="size-16">
            <Logos.everUI className="size-10" />
          </BeamCircle>
          <BeamCircle ref={div6Ref}>
            <Logos.nextJs className="size-6" />
          </BeamCircle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <BeamCircle ref={div3Ref}>
            <Logos.lucideReact className="size-6" />
          </BeamCircle>
          <BeamCircle ref={div7Ref}>
            <Logos.tailwind className="size-6" />
          </BeamCircle>
        </div>
      </div>

      <BeamsConnecting
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <BeamsConnecting containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <BeamsConnecting
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <BeamsConnecting
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        reverse
        endYOffset={-10}
      />
      <BeamsConnecting
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <BeamsConnecting
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        reverse
        endYOffset={10}
      />
    </BeamsConnectingContainer>
  );
}
