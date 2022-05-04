import Layout from "../../components/Layout";
import { color } from "../../constants/color";
import "./style.css";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div
        className="container"
        style={{
          margin: "80px auto 100px auto",
        }}
      >
        <div
          className="privacy-title text-center my-1 py-2 abs"
          style={{
            color: color.darkColor,
          }}
        >
          Privacy Policy
        </div>
        <div className="privacy-content">
          What information do we collect? We collect information from you when
          you register on our site, place an order, subscribe to our newsletter
          or fill out a form. When ordering or registering on our site, as
          appropriate, you may be asked to enter your: name, e-mail address,
          mailing address, phone number or social security number. What do we
          use your information for? Any of the information we collect from you
          may be used in one of the following ways: To personalize your
          experience (your information helps us to better respond to your
          individual needs) To improve customer service (your information helps
          us to more effectively respond to your customer service requests and
          support needs) To process transactions Your information, whether
          public or private, will not be sold, exchanged, transferred, or given
          to any other company for any reason whatsoever, without your consent,
          other than for the express purpose of delivering the purchased product
          or service requested. To administer a contest, promotion, survey or
          other site feature To send periodic emails The email address you
          provide for order processing may be used to send you information and
          updates pertaining to your order, in addition to receiving occasional
          company news, updates, related product or service information, etc.
          Note: If at any time you would like to unsubscribe from receiving
          future emails, send a mail to support@usdplug.com with the subject
          "REMOVE MY E-MAIL FROM YOUR DATABASE". How do we protect your
          information? We implement a variety of security measures to maintain
          the safety of your personal information when you enter, submit, or
          access your personal information. We offer the use of a secure server.
          All supplied sensitive/credit information is transmitted via Secure
          Socket Layer (SSL) technology and then encrypted into our Payment
          gateway providers database only to be accessible by those authorized
          with special access rights to such systems, and are required to keep
          the information confidential. After a transaction, your private
          information (credit cards, social security numbers, financials, etc.)
          will not be stored on our servers. Do we use cookies? Yes, we use
          cookies to personalise your experience. Do we disclose any information
          to outside parties? We do not sell, trade, or otherwise transfer to
          outside parties your personally identifiable information. This include
          trusted third parties who assist us in operating our website,
          conducting our business, or servicing you. But we may release your
          information when we believe release is appropriate to comply with the
          law, enforce our site policies, or protect ours or others rights,
          property, or safety. Third-party links Occasionally, at our
          discretion, we may include or offer third party products or services
          on our website. These third-party sites have separate and independent
          privacy policies. We, therefore, have no responsibility or liability
          for the content and activities of these linked sites. Nonetheless, we
          seek to protect the integrity of our site and welcome any feedback
          about these sites. Children's Online Privacy Protection Act Compliance
          We are in compliance with the requirements of COPPA (Children's Online
          Privacy Protection Act), we do not collect any information from anyone
          under 13 years of age. Our website, products and services are all
          directed to people who are at least 13 years old or older. Online
          Privacy Policy Only This online privacy policy applies only to
          information collected through our website and not to information
          collected offline.
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
