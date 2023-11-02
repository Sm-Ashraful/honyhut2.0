import HeroTop from "@/components/common/top-component";
import React from "react";

const TermsAndCondition = () => {
  const currentDate = new Date();
  const fiveDaysAgo = new Date();

  fiveDaysAgo.setDate(currentDate.getDate() - 8);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = fiveDaysAgo.toLocaleDateString("en-US", options);

  return (
    <div className="w-full  relative ">
      <HeroTop title={`Terms & Conditions`} />

      <div className="mt-6 md:mt-12 padding_inside">
        <p className="text-center  removeTextShadow ">
          Before using Our Service, please take the time to thoroughly read
          these terms and conditions.
        </p>
        <div className="w-full text-end  removeTextShadow ">
          Last Update: {formattedDate}
        </div>
        <div className="mt-12 leading-8 text-[12px] text-[#878787]">
          <h3 className="uppercase text-black">
            Definitions and Interpretation
          </h3>
          <div className="mt-6">
            <h4 className="text-black">Interpretation</h4>
            <p className="font-openSans  removeTextShadow ">
              The following circumstances establish the meanings of words whose
              first letter is capitalized. The following definitions are to be
              understood equally whether they are written in the singular or
              plural.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Definitions</h4>
            <p className="font-openSans  removeTextShadow ">
              In accordance with these Terms & Conditions:
            </p>
            <ul className="mt-3 font-openSans list-disc pl-6 ">
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Affiliates</strong> are organizations that control,
                  are controlled by, or have shared control with one or more
                  parties. To be considered in "control" requires to own at
                  least 50% of the shares, equity interests, or other securities
                  with voting rights for the election of directors or other
                  management positions.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Account</strong> refers to a special username and
                  password set up just for you to access our service or specific
                  features of it.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Device</strong> refers to anything that may access the
                  Service, such as a computer, a phone, or a tablet computer.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Goods</strong> on the Service that are for sale are
                  referred to as goods.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Orders</strong> are simply requests.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Promotions</strong> , sweepstakes, and other
                  promotions made available through the Service are referred to
                  as promotions.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Service</strong> refers to the Website.
                </span>
              </li>
              <li className="">
                <span className="leading-8  removeTextShadow ">
                  <strong>Terms and Conditions</strong> refer to these terms and
                  conditions that constitute the whole agreement between You and
                  the Company with regard to the use of the Service (sometimes
                  referred to as "Terms").
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>Third-party</strong> social media service or material
                  (including data, information, goods, or services) offered by a
                  third party and displayed, included, or made accessible by the
                  Service is referred to as a third-party social media service.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  <strong>You</strong> refer to the person who accesses or uses
                  the service, or, if applicable, the business or other legal
                  organization that the person is accessing or using on their
                  behalf.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Acknowledgment</h4>
            <p className="font-openSans leading-8  removeTextShadow ">
              <a href="/" className="text-black">
                Honyhut.com
              </a>{" "}
              is in charge of running this website. Honyhut.com is referred to
              as &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; throughout
              the website. You as the user are provided with this website, all
              available information, tools, and services by Honyhut.com, subject
              to your agreement to all terms, conditions.
            </p>
            <p className="font-openSans leading-8  removeTextShadow ">
              Your acceptance of and adherence to these Terms and Conditions
              will govern your access to and use of the Service. All users,
              visitors, and other individuals who use or use the Service are
              subject to these Terms and Conditions.
            </p>
            <p className="font-openSans leading-8  removeTextShadow ">
              You consent to be bound by these Terms and Conditions by accessing
              or using the Service. You are not permitted to access the Service
              if You Disagree With Any Portion Of These Terms And Conditions.
            </p>
            <p className="font-openSans leading-8  removeTextShadow ">
              You represent that you are over the age of 18. The Company does
              not permit those under 18 to use the Service.
            </p>
            <p className="font-openSans leading-8  removeTextShadow ">
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use, and disclosure of Your personal
              information when You use the Application or the Website and tells
              You about Your privacy rights and how the law protects You. Please
              read Our Privacy Policy carefully before using Our Service.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Online Store Terms</h4>
            <p className="font-openSans  removeTextShadow ">
              If you are using our online store, you must agree to the terms and
              conditions mentioned in this document. By using our website, you
              confirm that you are either an adult in your state. You cannot use
              our products for any illegal purpose and you must not violate any
              laws while using the Service. This includes laws related to
              copyrights.
            </p>
            <p className="font-openSans  removeTextShadow ">
              You must not transmit any kind of harmful code, such as worms or
              viruses. If any of the terms are violated, the Service reserves
              the right to immediately terminate your account or services.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black capitalize">general conditions</h4>
            <p className="font-openSans  removeTextShadow ">
              We reserve the right to refuse service to anyone for any reason at
              any time. You understand that your content (not including credit
              card information), may be transferred unencrypted and involve (a)
              transmissions over various networks; and (b) changes to conform
              and adapt to the technical requirements of connecting networks or
              devices. Credit card information is always encrypted during
              transfer over networks. You agree not to reproduce, duplicate,
              copy, sell, resell, or exploit any portion of the Service, use of
              the Service, or access to the Service or any contact on the
              website through which the service is provided, without express
              written permission by us. The headings used in this agreement are
              included for convenience only and will not limit or otherwise
              affect these Terms.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black capitalize">
              Accuracy,Completeness and Timeliness of Information
            </h4>
            <p className="font-openSans  removeTextShadow ">
              We strive to provide accurate, complete, and up-to-date
              information on this site. However, we do not guarantee the
              accuracy, completeness, or timeliness of the information. The
              material on this site is intended for general informational
              purposes only and should not be solely relied upon for making
              decisions. We recommend consulting primary, more accurate,
              complete, or timely sources of information before making any
              decisions. Any reliance you place on the material on this site is
              at your own risk
            </p>
            <p className="font-openSans  removeTextShadow ">
              We reserve the right to modify the contents of this site at any
              time, without any obligation to update the information provided.
              It is your responsibility to monitor changes to our site. Please
              keep in mind that this modified version should be reviewed by a
              legal professional to ensure it meets your specific requirements
              and complies with applicable laws and regulations
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black capitalize">
              Accuracy of Billing And Account Information
            </h4>
            <p className="font-openSans  removeTextShadow ">
              We are committed to maintaining the accuracy of billing and
              account information. You agree to provide current, complete, and
              accurate information for all billing and account details when
              making purchases on our store. It is your responsibility to
              promptly update any changes to your information, including email
              address, credit card numbers, and expiration dates, to ensure the
              accuracy and completion of your transactions. We cannot be held
              responsible for any delays or issues arising from inaccurate or
              incomplete billing and account information
            </p>
            <p className="font-openSans  removeTextShadow ">
              We reserve the right to refuse any order you place with us. In our
              sole discretion, we may also choose to limit or cancel quantities
              purchased per person, per household, or per order. These
              restrictions may apply to orders placed under the same customer
              account, the same credit card, and/or orders using the same
              billing and/or shipping address. If we make changes to or cancel
              an order, we will make reasonable efforts to notify you by
              contacting the email, billing address, or phone number provided at
              the time the order was placed. We also reserve the right to
              restrict or prohibit orders that, in our judgment, appear to be
              placed by dealers, resellers, or distributors
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black capitalize">
              Products or Services (if applicable)
            </h4>
            <p className="font-openSans  removeTextShadow ">
              As an online store, we may offer some products or services that
              are exclusively available through our website. Please note that
              these items may have limited quantities and are subject to our
              Return Policy for any returns or exchanges. We strive to
              accurately display the colors and images of our products on the
              website, although we cannot guarantee an accurate depiction on
              every computer monitor.
            </p>
            <p className="font-openSans  removeTextShadow ">
              While we reserve the right to limit sales to specific geographic
              regions or individuals, such limitations will be exercised on a
              case-by-case basis. Furthermore, we may limit the quantities of
              any products or services we offer, and all descriptions and
              pricing of our products are subject to change at any time without
              prior notice.
            </p>
            <p className="font-openSans  removeTextShadow ">
              We may discontinue any product at any time, and any offers for
              prohibited products or services will be void. While we do not
              guarantee that purchased items will meet your expectations or that
              any errors in the service will be corrected, we do strive to
              provide quality products and services to all of our customers.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black capitalize">
              USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
            </h4>
            <p className="font-openSans  removeTextShadow ">
              Welcome to HonyHut, the ultimate destination for premium quality
              male and female aphrodisiac products. We value the satisfaction of
              our customers and strive to provide the best possible service.
              Your feedback and comments are crucial to us and we encourage you
              to share your thoughts and experiences.
            </p>
            <p className="font-openSans  removeTextShadow ">
              We understand the importance of user feedback and constructive
              criticism. Your comments help us to improve our products and
              services and provide the best shopping experience to our
              customers. Whether it&#39;s a positive or negative review, we
              value your opinion. We believe that transparency is the key to a
              successful business and strive to maintain an open dialogue with
              our customers.
            </p>
            <p className="font-openSans  removeTextShadow ">
              At HonyHut, we welcome user submissions in the form of reviews,
              comments, and feedback. We believe that user-generated content
              adds value to our website and helps us to maintain a strong
              relationship with our customers. Your submissions not only help us
              to improve our products, but they also provide valuable insights
              to other customers who are interested in our products.
            </p>
            <p className="font-openSans  removeTextShadow ">
              We work hard to maintain the highest standards of quality and
              customer satisfaction. Your trust and confidence in our products
              are paramount to our success. We promise to listen to your
              feedback and suggestions and use them to continuously improve our
              products and services.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Placing Orders for Goods</h4>
            <p className="font-openSans  removeTextShadow ">
              By submitting an Order for goods through the Service, You
              represent and warrant that You are of legal age to form contracts
              under applicable law.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Your Information</h4>
            <p className="font-openSans  removeTextShadow ">
              Your name, your email address, your phone number, your credit card
              number, the expiration date of your credit card, your billing
              address, and your shipping information may be requested of you if
              you wish to place an Order for Goods made available through the
              Service.
            </p>
            <p className="font-openSans  removeTextShadow ">
              In connection with any Order, you represent and warrant that (i)
              you are authorized to use any credit or debit card(s) or other
              payment method(s); and (ii) the information you provide to us is
              accurate, correct, and full.
            </p>
            <p className="font-openSans  removeTextShadow ">
              By providing such information, You give us permission to share it
              with third parties involved in payment processing in order to
              speed up the fulfillment of Your Order.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-black">Order Cancellation</h4>
            <p className="font-openSans  removeTextShadow ">
              We retain the right, at any time, to refuse or revoke Your Order
              for a variety of causes, including but not restricted to:
            </p>
            <ul className="my-3 font-openSans list-disc pl-6">
              <li>
                <span className="leading-8  removeTextShadow ">
                  Availability of goods
                </span>
              </li>

              <li>
                <span className="leading-8  removeTextShadow ">
                  Errors in the Goods' descriptions or pricing
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  Errors in the Goods' descriptions or pricing
                </span>
              </li>
            </ul>
            <p className="font-openSans  removeTextShadow ">
              In the event that fraud or a questionable or unlawful transaction
              is detected, we retain the right to refuse or cancel Your Order.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Your Order Cancellation Rights</h4>
            <p className="font-openSans  removeTextShadow ">
              Only in line with these Terms and Conditions and Our Returns
              Policy may you return any items you purchase.
            </p>
            <p className="font-openSans  removeTextShadow ">
              These Terms and Conditions include our Returns Policy. To discover
              more about your right to cancel Your Order, please see our Returns
              Policy.
            </p>
            <p className="font-openSans  removeTextShadow ">
              Only goods returned in like-new condition will be eligible for
              your right to cancel an order. Include all of the product's
              documentation, wrappings, and instructions. Goods that are broken,
              not in the same condition as when you received them, or that have
              simply outlived their original packing won't be given a refund.
              Therefore, while the goods are in your control, you must take
              reasonable care of them.An order for the supply of any of the
              following goods cannot be canceled by you:
            </p>
            <ul className="my-3 font-openSans list-disc pl-6">
              <li>
                <span className="leading-8  removeTextShadow ">
                  The provision of goods that are plainly customized or produced
                  to your requirements.
                </span>
              </li>

              <li>
                <span className="leading-8  removeTextShadow ">
                  The provision of goods that, by nature, cannot be returned,
                  degrade quickly, or have passed their expiration dates.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  The provision of products that, by nature, are combined with
                  other goods after delivery.
                </span>
              </li>
              <li>
                <span className="leading-8  removeTextShadow ">
                  The provision of digital content that is not provided on
                  physical media if the performance has already started with
                  your express prior approval and you have recognized losing the
                  right to cancel.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="text-black">
              Availability, Errors, and Inaccuracies
            </h4>
            <p className="font-openSans  removeTextShadow ">
              Our selection of goods on the service is updated often. The Goods
              offered on Our Service could be overpriced, poorly represented, or
              unavailable, and We might have a hard time updating details about
              our Goods on the Service and in Our advertising on other websites.
            </p>

            <p className="font-openSans  removeTextShadow ">
              Any information, including pricing, product photos, specs,
              availability, and services, cannot and is not guaranteed to be
              accurate or comprehensive by us. We retain the right, at any time
              without prior notice, to modify or update the material as well as
              to rectify any mistakes, inaccuracies, or omissions.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Prices Policy</h4>
            <p className="font-openSans  removeTextShadow ">
              Before accepting an Order, the Company maintains the right to
              change its prices at any moment.
            </p>

            <p className="font-openSans  removeTextShadow ">
              In the event of any circumstance affecting delivery brought on by
              governmental action, variation in customs duties, increased
              shipping costs, higher foreign exchange costs, or any other matter
              beyond the control of the Company, the quoted prices may be
              revised by the Company after accepting an Order. You'll have the
              option to cancel your order in such a situation.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Payments</h4>
            <p className="font-openSans  removeTextShadow ">
              All acquired goods are subject to a single payment. A variety of
              payment options are accessible to you, including Visa, MasterCard,
              Affinity Cards, American Express Cards, and online payment options
              like PayPal.
            </p>

            <p className="font-openSans  removeTextShadow ">
              Payment card validation and authorization are handled by your card
              issuer for both credit and debit cards. We shall not be held
              responsible for any delivery delays or non-delivery of your order
              if we do not get the requisite authorization.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Promotions</h4>
            <p className="font-openSans  removeTextShadow ">
              Any Promotions made available through the Service may be governed
              by rules that are separate from these Terms.
            </p>

            <p className="font-openSans  removeTextShadow ">
              If You participate in any Promotions, please review the applicable
              rules as well as our Privacy policy. If the rules for a Promotion
              conflict with these Terms, the Promotion rules will apply.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">User Accounts</h4>
            <p className="font-openSans  removeTextShadow ">
              You must always give current, accurate, and comprehensive
              information when setting up an account with Us. The Terms will be
              broken if you don't comply, and Our Service may immediately
              terminate Your account as a result.
            </p>

            <p className="font-openSans  removeTextShadow ">
              Whether your password is for Our Service or a Third-Party Social
              Media Service, you are responsible for keeping the password that
              You use to access the Service secure and for any activities or
              acts carried out using Your password.
            </p>
            <p className="font-openSans  removeTextShadow ">
              You promise to keep your password a secret from anybody else. As
              soon as you become aware of any security breach or unauthorized
              use of Your account, you must contact Us right once.
            </p>
            <p className="font-openSans  removeTextShadow ">
              You are not permitted to use as a username the name of another
              person, business, or entity that is not legitimately yours to use,
              a name or trademark that is protected by the rights of a third
              party other than you without their consent, or a name that is
              otherwise vulgar, obscene, or objectionable.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Intellectual Property</h4>
            <p className="font-openSans  removeTextShadow ">
              The Service is and will continue to be the sole property of the
              Company and its licensors, including all of its original content
              (apart from Content that is supplied by You or other users),
              features, and functionality.
            </p>
            <p className="font-openSans  removeTextShadow ">
              The copyright, trademark, and other laws of the country, as well
              as other nations, provide protection for the Service.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Links to Other Websites</h4>
            <p className="font-openSans  removeTextShadow ">
              Links to third-party websites or services that are neither owned
              nor controlled by the Company may be found on our service.
            </p>
            <p className="font-openSans  removeTextShadow ">
              The Company disclaims all liability and has no control over any
              third-party websites or services, including their content, privacy
              policies, or practices. You further acknowledge and accept that
              the Company shall not be responsible or liable, directly or
              indirectly, for any injury or damage of any kind resulting from or
              alleged to result from the use of or reliance on any such content,
              goods, or services made available on or through any such web sites
              or services.
            </p>
            <p className="font-openSans  removeTextShadow ">
              We admonish You to carefully review the terms and privacy policies
              of any third-party websites or services you visit.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="">Termination</h4>
            <p className="font-openSans  removeTextShadow ">
              We reserve the right to instantly close or suspend Your Account
              for any reason, including without limitation if You violate these
              Terms and Conditions, without prior warning or responsibility.
            </p>
            <p className="font-openSans  removeTextShadow ">
              Your ability to use the Service will end immediately upon
              termination. You can simply stop using the Service if you want to
              cancel your Account.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Limitation of Liability</h4>
            <p className="font-openSans  removeTextShadow ">
              The Company and any of its suppliers' total liability under any
              provision of these Terms, regardless of any damages You may
              sustain, shall be limited to the amount actually paid by You
              through the Service, or $100 USD if You haven't made any purchases
              through the Service. To the fullest extent permitted by law, in no
              event shall the Company or its suppliers be liable for any
              special, incidental, indirect, or consequential damages of any
              kind (including, but not limited to, damages for loss of profits,
              loss of data or other information, for business interruption, for
              personal injury, for loss of privacy, or otherwise arising out of
              or connected to the use of or inability to use the Service,
              third-party software and/or third-party hardware). Because certain
              states do not permit the exclusion of implied warranties or the
              limitation of responsibility for incidental or consequential
              damages, some of the aforementioned restrictions might not be
              applicable. Each party's liability shall be confined to the
              fullest extent permissible by applicable law in such states.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">
              “AS IS” and “AS AVAILABLE” Disclaimer
            </h4>
            <p className="font-openSans  removeTextShadow ">
              The Service is offered "AS IS" and "AS AVAILABLE" to You, with all
              errors and imperfections, and without any type of guarantee. The
              Company expressly disclaims all warranties, whether express,
              implied, statutory, or otherwise, with respect to the Service,
              including all implied warranties of merchantability, fitness for a
              particular purpose, title, and non-infringement, as well as any
              warranties that may arise from course of dealing, course of
              performance, or usage of trade. This disclaimer is made on behalf
              of the Company, on behalf of its Affiliates, on behalf of those
              parties' respective licensors, and on behalf of those parties'
              respective service providers. Without limiting the aforementioned,
              the Company gives no assurance that the Service will satisfy Your
              needs, produce the intended results, be compatible with other
              software, applications, systems, or services, operate without
              interruption, meet any performance or reliability standards, be
              error-free, or that any errors or defects can be fixed. Without
              limiting the aforementioned, neither the Company nor any of the
              Company's providers make any representation or warranty of any
              kind, express or implied, as to (i) the operation or availability
              of the Service, or the information, content, materials, or
              products included thereon; (ii) that the Service will be
              error-free or uninterrupted; (iii) as to the accuracy,
              reliability, or currency of any information or content provided
              through the Service; or (iv) that the Service will be free of
              defects. Some or all of the above exclusions and limitations may
              not apply to You because some jurisdictions do not allow such
              exclusions or limitations on applicable statutory rights of a
              consumer, but in such a case, the exclusions and limitations set
              forth in this section shall apply to the maximum extent permitted
              by applicable law.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Governing Law</h4>
            <p className="font-openSans  removeTextShadow ">
              The Terms and Your Use of the Service shall be governed by the
              laws of the Country, except its provisions regarding conflicts of
              law. Other local, state, national, or international laws may also
              apply to how you use the application.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">Disputes Resolution</h4>
            <p className="font-openSans  removeTextShadow ">
              You consent to initially attempt an informal resolution of any
              issue or disagreement you may have with the Service by getting in
              touch with the Company.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">United States Legal Compliance</h4>
            <p className="font-openSans  removeTextShadow ">
              You affirm and warrant that (i) you do not reside in a nation
              under US embargo or one that the US government has designated as a
              "terrorist supporting" nation, and (ii) you are not included on
              any US government list of prohibited or restricted parties.
            </p>
          </div>
          <div className="mt-6">
            <h4 className="text-black">
              Changes to These Terms and Conditions
            </h4>
            <p className="font-openSans  removeTextShadow ">
              We retain the right to alter or amend these Terms at any moment,
              in Our sole discretion. We shall use reasonable efforts to give
              you at least 30 days' notice before any new terms go into effect
              if the adjustment is important. We reserve the right to judge what
              constitutes a substantial change.
            </p>
            <p className="font-openSans   removeTextShadow ">
              You agree to be bound by the amended terms if you access or use
              Our Service after such modifications take effect. Please
              discontinue using the website and the Service if, in whole or in
              part, You disagree with the revised terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
