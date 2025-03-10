"use client";

export default function Hero({ isNavOpen }) {
  return (
    <div
      className="relative flex flex-auto bg-white h-screen z-0"
      style={{
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        marginTop: "10px",
      }}
    >
      <div className="relative isolate flex w-full flex-col pt-9">
        <main className="w-full flex-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 sm:mt-4 md:mt-56">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-3xl"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
