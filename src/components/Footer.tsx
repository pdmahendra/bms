import gp from "../assets/home/gp.png";
import as from "../assets/home/as.png";
import fb from "../assets/socials/ic_baseline-facebook.png";
import ig from "../assets/socials/mdi_instagram.png";
import tw from "../assets/socials/mdi_twitter.png";
function Footer() {
  return (
    <div className="w-full lg:px-[10%] px-[8vw] flex md:flex-row flex-col gap-4 justify-between align-middle py-20 bg-black text-white">
      <div className="flex md:gap-24 gap-8 md:flex-row flex-col md:text-left text-center md:w-[50%]">
        <div className="flex flex-col gap-4">
          <div className="text-[1.3rem] font-medium">Find Events</div>
          <div className="font-normal flex flex-col gap-2">
            <div>Events in Dublin</div>
            <div>Events in Cork</div>
            <div>Events in Limerick</div>
            <div>Events in Wicklow</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[1.3rem] font-medium">Find Events</div>
          <div className="font-normal flex flex-col gap-2">
            <div>Events in Dublin</div>
            <div>Events in Cork</div>
            <div>Events in Limerick</div>
            <div>Events in Wicklow</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-col md:text-left text-center md:w-[50%]">
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="md:text-[2.5rem] 2xl:text-[3rem] text-[1.8rem] font-semibold">
            JOIN US
          </div>
          <div className="flex justify-between md:flex-row flex-col gap-8 w-full">
            <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] w-full">
              Join our growing community of event enthusiasts and let Wave be
              your ultimate ticketing companion. Your next unforgettable
              experience is just a tap away!
            </div>
          </div>

          <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] w-full">
            <div className="w-full">
              Follow us on social media for exclusive updates and special
              offers!
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <img src={fb} alt="" loading="lazy" />
              <img src={ig} alt="" loading="lazy" />
              <img src={tw} alt="" loading="lazy" />
            </div>
          </div>

          <div className="md:pt-12 flex gap-4 md:justify-start text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:flex-row flex-col items-center align-middle justify-center w-full">
            <img src={gp} alt="" loading="lazy" />
            <img src={as} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
