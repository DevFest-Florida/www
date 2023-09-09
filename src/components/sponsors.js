import React from "react";
import GoogleLogo from "../assets/2023/sponsors/Google_2015_logo.png";
import BlackOrlandoTechLogo from "../assets/2023/sponsors/bot_male_master_logo_full_color_web_med.png";
import JetBrainsLogo from "../assets/2023/sponsors/jb_beam.png";
import SeminoleStateLogo from "../assets/2023/sponsors/logo-seminole-state-2line-cmyk-2019.png";

const SponsorLogos = () => (
  <div className="text-center my-20">
    <h2>Sponsors</h2>
    <p>Thank you to our sponsors for their generous support.</p>

    <section className="my-20">
      <h3 className="my-10 font-semibold">Partner</h3>

      <div className="">
        <a href="https://developers.google.com/" target={"_blank"}
          rel="noreferrer">
          <img
            src={GoogleLogo}
            alt="Google Logo"
            className="object-contain h-56 w-3/4 md:w-full px-2 mx-auto"
          ></img>
        </a>
      </div>

      <div className="">
        <a href="https://www.seminolestate.edu/" target={"_blank"}
          rel="noreferrer" >
          <img
            src={SeminoleStateLogo}
            alt="Seminole State College Logo"
            target={"_blank"}
            rel="noreferrer"
            className="object-contain h-56 w-3/4 md:w-full px-2 mx-auto"
          ></img>
        </a>
      </div>
    </section>

    {/* <section className="my-20">
      <h3 className="my-10 font-semibold">Diamond</h3>
      <div className="">
        <a href="https://www.cobuildlab.com/" target="blank">
          <img
            src={Cobuild}
            alt="Cobuild Logo"
            className="object-contain h-32 w-3/4 md:w-full px-2 mx-auto"
          />
        </a>
      </div>
    </section> */}

    {/* <section className="my-20">
      <h3 className="my-10 font-semibold">Gold</h3>
      <div className="">
        <a href="https://www.cobuildlab.com/" target="blank">
          <img
            src={Cobuild}
            alt="Cobuild Logo"
            className="object-contain h-32 w-3/4 md:w-full px-2 mx-auto"
          />
        </a>
      </div>
    </section> */}

    <section className="my-20">
      <h3 className="my-10 font-semibold">Silver</h3>
      <div className="">
        <a href="https://blackorlandotech.org/" target={"_blank"}
          rel="noreferrer">
          <img
            src={BlackOrlandoTechLogo}
            alt="Black Orlando Tech Logo"
            className="object-contain h-56 w-full px-2"
          />
        </a>
      </div>
    </section>

    {/* <section className="my-20">
      <h3 className="my-10 font-semibold">Copper</h3>
      <div></div>
    </section> */}

    {/* <section className="my-20">
      <h3 className="my-10 font-semibold">Startup</h3>
      <div className="flex w-full h-full justify-center">
        <a href="https://www.google.com">
          <img
            src={GoogleLogo}
            alt=" Logo"
            className="object-contain h-36 w-full"
          ></img>
        </a>
      </div>
    </section> */}

    <section>
      <h3 className="my-10 font-semibold">Supporters</h3>
      <div className="w-1/2 grid grid-cols-1 md:grid-cols-1 mx-auto">
        {/* <div className="">
          <a
            href="http://www.weareinit.org/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={INITLogo}
              alt="INIT Logo"
              className="object-contain h-36 w-full px-2"
            ></img>
          </a>
        </div> */}
        <div className="">
          <a
            href="https://www.jetbrains.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={JetBrainsLogo}
              alt="JetBrains Logo"
              className="object-contain h-36 w-full px-2"
            ></img>
          </a>
        </div>
      </div>
    </section>

    <div className="m-16">
      <a
        href={"mailto:" + process.env.REACT_APP_DEVFEST_EMAIL}
        className="text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4 my-5"
      >
        Become a Sponsor
      </a>
    </div>
  </div>
);

export default SponsorLogos;
