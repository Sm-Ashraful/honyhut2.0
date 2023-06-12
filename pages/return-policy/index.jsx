import React from "react";
import HeroTop from "../../components/common/top-component";

const ReturnPolicy = () => {
  return (
    <div className="relative w-full top-[8.09rem] md:top-[9.4rem] lg:top-[9.3rem]">
      <HeroTop title="Return Policy" />
      <div className="mt-6 md:mt-12 padding_inside">
        <p className="text-center leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
          Honeyhut is complete client satisfaction. You may return your product
          within 90 days of the ship date* -{" "}
          <strong>WITH ORIGINAL PACKAGING</strong> - if you are dissatisfied for
          any reason. I have no questions! No costs for returns
        </p>
        <div className="mt-12 ">
          <h3 className="uppercase  font-jakarta">WITH ORIGINAL PACKAGING</h3>
          <p className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787] font-openSans">
            Send us an email at Support <strong>support@honyhut.com</strong>{" "}
            with your order number if we shipped you the wrong item, a damaged,
            or a faulty product, and we'll provide you a return authorization so
            we can fix the issue right away and at no cost to you.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="uppercase  font-jakarta">
            NOT SATISFIED WITH YOUR PRODUCT?
          </h3>
          <p className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787] font-openSans">
            Within 90 days after shipment, you may return your order to us in
            its original condition if you're not entirely happy. We will gladly
            replace, swap, or refund the purchase price for the item. Items that
            are not satisfactory may be returned within 90 days as long as they
            are unopened and in their original packaging. To ensure that you
            receive the greatest service, we recommend you to email us before
            returning a used item. We will provide a pre-paid return mailing
            label if the item is flawed or was damaged during transit. In all
            other circumstances, the customer is in charge of paying for return
            postage and may choose which carrier to use to send the item back.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="uppercase  font-jakarta">
            Exceptions / non-returnable items
          </h3>
          <div className="font-jakarta leading-8 text-lg">
            <p className="pb-3 leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
              All wholesale transactions are final, and nothing can be exchanged
              or refunded unless you get an item that is broken, faulty, or
              incorrect. If you have any inquiries or would like to swap the
              things, kindly get in contact. Contact our Customer Support staff
              to begin the return procedure. Please include the following
              details:
            </p>
            <ul className=" list-disc pl-6 leading-8">
              <li>
                <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                  Invoice number.
                </span>
              </li>
              <li>
                <span>
                  <li>
                    <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                      (If relevant) A video or picture of the defective goods
                    </span>
                  </li>
                </span>
              </li>
              <li>
                <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                  Full shipping address.
                </span>
              </li>
              <li>
                <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                  Telephone number for contact
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="uppercase  font-jakarta">REFUNDS</h3>

          <ul className=" list-disc pl-6 leading-8">
            <li>
              <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                Refunds are frequently processed within 14 to 21 business days,
                including the period for shipment. Your original method of
                payment (PayPal, credit card, debit card, etc.) will determine
                how your refund is given.
              </span>
            </li>
            <li>
              <span>
                <li>
                  <span className="leading-8 text-lg md:text-sm removeTextShadow text-[#878787]">
                    Defective products that are returned will receive a full
                    refund. Refunds for non-defective products do not cover any
                    shipping or handling costs, including those associated with
                    returns.
                  </span>
                </li>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
