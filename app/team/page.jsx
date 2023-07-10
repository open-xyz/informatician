'use client'
import { useEffect } from "react";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Contributors from "./Contributors";
import Image from "next/image";
import Link from "next/link";



const Team = (props) => {

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="team">
            {/*         
        <div className="team-members">
          <h2 className="team-title">Our Team</h2>
          <div className="team-member">
            <img src={teamImage} alt="Team Cartoon" className="team-member-image" />
          </div>
        </div>

        <div className="team-description">
          <p>
            We are a dedicated team of contributors working on an open-source project. Together, we are passionate about
            creating innovative solutions and driving positive change in the software development community.
          </p>
          <p>
            Our project welcomes contributions from developers around the world. With the collective effort of the open-source
            community, we strive to build a robust and feature-rich software that addresses the needs of our users.
          </p>
          <p>
            Join us in this exciting journey and be a part of shaping the future of our project. Together, we can make a
            difference!
          </p>
        </div>
      </div> */}



            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-28 mb-5 max-w-screen-2xl">
                <div className="" data-aos="fade-left" data-aos-duration="500">
                    <Image width={400}
                    height={400} loading='lazy' src={"/assets/mainPages/opensrc.webp"} className="team-member-image" alt="a group of people sitting on a large white sign" />
                </div>
                <div className="md:w-1/2 ml-5" data-aos="fade-right" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Our Team</h1>
                    <p className="team-description">
                        We are a dedicated team of contributors working on an open-source project. Together, we are passionate about
                        creating innovative solutions and driving positive change in the software development community.
                        Our project welcomes contributions from developers around the world. With the collective effort of the open-source
                        community, we strive to build a robust and feature-rich software that addresses the needs of our users. <br /><br />
                        <Link className="submit-btn text-white dark:text-black bg-black dark:bg-white" href="https://github.com/rohansx/informatician"> Join Us</Link>
                    </p>
                </div>


            </div>
            <hr className="my-16" />
            <Contributors />
        </div>

    );
};

export default Team;
