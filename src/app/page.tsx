"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";

export default function Home() {
  // TODO: landing page
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <LandingSection />
    </main>
  );
}

function LandingSection() {
  return (
    <section className="flex size-full flex-col items-center justify-between p-24">
      <DragTest />
    </section>
  );
}

/*
IDEA: 착시 효과가 있는 lp 판을 만들어보자
lp 판 위에 비닐을 올리면 글씨가 보이고
재생을 누르면 돌아감
서로 다른 두 노래가 재생됨
1. lp 판 같은 모양의 div를 만들고
2. 그 위에 비닐 같은 div를 만들고
3. lp 의 바늘을 만들고
4. 바늘을 비닐 위로 드래그 하면 비닐이 돌아가면서 음악이 재생됨

왼쪽 lp의 색: #181718
오른쪽 lp의 색: #E0E1E0
왼쪽에서 보여지는 글씨 색: #E0E1E0
오른쪽에서 보여지는 글씨 색: #181718
비닐의 색: #C2C1C2, opacity: 0.1
**/

function DragTest() {
  const constraintsRef = useRef(null);

  return (
    <div className="relative h-[300px] w-[600px] rounded-[30px] bg-[#F9F9F9]">
      <motion.div
        className="absolute flex size-[300px] items-center justify-center bg-[#181718]"
        initial={{ rotate: -10 }}
      >
        <div className="top-[150px] size-[5px] rounded-full border border-[#E0E1E0]" />
      </motion.div>

      <motion.div
        className="absolute left-[300px] flex size-[300px] items-center justify-center bg-[#E0E1E0]"
        initial={{ rotate: 5 }}
      >
        <div className="top-[150px] size-[5px] rounded-full border border-[#181718]" />
      </motion.div>

      <motion.div className="relative size-full rounded-[30px]" ref={constraintsRef}>
        <motion.div
          className="flex size-[300px] flex-col items-center justify-center gap-4 rounded-full border bg-[#C2C1C2]/10"
          drag
          dragConstraints={constraintsRef}
          initial={{ x: 150, rotate: 0 }}
        >
          <span className="text-[#181718]">landing example</span>
          <div className="top-[150px] size-[5px] rounded-full border border-[#181718]" />
          <span className="text-[#E0E1E0]">inspired by her tree</span>
        </motion.div>
        <motion.div className="size-[120px] ?" initial={{ rotate: 0 }} animate={{ rotate: 30 }}>
          <Image src={"/turntable_arm.svg"} width={120} height={120} alt="arm" />
        </motion.div>
      </motion.div>
    </div>
  );
}
