import React from "react";
import HeroTop from "../../components/common/top-component";

const ShippingPolicy = () => {
  return (
    <div className="relative w-full top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem] ">
      <HeroTop title="Shipping Policy" />
      <div className="mt-6 md:mt-12 padding_inside">
        <p className="text-center leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
          The processing and delivery times are as follows. We work hard to
          complete orders as promptly as we can. Please keep in mind that we are
          a human team, using human hands and human brains. We aren&#39;t
          flawless.
        </p>
        <div className="mt-12">
          <h3 className="uppercase tracking-[.2em] font-carmo">Processing</h3>
          <p className="removeTextShadow text-[#878787] text-lg leading-8 font-openSans">
            Order processing takes place during normal business hours, Monday
            through Friday. please allow 1-2 days for processing. Orders
            received after 2PM will be begin being processed the following
            business day.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="uppercase tracking-[.2em] font-carmo">Shipping</h3>
          <p className="removeTextShadow text-[#878787] text-lg leading-8 font-openSans">
            The 48 adjacent states are where we domestically ship. The length of
            shipping depends on where you are in the USA. You'll receive it
            quicker if you reside nearby in Michigan as opposed to Hawaii. The
            USPS website estimates 2 to 8 business days for domestic delivery,
            but does not provide a guarantee. The cost of rerouting or
            reshipping a shipment is not the responsibility of{" "}
            <a href="/">HonyHut</a> if it cannot be delivered because your
            shipping address was entered incorrectly.
          </p>
          <div className="mt-5">
            <p className="pb-3 font-carmo leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
              <strong>
                We provide three shipping choices for your convenience:
              </strong>
            </p>
            <ul className=" list-disc pl-6 leading-8">
              <li>
                <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                  FREE Standard Shipping: USPS or UPS SurePost, 5-8 business
                  days.
                </span>
              </li>
              <li>
                <span>
                  <li>
                    <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                      $4.99 for 4 Business Days for expedited shipping.
                    </span>
                  </li>
                </span>
              </li>
              <li>
                <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                  Express Shipping is $17.99 and takes 1-2 business days.
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-3 leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
            <span className="text-primary-red font-carmo ">*</span> Please take
            note that we do not provide P.O. boxes, Alaska, Hawaii, or Puerto
            Rico with Express or Expedited delivery choices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
