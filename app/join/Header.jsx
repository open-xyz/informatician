'use client'

const scrolldown = () => {
    const jobsSection = document.getElementById("jobs-section");
    if (jobsSection) {
        window.scrollTo({
            top: jobsSection.offsetTop,
            behavior: "smooth",
        });
    }
};

export default function Header() {
  return (
      <section className="bg-pink-900 text-white text-sm mt-10 pb-24 pt-10 md:px-10 grid place-items-center">
          <div className="container flex flex-col justify-start max-w-5xl p-8 mt-20 shadow-md rounded-lg">
              <h2 className="text-3xl sm:text-4xl mt-2 md:my-0 text-center text-blue-200 font-serif">WHY INFORMATICIAN?</h2>
              <p className="mt-4 md:max-w-[38rem] text-base text-center">
                  If you love working with smart, motivated people, you’ll love
                  working at Informatician. We value our employees, we demonstrate
                  accountability, and we take action. We’re one team with a common
                  goal:
                  <strong> helping our customer flourish</strong>
              </p>
              <div className="mt-12">
                  <div spacing={2} direction="row" className="">
                      <button
                          onClick={scrolldown}
                          className="text-white bg-blue-500 py-2 px-4 rounded uppercase mt-5 justify-start block"
                      >
                          <span className="">See all open positions</span>
                      </button>
                  </div>
              </div>
          </div>
      </section>
  )
}
