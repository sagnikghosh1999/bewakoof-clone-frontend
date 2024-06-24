import { Link } from "react-router-dom";
import HeaderBottom from "../components/header/HeaderBottom";
import HeaderTop from "../components/header/HeaderTop";
import MobileHeader from "../components/header/MobileHeader";

const LoginPage = () => {
  return (
    <div className="h-[100vh]">
      <div className="fixed hidden sm:block top-0 z-50">
        <HeaderTop />
        <HeaderBottom />
      </div>
      <div className="fixed sm:hidden top-0 z-50">
        <MobileHeader />
      </div>
      <div className="mt-14 sm:mt-[4.1rem] lg:mt-[4.6rem] ">
        <div className="hidden md:flex h-[calc(100vh-4.1rem)] fixed bottom-0 left-0 w-full">
          <div className="flex-1 flex items-center justify-center h-full bg-gradient-to-t from-[#fff4c4] to-[#fff]">
            <div className="flex flex-col mx-auto gap-y-16">
              <h2 className="text-2xl lg:text-3xl font-bold ">
                Welcome to the world of Bewakoof
                <span className="relative align-baseline text-[40%] -top-[1.2em] m-[2px]">
                  ®
                </span>
                !
              </h2>
              <img src="/assets/login.png" alt="login-page-img" />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col items-center justify-center mt-[62px]">
              <h1 className="text-2xl leading-6 mb-[22px] font-bold ">
                Log in / Sign up
              </h1>
              <p className="text-lg text-[#a0a0a0] mb-[70px]">
                for Latest trends, exciting offers and everything Bewakoof
                <span className="relative align-baseline text-[40%] -top-[1.2em] m-[2px]">
                  ®
                </span>
                !
              </p>
            </div>
            <div className="w-[60%] mx-auto font-bold px-2">
              <div className="form-wrap">
                <div className="mb-2.5 relative">
                  <div className="relative bg-white rounded-[5px]">
                    <div className="absolute top-[13px] left-3 p-[0.5em] z-[21] rounded-[2px] bg-[#f5f5f5] w-auto h-[34px] min-w-[80px]">
                      <div className="flex items-center h-full justify-between ">
                        <div className="flex justify-start items-center">
                          <img
                            className="h-[18px] w-[18px]"
                            src="/assets/india-flag.png"
                            alt="country flag"
                          />
                          <span className="text-base">+91</span>
                        </div>
                      </div>
                    </div>
                    <input
                      className="w-full h-[60px] rounded-[5px] border-[0.5px] border-[#979797] pl-[100px]"
                      id="mobile_number"
                      type="tel"
                      name="mobile"
                      placeholder="Enter Mobile Number"
                      value=""
                      maxLength="10"
                      // dataPhonecode="+91"
                    />
                  </div>
                </div>
                <button className="h-[60px] w-full text-[20px] bg-[#42a2a2] tracking-[0.5px] rounded-[5px] uppercase text-white">
                  Continue
                </button>
              </div>
              <div className="soc-login mt-11">
                <div className="socialLogins w-full ">
                  <div className="flex w-[110%] -ml-[5%] my-6 justify-center items-center">
                    <div className="w-[50%] h-[1px] bg-[#ccc]"></div>
                    <p className="px-[7px] text-center text-base text-[#181818]">
                      OR
                    </p>
                    <div className="w-[50%] h-[1px] bg-[#ccc]"></div>
                  </div>
                  <div className="connectWithWrapper p-5 tracking-[1px]">
                    <div
                      id="web_email_login"
                      className="mb-2.5 h-[39px] rounded-[5.8px] bg-white text-[#5c5c5c] border border-[#aeaeae] uppercase flex items-center justify-center font-bold"
                    >
                      <img
                        src="https://images.bewakoof.com/web/carbon-email-1620039620.png"
                        alt="email img"
                        className="w-[18px] mr-2.5"
                      />{" "}
                      CONTINUE WITH EMAIL
                    </div>
                    <div className="soc flex w-full">
                      <div
                        id="web_google_login"
                        className=" h-[39px] rounded-[5.8px] bg-white text-[#5c5c5c] border border-[#aeaeae] uppercase flex items-center justify-center font-bold flex-1"
                      >
                        <img
                          src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                          className="w-[18px] mr-2.5"
                          alt="google img"
                        />{" "}
                        Google
                      </div>
                      <div
                        id="web_facebook_login"
                        className=" h-[39px] rounded-[5.8px] bg-white text-[#5c5c5c] border border-[#aeaeae] uppercase flex items-center justify-center font-bold ml-2 flex-1"
                      >
                        <img
                          src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                          className="w-[18px] mr-2.5"
                          alt="facebook img"
                        />{" "}
                        Facebook
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="termsAndConditions text-[12px] text-[#a0a0a0] leading-4 mt-[15px] font-normal">
                By creating an account or logging in, you agree with Bewakoof
                <span class="tradeMark relative align-baseline text-[40%] -top-[1.2em] m-[2px]">
                  ®
                </span>
                's{" "}
                <Link
                  className="text-[#42a2a2] font-semibold"
                  to="/terms-and-conditions"
                  target="_blank"
                >
                  Terms and Conditions{" "}
                </Link>
                and{" "}
                <Link
                  className="text-[#42a2a2] font-semibold"
                  to="/privacy-policy-and-disclaimer"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
