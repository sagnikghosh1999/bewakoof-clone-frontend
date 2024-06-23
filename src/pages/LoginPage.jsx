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
            <div className="flex flex-col gap-y-16">
              <div className="text-3xl font-bold ">
                Welcome to the world of Bewakoof®!
              </div>
              <img src="/assets/login.png" alt="login-page-img" />
            </div>
          </div>
          <div className="flex-1">Login form</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
