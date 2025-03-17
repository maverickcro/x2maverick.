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
    <main className="w-full flex-auto min-h-screen  flex flex-col bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div style={{ opacity: "1", transform: "none" }}>
            <h1>
              <span className="block font-display text-xl uppercase font-semibold text-neutral-950">
                Proces
              </span>
              <span className="sr-only"> - </span>
              <span className="mt-6 block max-w-5xl font-display text-5xl md:text-7xl font-bold tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl">
                Kako pretvaramo viziju <br /> u stvarnost
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-800">
              <p>
                Fokusiramo se na rješenja koja su već dokazala svoju vrijednost,
                usavršavamo ih i prilagođavamo vašim potrebama. Tako možete biti
                sigurni da ćete dobiti najbolje – bez nepotrebnih komplikacija.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:my-40 lg:space-y-40">
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
                      style={{ borderRadius: "2.5rem" }}
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
                      Odaberite predložak koji najbolje odgovara vašem{" "}
                      <strong className="font-semibold text-neutral-950">
                        poslovanju
                      </strong>
                      , a mi ćemo ga prilagoditi vašim bojama, sadržaju i brendu
                      – brzo i jednostavno. Svi naši{" "}
                      <strong className="font-semibold text-neutral-950">
                        web dizajnovi
                      </strong>{" "}
                      izrađeni su modernim tehnologijama i optimizirani za
                      dugotrajnu kvalitetu.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    U ovoj fazi:
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Analiza poslovnih potreba
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Savjetovanje o dizajnu
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Odabir predloška
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
                      style={{ borderRadius: "2.5rem" }}
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
                      Što nam više informacija date, to bolje – logo, kontakt
                      podaci, opisi usluga... sve pomaže da vaš{" "}
                      <strong className="font-semibold text-neutral-950">
                        web
                      </strong>{" "}
                      bude spreman bez odgađanja. Ako vam trebaju{" "}
                      <strong className="font-semibold text-neutral-950">
                        savjeti
                      </strong>{" "}
                      ili pomoć oko sadržaja, tu smo za vas.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Prikupljanje materijala
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Organizacija sadržaja
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      SEO optimizacija teksta
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
                      style={{ borderRadius: "2.5rem" }}
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
                      Vaš odabrani{" "}
                      <strong className="font-semibold text-neutral-950">
                        web predložak
                      </strong>{" "}
                      prilagođavamo tako da ne izgleda generički, već da se
                      uklopi u vaše{" "}
                      <strong className="font-semibold text-neutral-950">
                        brendiranje
                      </strong>
                      . Radimo precizne dorade i{" "}
                      <strong className="font-semibold text-neutral-950">
                        optimizacije
                      </strong>{" "}
                      kako bi stranica ostavila pravi dojam na vaše klijente.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Implementacija dizajna
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Mobilna optimizacija
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      SEO tehnička prilagodba
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Dodavanje slika i teksta
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Testiranje funkcionalnosti
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Brzina i performanse
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
                      style={{ borderRadius: "2.5rem" }}
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
                      Prije lansiranja, provjeravamo svaku stranicu, testiramo
                      na svim{" "}
                      <strong className="font-semibold text-neutral-950">
                        uređajima
                      </strong>{" "}
                      i osiguravamo da sve radi besprijekorno. Vaš{" "}
                      <strong className="font-semibold text-neutral-950">
                        web projekt
                      </strong>{" "}
                      bit će spreman za rast i nove prilike.
                    </p>
                  </div>
                  <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                  </h3>
                  <ul role="list" className="mt-4 flex flex-wrap gap-4">
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Revizije i manje dorade
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Testiranje korisničkog iskustva
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Postavljanje domene
                    </li>
                    <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                      Pokretanje web stranice
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
