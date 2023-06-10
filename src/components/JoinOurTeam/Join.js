import React from "react";
import "./join.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const scrolldown = (e) => {
  e.preventDefault();
};

const Join = () => {
  return (
    <div className="join flex-col">
      <section>
        <div className="container flex-col">
          <h2 className="text-customColor text-4xl text-center font-mono">
            WHY <strong> INFORMATICIAN? </strong>
          </h2>
          <p className="text-center mt-4">
            If you love working with smart, motivated people, you’ll love
            working at Scribd. We value our employees, we demonstrate
            accountability, and we take action. We’re one team with a common
            goal:
            <strong> helping our customer flourish</strong>
          </p>
          <div>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                onClick={(e) => scrolldown}
                className="text-white mt-3 mx-auto block"
              >
                {" "}
                <span>See all open positions</span>
              </Button>
            </Stack>
          </div>
        </div>
        <div className="text-center text-4xl">
          <h2>
            <strong>BENEFITS</strong>
          </h2>
        </div>
      </section>
      <section className="">
        <ul className="flex flex-wrap justify-center  ">
          <li className="w-1/2 md:w-1/2 lg:w-1/2 my-4">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
            />
            <div>
              <h2 className="text-2xl text-center mt-6 mb-3">
                Diversity, Equity, and Inclusion
              </h2>
              <p className="text-center mx-8">
                {" "}
                We follow DEI policy that promotes fair representation, equal
                opportunities, and respectful treatment of individuals from
                different backgrounds, ensuring a diverse workforce or
                community, fostering an inclusive environment, and striving for
                equitable outcomes for all.
              </p>
            </div>
          </li>
          <li className="w-1/2 md:w-1/2 lg:w-1/2 my-4">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
            />
            <div>
              <h2 className="text-2xl text-center mt-6 mb-3">
                Diversity, Equity, and Inclusion
              </h2>
              <p className="text-center mx-8">
                {" "}
                We follow DEI policy that promotes fair representation, equal
                opportunities, and respectful treatment of individuals from
                different backgrounds, ensuring a diverse workforce or
                community, fostering an inclusive environment, and striving for
                equitable outcomes for all.
              </p>
            </div>
          </li>
          <li className="w-1/2 md:w-1/2 lg:w-1/2 my-4">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
            />
            <div>
              <h2 className="text-2xl text-center mt-6 mb-3">
                Diversity, Equity, and Inclusion
              </h2>
              <p className="text-center mx-8">
                {" "}
                We follow DEI policy that promotes fair representation, equal
                opportunities, and respectful treatment of individuals from
                different backgrounds, ensuring a diverse workforce or
                community, fostering an inclusive environment, and striving for
                equitable outcomes for all.
              </p>
            </div>
          </li>
          <li className="w-1/2 md:w-1/2 lg:w-1/2 my-4">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
            />
            <div>
              <h2 className="text-2xl text-center mt-6 mb-3">
                Diversity, Equity, and Inclusion
              </h2>
              <p className="text-center mx-8">
                {" "}
                We follow DEI policy that promotes fair representation, equal
                opportunities, and respectful treatment of individuals from
                different backgrounds, ensuring a diverse workforce or
                community, fostering an inclusive environment, and striving for
                equitable outcomes for all.
              </p>
            </div>
          </li>
          <li className="w-1/2 md:w-1/2 lg:w-1/2 my-4 ">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
            />
            <div>
              <h2 className="text-2xl text-center mt-6 mb-3">
                Diversity, Equity, and Inclusion
              </h2>
              <p className="text-center mx-8">
                {" "}
                We follow DEI policy that promotes fair representation, equal
                opportunities, and respectful treatment of individuals from
                different backgrounds, ensuring a diverse workforce or
                community, fostering an inclusive environment, and striving for
                equitable outcomes for all.
              </p>
            </div>
          </li>
          <li className="w-1/2 md:w-1/2 lg:w-1/2 my-4">
            <img
              src="https://s-f.scribdassets.com/images/about/03_careers_B_icon_benefits_01_DEI.svg?510379e31"
              className="mx-auto"
              alt="diversity"
            />
            <div>
              <h2 className="text-2xl text-center mt-6 mb-3">
                Diversity, Equity, and Inclusion
              </h2>
              <p className="text-center mx-8">
                {" "}
                We follow DEI policy that promotes fair representation, equal
                opportunities, and respectful treatment of individuals from
                different backgrounds, ensuring a diverse workforce or
                community, fostering an inclusive environment, and striving for
                equitable outcomes for all.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Join;
