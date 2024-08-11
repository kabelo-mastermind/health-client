import React from "react";
import doctor2 from "../../assets/doctor2.jpg"

const HealthcareSolutions = () => {
  return (
    <div id="solutions">
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Transforming Healthcare Experiences
          </h1>
          <p className="text-xl leading-relaxed text-gray-900 mt-6">
            Discover how our innovative solutions make managing healthcare appointments easier and more efficient.
          </p>
        </div>
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12 mt-12">
          <div className="relative lg:mb-12">
            {/* <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src={doctor2}
              alt="Decorative dots pattern"
            /> */}
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src={doctor2}
                alt="Healthcare appointment scheduling"
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        “Our patients love how simple and efficient it is to schedule appointments. The new system has really streamlined our operations.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Simplify Your Healthcare Management
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
              Our platform provides a seamless experience for managing healthcare appointments. From easy scheduling to secure patient data management, we ensure that both healthcare providers and patients have a smooth experience.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-gray-900">
              Benefit from our user-friendly interface, reliable support, and comprehensive features designed to enhance your healthcare service delivery and improve patient satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HealthcareSolutions;
