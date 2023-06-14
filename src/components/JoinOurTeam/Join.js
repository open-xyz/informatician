import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import workplace from "./workplace.jpeg";
import workinginoffice from "./workinginoffice.png";

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
    <div className="join py-5 ">
      <section className="bg-pink-900 text-white text-sm  ">
        <div className="container flex flex-col  justify-start">
          <h2 className="text-4xl font-mono mt-2 md:my-0">
            WHY <strong className="text-3xl"> INFORMATICIAN? </strong>
          </h2>
          <p className=" mt-4 md:max-w-2xl">
            If you love working with smart, motivated people, you’ll love
            working at Informatician. We value our employees, we demonstrate
            accountability, and we take action. We’re one team with a common
            goal:
            <strong> helping our customer flourish</strong>
          </p>
          <div className="">
            <Stack spacing={2} direction="row" className="">
              <Button
                variant="contained"
                onClick={scrolldown}
                className="text-white bg-orange-800 mt-5 justify-start block"
              >
                {" "}
                <span className="">See all open positions</span>
              </Button>
            </Stack>
          </div>
        </div>
      </section>
      <div className="text-center mt-10 mb-10 md:mb-3 text-4xl">
        <h2>
          <strong>BENEFITS</strong>
        </h2>
      </div>
      {/* Benefits Section */}
      <section className="flex justify-center md:mx-20 items-center ">
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-20 md:max-w-5xl   ">
          <li className=" md:my-4">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_03_health.svg?a974a5f44"
              className="mx-auto w-24 "
              alt="diversity"
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
          <li className=" md:my-4">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
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
          <li className=" ">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_07_wellbeing.svg?a974a5f44"
              className="mx-auto"
              alt="diversity"
            />
            <div>
              <h2 className="text-2xl font-bold  font-bold text-center mt-6 mb-3">
                Wellbeing
              </h2>
              <p className="text-center ">
                {" "}
                Resources, workshops & events to support your wellbeing journey:
                Mind, Body & Soul.
              </p>
            </div>
          </li>
          <li className="">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
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
          <li className="  ">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_06_parental.svg?a974a5f44"
              className="mx-auto"
              alt="diversity"
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
          <li className="">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_05_pto.svg?a974a5f44"
              className="mx-auto"
              alt="diversity"
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
      <section className="mt-10">
        <div className=" flex justify-center  items-center">
          <ul className=" grid grid-cols-1 md:grid-cols-2">
            <li className=" ">
              <img
                src={workplace}
                className=" md:h-80 sm:h-50"
                alt="diversity"
              />
            </li>
            <li className=" ">
              <img
                src={workinginoffice}
                className="md:h-80 sm:h-20"
                alt="diversity"
              />
            </li>
          </ul>
        </div>
      </section>
      {/* Employee Section */}
      <section className="  ">
        <div className="container flex-col">
          <h2 className=" text-4xl text-center ">
            STRAIGHT FROM <strong> THE SOURCE </strong>
          </h2>
          <p className="text-center text-2xl mt-4 text-mono">
            Sure, we can tell you how great it is to work at Informatician,
            <strong> but what do our Employees have to say? </strong>
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <ul className=" grid grid-cols-2 md:gap-5 md:max-w-3xl ">
            <li className=" ">
              <img
                src="https://avatars.githubusercontent.com/u/33249782?v=4"
                className="ml-5 w-40 mx-auto rounded-full"
                alt="diversity"
              />
              <div>
                <p className="ml-5 mt-10 mb-5 text-slate-500">
                  {" "}
                  Everyone's ideas are valued and everyone works effectively as
                  one team, regardless of the role you have in the company.
                  <br></br>
                  <strong> Rohan</strong>
                </p>
              </div>
            </li>
            <li className=" ">
              <img
                src="https://images.weserv.nl/?output=webp&url=https://avatars.githubusercontent.com/u/96341431?v=4"
                className="ml-5 w-40 mx-auto rounded-full"
                alt="diversity"
              />
              <div>
                <p className="ml-5 mt-10 mb-5 text-slate-500">
                  {" "}
                  If you're motivated and persistent, your impact will
                  definitely be felt by the company. There is nothing more
                  rewarding than seeing your hard work turned into something
                  fruitful that directly helps the company.
                  <br></br>
                  <strong> Deepak</strong>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Community Section */}
      <section className="bg-pink-900 text-white  ">
        <div className="container flex-col">
          <h2 className=" text-4xl text-center ">
            <strong> We're a community </strong>
          </h2>
          <p className="text-center text-2xl mt-4 text-mono">
            Every day should be exciting, and we work hard to make it happen.
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <ul className=" grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl ">
            <li className=" ">
              <img
                src="https://s-f.scribdassets.com/images/about/03_careers_E_img_01_@2x.jpg?a974a5f44"
                className="md:ml-5"
                alt="diversity"
              />
              <div>
                <h2 className="font-bold  text-center mt-6 mb-3">Community</h2>
                <p className="ml-5 mb-5">
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
              <img
                src="https://s-f.scribdassets.com/images/about/03_careers_E_img_02_@2x.jpg?a974a5f44"
                className="mx-auto  "
                alt="diversity"
              />
              <div>
                <h2 className="font-bold  text-center mt-6 mb-3">
                  Characters with character
                </h2>
                <p className="ml-5 mb-5">
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
              <img
                src="https://s-f.scribdassets.com/images/about/03_careers_E_img_03_@2x.jpg?a974a5f44"
                className="mx-auto"
                alt="diversity"
              />
              <div>
                <h2 className=" font-bold  font-bold text-center mt-6 mb-3">
                  Growth Meantality
                </h2>
                <p className="ml-5 mb-5">
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
      <section id="jobs-section">
        <div className="container flex-col">
          <h2 className="text-customColor text-4xl text-center font-mono">
            READY TO <strong> JOIN US? </strong>
          </h2>
          <p className="text-center text-2xl mt-4">
            See what
            <strong> awesome positions </strong>
            are Available and start your next chapter today.
          </p>
        </div>
      </section>
      <section className="flex justify-center md:mx-20 items-center jobs ">
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-20 md:max-w-5xl   ">
          <li className="">
            <div>
              <h2 className="text-2xl font-bold  text-center mt-6 mb-3">
                Data Science & Machine learning
              </h2>
              <p className="text-center "> 3 positions</p>
            </div>
          </li>
          <li className=" ">
            <div>
              <h2 className="font-bold text-2xl text-center mt-6 mb-3">
                People
              </h2>
              <p className="text-center "> 0 position</p>
            </div>
          </li>
          <li className=" ">
            <div>
              <h2 className="text-2xl font-bold  font-bold text-center mt-6 mb-3">
                Engineering
              </h2>
              <p className="text-center "> 2 positions</p>
            </div>
          </li>
          <li className="">
            <div>
              <h2 className="text-2xl  font-bold  text-center mt-6 mb-3">
                Marketing
              </h2>
              <p className="text-center "> 3 positions</p>
            </div>
          </li>
          <li className="  ">
            <div>
              <h2 className="text-2xl  font-bold text-center mt-6 mb-3">
                Finance and Operations
              </h2>
              <p className="text-center "> 5 positions</p>
            </div>
          </li>
          <li className="">
            <div>
              <h2 className="text-2xl font-bold  text-center mt-6 mb-3">
                Product, Designs, & Analytics
              </h2>
              <p className="text-center "> 2 positions</p>
            </div>
          </li>
          <li className="">
            <div>
              <h2 className="text-2xl font-sans font-bold  text-center mt-6 mb-3">
                Content Acquisition
              </h2>
              <p className="text-center "> 1 positions</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Join;
