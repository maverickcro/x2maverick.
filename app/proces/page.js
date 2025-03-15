"use client";
import Image from "next/image";
import Lenis from "lenis";
import { useEffect } from "react";
export default function Proces() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="w-full flex-auto min-h-screen  flex flex-col bg-white text-black p-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div style={{ opacity: "1", transform: "none" }}>
            <h1>
              <span className="block font-display text-base font-semibold text-neutral-950">
                Proces
              </span>
              <span className="sr-only"> - </span>
              <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl">
                Kako pretvaramo viziju u stvarnost
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-600">
              <p>
                Fokusiramo se na rješenja koja su već dokazala svoju vrijednost,
                usavršavamo ih i prilagođavamo vašim potrebama. Tako možete biti
                sigurni da ćete dobiti najbolje – bez nepotrebnih komplikacija.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
              <div className="flex justify-center">
                <div className="w-full flex-none sm:w-[45rem]">
                  <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-719/680 w-full grayscale">
                    <Image
                      src="/auto1.jpg"
                      alt="Auto"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                <div>
                  <div>
                    <span className="text-neutral-300">{`/  `}</span>01
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                    Odaberite idealan predložak
                  </h2>
                  <div className="mt-6">
                    <p>
                      We work closely with our clients to understand their{" "}
                      <strong className="font-semibold text-neutral-950">
                        needs
                      </strong>{" "}
                      and goals, embedding ourselves in their every day
                      operations to understand what makes their business tick.
                    </p>
                    <p>
                      Our team of private investigators shadow the company
                      director’s for several weeks while our account managers
                      focus on going through their trash. Our senior security
                      experts then perform social engineering hacks to gain
                      access to their{" "}
                      <strong className="font-semibold text-neutral-950">
                        business
                      </strong>{" "}
                      accounts — handing that information over to our forensic
                      accounting team.
                    </p>
                    <p>
                      Once the full audit is complete, we report back with a
                      comprehensive{" "}
                      <strong className="font-semibold text-neutral-950">
                        plan
                      </strong>{" "}
                      and, more importantly, a budget.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      In-depth questionnaires
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Feasibility studies
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Blood samples
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
              <div className="flex justify-center">
                <div className="w-full flex-none sm:w-[45rem]">
                  <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-719/680 w-full grayscale">
                    <Image
                      src="/auto2.jpg"
                      alt="Auto"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                <div>
                  <div>
                    <span className="text-neutral-300">{`/  `}</span>02
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                    Podijelite detalje projekta
                  </h2>
                  <div className="mt-6">
                    <p>
                      We work closely with our clients to understand their{" "}
                      <strong className="font-semibold text-neutral-950">
                        needs
                      </strong>{" "}
                      and goals, embedding ourselves in their every day
                      operations to understand what makes their business tick.
                    </p>
                    <p>
                      Our team of private investigators shadow the company
                      director’s for several weeks while our account managers
                      focus on going through their trash. Our senior security
                      experts then perform social engineering hacks to gain
                      access to their{" "}
                      <strong className="font-semibold text-neutral-950">
                        business
                      </strong>{" "}
                      accounts — handing that information over to our forensic
                      accounting team.
                    </p>
                    <p>
                      Once the full audit is complete, we report back with a
                      comprehensive{" "}
                      <strong className="font-semibold text-neutral-950">
                        plan
                      </strong>{" "}
                      and, more importantly, a budget.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      In-depth questionnaires
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Feasibility studies
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Blood samples
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
              <div className="flex justify-center">
                <div className="w-full flex-none sm:w-[45rem]">
                  <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-719/680 w-full grayscale">
                    <Image
                      src="/auto1.jpg"
                      alt="Auto"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                <div>
                  <div>
                    <span className="text-neutral-300">{`/  `}</span>03
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                    Razvoj i prilagodba
                  </h2>
                  <div className="mt-6">
                    <p>
                      We work closely with our clients to understand their{" "}
                      <strong className="font-semibold text-neutral-950">
                        needs
                      </strong>{" "}
                      and goals, embedding ourselves in their every day
                      operations to understand what makes their business tick.
                    </p>
                    <p>
                      Our team of private investigators shadow the company
                      director’s for several weeks while our account managers
                      focus on going through their trash. Our senior security
                      experts then perform social engineering hacks to gain
                      access to their{" "}
                      <strong className="font-semibold text-neutral-950">
                        business
                      </strong>{" "}
                      accounts — handing that information over to our forensic
                      accounting team.
                    </p>
                    <p>
                      Once the full audit is complete, we report back with a
                      comprehensive{" "}
                      <strong className="font-semibold text-neutral-950">
                        plan
                      </strong>{" "}
                      and, more importantly, a budget.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      In-depth questionnaires
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Feasibility studies
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Blood samples
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
              <div className="flex justify-center">
                <div className="w-full flex-none sm:w-[45rem]">
                  <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-719/680 w-full grayscale">
                    <Image
                      src="/auto2.jpg"
                      alt="Auto"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                <div>
                  <div>
                    <span className="text-neutral-300">{`/  `}</span>04
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                    Završni pregled i lansiranje projekta
                  </h2>
                  <div className="mt-6">
                    <p>
                      We work closely with our clients to understand their{" "}
                      <strong className="font-semibold text-neutral-950">
                        needs
                      </strong>{" "}
                      and goals, embedding ourselves in their every day
                      operations to understand what makes their business tick.
                    </p>
                    <p>
                      Our team of private investigators shadow the company
                      director’s for several weeks while our account managers
                      focus on going through their trash. Our senior security
                      experts then perform social engineering hacks to gain
                      access to their{" "}
                      <strong className="font-semibold text-neutral-950">
                        business
                      </strong>{" "}
                      accounts — handing that information over to our forensic
                      accounting team.
                    </p>
                    <p>
                      Once the full audit is complete, we report back with a
                      comprehensive{" "}
                      <strong className="font-semibold text-neutral-950">
                        plan
                      </strong>{" "}
                      and, more importantly, a budget.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      In-depth questionnaires
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Feasibility studies
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Blood samples
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
