'use client'
import quotationmark from "./quotationmark.webp";
import workinginoffice from "./workinginoffice.webp";
import workplace from "./workplace.jpeg";
import Image from "next/image";

const scrolldown = () => {
  const jobsSection = document.getElementById("jobs-section");
  if (jobsSection) {
    window.scrollTo({
      top: jobsSection.offsetTop,
      behavior: "smooth",
    });
  }
};

const Join = () => {
  return (
    // Header Section
    <div className="join py-5">
      <section className="bg-pink-900 text-white text-sm mt-10 pb-24 pt-10 md:px-10 grid place-items-center">
        <div className="container flex flex-col justify-start max-w-5xl p-8 mt-20 shadow-md rounded-lg">
          <h2 className="text-4xl mt-2 md:my-0 text-center text-blue-200 font-serif">WHY INFORMATICIAN?</h2>
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

      <div className="text-center mt-10 mb-10 md:mb-3 text-4xl">
        <h2>
          <strong>BENEFITS</strong>
        </h2>
      </div>
      {/* Benefits Section */}
      <section className="flex justify-center md:mx-20 mx-4 items-center">
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-20 md:max-w-5xl">
          <li className="border-2 rounded-xl py-6 px-4 hover:scale-105 ease-in-out transition-transform hover:shadow-2xl shadow-slate-800">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_03_health.svg?a974a5f44"
              className="mx-auto w-24 hover:animate-spin"
              alt="Icon representing health benefits"
            />
            <div>
              <h2 className="font-bold text-2xl text-center mt-6 mb-3">
                Medical, dental and vision
              </h2>
              <p className="text-center ">
                {" "}
                We offer competitive medical, dental, vision insurance for
                employees and dependents. This includes medical, dental, and
                vision premiums..
              </p>
            </div>
          </li>
          <li className="border-2 rounded-xl py-6 px-4 hover:scale-105 ease-in-out transition-transform hover:shadow-2xl shadow-slate-800">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto w-24 hover:animate-spin"
              alt="Benefits icon showcasing diversity, equity, and inclusion"
            />
            <div>
              <h2 className="text-2xl font-bold  text-center mt-6 mb-3">
                Diversity, Equity, and Inclusion
              </h2>
              <p className="text-center ">
                {" "}
                We follow DEI policy that promotes fair representation, equal
                opportunities, and respectful treatment of individuals from
                different backgrounds, ensuring a diverse workforce or
                community, fostering an inclusive environment, and striving for
                equitable outcomes for all.
              </p>
            </div>
          </li>
          <li className="border-2 rounded-xl py-6 px-4 hover:scale-105 ease-in-out transition-transform hover:shadow-2xl shadow-slate-800">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_07_wellbeing.svg?a974a5f44"
              className="mx-auto w-24 hover:animate-spin"
              alt="Illustration of a flower representing wellbeing"
            />
            <div>
              <h2 className="text-2xl font-bold text-center mt-6 mb-3">
                Wellbeing
              </h2>
              <p className="text-center ">
                {" "}
                Resources, workshops & events to support your wellbeing journey:
                Mind, Body & Soul.
              </p>
            </div>
          </li>
          <li className="border-2 rounded-xl py-6 px-4 hover:scale-105 ease-in-out transition-transform hover:shadow-2xl shadow-slate-800">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto w-24 hover:animate-spin"
              alt="Benefits icon showcasing diversity, equity, and inclusion"
            />
            <div>
              <h2 className="text-2xl font-bold  text-center mt-6 mb-3">
                Monthly stipend
              </h2>
              <p className="text-center ">
                {" "}
                We offer everyone a monthly stipend to use toward services that
                fit their personal needs. This gives you the opportunity to
                choose your own adventure and use the funds for whatever matters
                most to you.
              </p>
            </div>
          </li>
          <li className="border-2 rounded-xl py-6 px-4 hover:scale-105 ease-in-out transition-transform hover:shadow-2xl shadow-slate-800">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_06_parental.svg?a974a5f44"
              className="mx-auto w-24 hover:animate-spin"
              alt="Parental leave icon"
            />
            <div>
              <h2 className="text-2xl  font-bold text-center mt-6 mb-3">
                Parental leave
              </h2>
              <p className="text-center ">
                {" "}
                We offer biological, adoptive, and foster parents paid time off
                to spend quality time with family.
              </p>
            </div>
          </li>
          <li className="border-2 rounded-xl py-6 px-4 hover:scale-105 ease-in-out transition-transform hover:shadow-2xl shadow-slate-800">
            <Image
              loading="lazy"
              width={100}
              height={100}
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_05_pto.svg?a974a5f44"
              className="mx-auto w-24 hover:animate-spin"
              alt="Benefits icon depicting paid time off"
            />
            <div>
              <h2 className="text-2xl font-bold  text-center mt-6 mb-3">
                Time off
              </h2>
              <p className="text-center ">
                {" "}
                We want you to take time off to rest and rejuvenate. Notion
                offers flexible paid vacation as well as 10+ observed holidays
                by country.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Images-Section  */}
      <section className="mt-20 mx-4">
        <div className="flex justify-center items-center">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <li className="mx-auto shadow-xl shadow-slate-800 rounded-2xl">
              <Image
                loading="lazy"
                width={500}
                height={100}
                src={workplace}
                className="md:h-80 sm:h-50 rounded-2xl"
                alt="a group of people around a table"
              />
            </li>
            <li className="mx-auto shadow-xl shadow-slate-800 rounded-2xl">
              <Image
                loading="lazy"
                width={500}
                height={100}
                src={workinginoffice}
                className="md:h-80 sm:h-20 rounded-2xl"
                alt="a group of people sitting at a table with computers"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Employee Section */}
      <section className="my-20 mx-4">
        <div className="container flex-col py-10">
          <h2 className="text-4xl text-center text-blue-300">
            STRAIGHT FROM <strong> THE SOURCE </strong>
          </h2>
          <p className="text-center text-2xl mt-4 text-mono">
            Sure, we can tell you how great it is to work at Informatician,
            <strong> but what do our Employees have to say? </strong>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 md:max-w-3xl">
            <li className="border-2 rounded-2xl p-4 hover:scale-105 ease-in-out transition-transform flex flex-col items-center">
              <Image
                loading="lazy"
                width={100}
                height={100}
                src="https://avatars.githubusercontent.com/u/33249782?v=4"
                className="w-32 sm:w-25 rounded-full"
                alt="Rohan Sharma"
              />
              <div>
                <p className="ml-5 mt-10 text-slate-500">
                  {" "}
                  <Image
                    loading="lazy"
                    width={100}
                    height={100}
                    src={quotationmark}
                    alt="quotation mark"
                    className=" w-5 mb-2 mr-1 inline"
                  />
                  {"  "}
                  The vibrant and dynamic environment fosters creativity and
                  innovation. Being part of a talented team that is passionate
                  about improving access to knowledge and reading has been
                  incredibly fulfilling.
                  <br></br>
                  <strong className="text-slate-600"> Rohan</strong>
                </p>
              </div>
            </li>

            <li className="border-2 rounded-2xl p-4 hover:scale-105 ease-in-out transition-transform flex flex-col items-center">
              <Image
                loading="lazy"
                width={200}
                height={200}
                src="https://images.weserv.nl/?output=webp&url=https://avatars.githubusercontent.com/u/96341431?v=4"
                className="w-32  rounded-full"
                alt="Deepaksingh Kushwah"
              />
              <div>
                <p className="ml-5 mt-10 mb-5 text-slate-500">
                  <Image
                    loading="lazy"
                    width={100}
                    height={100}
                    src={quotationmark}
                    alt="quotation mark"
                    className=" w-5 mr-1 mb-2 inline "
                  />
                  {"  "}
                  If you're motivated and persistent, your impact will
                  definitely be felt by the company. There is nothing more
                  rewarding than seeing your hard work turned into something
                  fruitful that directly helps the company.
                  <br></br>
                  <strong className="text-slate-600"> Deepak</strong>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-pink-900 text-white py-10 md:px-0 px-2">
        <div className="container flex-col pb-6">
          <h2 className=" text-4xl text-center">
            <strong> We're a community </strong>
          </h2>
          <p className="text-center text-2xl mt-4 text-mono">
            Every day should be exciting, and we work hard to make it happen.
          </p>
        </div>
        <div className=" flex justify-center items-center px-5">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl ">
            <li className=" ">
              <Image
                loading="lazy"
                width={700}
                height={300}
                src="https://s-f.scribdassets.com/images/about/03_careers_E_img_01_@2x.jpg?a974a5f44"
                className="rounded-3xl"
                alt="a group of people excited"
              />
              <div>
                <h2 className="font-bold text-center mt-6 mb-3 text-lg uppercase">
                  Community
                </h2>
                <p className="mb-5 text-justify">
                  {" "}
                  Community and culture are paramount at Informatician. We
                  curate meaningful moments to bring employees together for
                  connection, collaboration and celebration.
                  <br></br>
                  <br></br>
                  Whether it's spending the day giving back philanthropically,
                  channeling your inner entrepreneur at our annual Hackweek,
                  showing off your hidden skills at the Informatician talent
                  show, or joining one of Informatician's Employee Resource
                  Groups, there is something for everyone.
                </p>
              </div>
            </li>
            <li className=" ">
              <Image
                loading="lazy"
                width={700}
                height={300}
                src="https://s-f.scribdassets.com/images/about/03_careers_E_img_02_@2x.jpg?a974a5f44"
                className="rounded-3xl mx-auto  "
                alt="Three people staring at you"
              />
              <div>
                <h2 className="font-bold  text-center mt-6 mb-3 text-lg uppercase">
                  Characters with character
                </h2>
                <p className="mb-5 text-justify">
                  {" "}
                  We believe diverse stories and backgrounds are what make
                  Informatician great. From a candidates all the way to
                  extending offers, our hiring practices prioritize diversity,
                  equity, and inclusion.
                  <br></br>
                  <br></br>
                  We have company-wide goals to hire more folks from
                  underrepresented groups or that have unique experiences!
                </p>
              </div>
            </li>
            <li className=" ">
              <Image
                loading="lazy"
                width={700}
                height={300}
                src="https://s-f.scribdassets.com/images/about/03_careers_E_img_03_@2x.jpg?a974a5f44"
                className="rounded-3xl mx-auto"
                alt="a girl sitting and reading a book"
              />
              <div>
                <h2 className=" font-bold text-center mt-6 mb-3 text-lg uppercase">
                  Growth Meantality
                </h2>
                <p className="mb-5 text-justify">
                  {" "}
                  We believe that ongoing training and development bring out the
                  best in our employees and our company as a whole.
                  <br></br>
                  <br></br>
                  We're constantly researching and implementing opportunities to
                  help our people grow and thrive along their career journey.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs-section" className="pt-20 px-5">
        <div className="container flex-col pt-8 pb-12">
          <h2 className="text-customColor text-4xl text-center text-pink-900">
            READY TO <strong> JOIN US? </strong>
          </h2>
          <p className="text-center text-2xl mt-4">
            See what
            <strong> awesome positions </strong>
            are Available and start your next chapter today.
          </p>
        </div>
      </section>
      <section className="flex justify-center md:mx-20 items-center pt-5 mx-4">
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-20 md:max-w-5xl   ">
          <li className="border-2 p-2 rounded-2xl shadow-xl shadow-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-center mt-2 mb-2">
                Data Science & Machine learning
              </h2>
              <p className="text-center mb-2"> 3 positions</p>
            </div>
          </li>
          <li className="border-2 p-2 rounded-2xl shadow-xl shadow-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-center mt-2 mb-2">
                Product, Designs, & Analytics
              </h2>
              <p className="text-center mb-2"> 2 positions</p>
            </div>
          </li>
          <li className="border-2 p-2 rounded-2xl shadow-xl shadow-slate-800">
            <div>
              <h2 className="font-bold text-2xl text-center mt-2 mb-2">
                People
              </h2>
              <p className="text-center mb-2"> 0 position</p>
            </div>
          </li>
          <li className="border-2 p-2 rounded-2xl shadow-xl shadow-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-center mt-2 mb-2">
                Engineering
              </h2>
              <p className="text-center mb-2"> 2 positions</p>
            </div>
          </li>
          <li className="border-2 p-2 rounded-2xl shadow-xl shadow-slate-800">
            <div>
              <h2 className="text-2xl font-bold  text-center mt-2 mb-2">
                Marketing
              </h2>
              <p className="text-center mb-2"> 3 positions</p>
            </div>
          </li>
          <li className="border-2 p-2 rounded-2xl shadow-xl shadow-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-center mt-2 mb-2">
                Finance and Operations
              </h2>
              <p className="text-center mb-2"> 5 positions</p>
            </div>
          </li>
          <li className="border-2 p-2 rounded-2xl shadow-xl shadow-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-center mt-2 mb-2">
                Content Acquisition
              </h2>
              <p className="text-center mb-2"> 1 positions</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Join;
