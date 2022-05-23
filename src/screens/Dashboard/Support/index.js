import DashboardLayout from "../../../components/DashboardLayout";
import "./style.css";
import SupportImg from "../../../assets/svg/SVG/support.svg";

const Support = () => {
  return (
    <DashboardLayout>
      <div className="container-fluid sc p-0 bg-white pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6 mb-5">
            <div className="sc-help text-center">
              Need help with your Account ?
            </div>
            <div className="sc-caption text-center py-2">
              Check out any of these answers to see if they will help
            </div>
            <div className="sc-img__cover my-5">
              <img src={SupportImg} alt="" className="sc-img" />
            </div>
            <div className="sc-text text-center py-4">
              Feel free to call, mail and message any of our lines We are always
              here to assist you.
            </div>
            <ul className="rounded-2 shadow p-2">
              <li className="text-primary">+2347018708634</li>
              <li>support@usdplug.com</li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-10 col-lg-6 col-xl-6">
            <div className="sc-a__title text-center pb-3">
              Frequently ask questions
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How to buy Crypto assets?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    To sell your crypto assets you need to verify your KYC with
                    any valid ID that tally with the name on your bank account,
                    and also upload your bank account. Then you'll be able to
                    buy Crypto assets
                  </div>
                </div>
              </div>
              {/* Two */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do I upload my KYC?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    You go to settings firstly and Fill i your personal details
                    and upload your valid ID then submit. Once your KYC is
                    approved you’ll get a mail from us
                  </div>
                </div>
              </div>

              {/* Three */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I upload my Bank account?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    You go to settings you’ll see a space where to fill in your
                    bank details which after your KYC has been approved, you
                    fill in your bank details and verify your name on the
                    account number before you upload.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How fast your Payment?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Following procedures once you place a sell Order your order
                    is been processed, Once it’s approved you get your payment
                    in your account within minutes
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Hope I won’t get Ripped?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Trade with confidence as we assure you high security on all
                    your transactions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    What type of Cryptocurrency do you accept?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    We accept Bitcoin , Ethereum , USDT and other Alt coins.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Can I Trade on the platform without my KYC being verified?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes of course you can trade on the platform by using the
                    Quick Trade option by your left, click on the WhatsApp
                    button for Quick trades.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Support;
