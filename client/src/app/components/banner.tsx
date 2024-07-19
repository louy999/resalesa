import Image from "next/image";
const BannerHome = () => {
  return (
    <section className="fixed -z-10 w-full top-0 h-3/4  bg-[url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l backdrop-brightness-50"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen top-1/3 md:top-0  lg:items-center lg:px-8">
        <div className="max-w-xl select-none text-start  ltr:sm:text-left rtl:sm:text-right ">
          <h1 className="text-3xl font-extrabold md:text-7xl text-slate-200">
            Where Dreams Meet
            <span className=" font-extrabold text-primary200"> Reality!</span>
            {/* <strong >22Deal</strong> */}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
