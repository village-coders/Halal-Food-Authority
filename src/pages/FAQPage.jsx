import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronDown } from "lucide-react";

const FAQPage = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(1);

  return (
    <div className="cert-procedure ">
      <section className="cert-hero">
        <h1>FAQs</h1>
      </section>
      <section className="container faq-sec ">
        <div className="faq-column">
          <p className="title">
            Find detailed answers to your questions about halal food
            certification and standards at the Halal Food Authority website. Our
            comprehensive FAQs cover everything from certification processes to
            compliance guidelines, making us your go-to source for accurate and
            reliable information on halal practices.
          </p>
          <div className="faq-card">
            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 1 ? "active" : ""}`}
                onClick={() => setOpen(open === 1 ? null : 1)}
              >
                What is Halal?
                <ChevronDown
                  className={`icon ${open === 1 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 1 && (
                <div className="faq-answer">
                  “Halal” means permissible in Islam, covering dietary laws,
                  ethics, and business. It includes lawful food preparation,
                  humane slaughter, and adherence to Islamic principles.
                </div>
              )}
            </div>
            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 2 ? "active" : ""}`}
                onClick={() => setOpen(open === 2 ? null : 2)}
              >
                What is mechanical slaughtering and does HFA accept it?
                <ChevronDown
                  className={`icon ${open === 2 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 2 && (
                <div className="faq-answer">
                  Mechanical slaughtering uses automated machinery for
                  efficiency but is not accepted by HFA. We require
                  hand-slaughtering by qualified Muslim slaughtermen to ensure
                  compliance.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 3 ? "active" : ""}`}
                onClick={() => setOpen(open === 3 ? null : 3)}
              >
                Does Halal Food Authority allow stunning of birds and animals?
                <ChevronDown
                  className={`icon ${open === 3 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 3 && (
                <div className="faq-answer border-bottom">
                  Yes, but with strict conditions. HFA prohibits captive bolt
                  and percussion stunning. We allow controlled electric stunning
                  with minimal amperage, verified by a veterinary surgeon, for
                  poultry and ovine meat.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 4 ? "active" : ""}`}
                onClick={() => setOpen(open === 4 ? null : 4)}
              >
                What are E Numbers?
                <ChevronDown
                  className={`icon ${open === 4 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 4 && (
                <div className="faq-answer border-bottom">
                  E Numbers are codes for food additives used in Europe. They
                  ensure additives meet rigorous EU standards and regulations,
                  covering colors (E100-E199), preservatives (E200-E299),
                  antioxidants (E300-E399), and more.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 5 ? "active" : ""}`}
                onClick={() => setOpen(open === 5 ? null : 5)}
              >
                What are Importance of E Numbers?
                <ChevronDown
                  className={`icon ${open === 5 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 5 && (
                <div className="faq-answer border-bottom">
                  E Numbers are crucial for halal certification as they identify
                  the source and composition of food additives, which can be
                  animal-derived, synthetic, or plant-based. Ensuring these
                  additives meet Islamic dietary laws is essential for halal
                  certification. Key factors include the source of additives,
                  potential processing aids, contamination risks, and alcohol
                  content. Reliable certification bodies assess these factors to
                  confirm compliance with halal standards.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 6 ? "active" : ""}`}
                onClick={() => setOpen(open === 6 ? null : 6)}
              >
                What is our technical team like?
                <ChevronDown
                  className={`icon ${open === 6 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 6 && (
                <div className="faq-answer border-bottom">
                  Our team of technical experts, Sharia scholars, food
                  technologists, and auditors is accredited by top international
                  halal organizations. We offer a comprehensive manual to help
                  businesses establish effective halal assurance systems.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 7 ? "active" : ""}`}
                onClick={() => setOpen(open === 7 ? null : 7)}
              >
                Who is our regulators?
                <ChevronDown
                  className={`icon ${open === 7 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 7 && (
                <div className="faq-answer border-bottom">
                  We are accredited by renowned international halal bodies,
                  including EIAC (UAE), HAK (Turkey), BPJPH (Indonesia), Jakim
                  (Malaysia), and recognized by SFDA (Saudi Arabia) and SASO.
                  Our services are also acknowledged by MOPH (Qatar), MUIS
                  (Singapore), CICOT (Thailand), and GIMDES (Turkey), and we are
                  accredited under the SMIIC standard and WHFC membership for
                  mutual recognition.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 8 ? "active" : ""}`}
                onClick={() => setOpen(open === 8 ? null : 8)}
              >
                What are halal cosmetics?
                <ChevronDown
                  className={`icon ${open === 8 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 8 && (
                <div className="faq-answer border-bottom">
                  Halal cosmetics are beauty and personal care products that
                  comply with Islamic law. They exclude alcohol, pork, and
                  forbidden derivatives, and any animal-derived ingredients must
                  come from halal-slaughtered animals. Produced under strict
                  hygiene standards, halal-certified brands ensure adherence to
                  religious and ethical criteria.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 9 ? "active" : ""}`}
                onClick={() => setOpen(open === 9 ? null : 9)}
              >
                What is the difference between authentic halal certification vs
                self-certification?
                <ChevronDown
                  className={`icon ${open === 9 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 9 && (
                <div className="faq-answer border-bottom">
                  Certified products are validated by independent organizations
                  to meet standards like halal, organic, or quality management.
                  They undergo third-party verification and regular audits to
                  ensure compliance. Self-certified products lack such
                  validation and traceability.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 10 ? "active" : ""}`}
                onClick={() => setOpen(open === 10 ? null : 10)}
              >
                Does HFA certify Nandos?
                <ChevronDown
                  className={`icon ${open === 10 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 10 && (
                <div className="faq-answer border-bottom">
                  No, HFA does not certify Nandos, however certain Nandos
                  restaurants may source their chicken from Halal approved
                  sources.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 11 ? "active" : ""}`}
                onClick={() => setOpen(open === 11 ? null : 11)}
              >
                Does animal/bird hear the Shahada or Tasmiya recited by the
                Slaughterman/men at slaughtering station?
                <ChevronDown
                  className={`icon ${open === 11 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 11 && (
                <div className="faq-answer border-bottom">
                  Books of Fatawas do not make it mandatory. One should be
                  mindful that the decibels in modern plants are so high at time
                  that even the slaughterman has to wear earplugs.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 12 ? "active" : ""}`}
                onClick={() => setOpen(open === 12 ? null : 12)}
              >
                Does HFA have Muslim Slaughterman/men performing slaughter?
                <ChevronDown
                  className={`icon ${open === 12 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 12 && (
                <div className="faq-answer border-bottom">
                  Yes, all slaughter is manually carried out by Muslim
                  slaughterman/men whilst Bismillahi-Allahu Akbar is recited.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 13 ? "active" : ""}`}
                onClick={() => setOpen(open === 13 ? null : 13)}
              >
                Does HFA accept mechanical (fixed blade) slaughter?
                <ChevronDown
                  className={`icon ${open === 13 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 13 && (
                <div className="faq-answer border-bottom">
                  No, all slaughter is done manually by hand to comply with HFA
                  guidelines.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 14 ? "active" : ""}`}
                onClick={() => setOpen(open === 14 ? null : 14)}
              >
                Does Halal Food Authority allow stunning of birds and animals?
                <ChevronDown
                  className={`icon ${open === 14 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 14 && (
                <div className="faq-answer border-bottom">
                  Yes, however, one has to be reminded that HFA has always
                  maintained “no stunning to kill”.
                  <br />
                  Captive Bolt Stunning – proscribed – prohibited 2.Percussion
                  Stunning – proscribed – prohibited (although above procedures
                  for cattle are allowed by some Ulema’s in Africa & Germany)
                  Halal Food Authority allows controlled electric
                  stun-with-minuscule amperage, with official Veterinary Surgeon
                  validating that the animal or the birds do not die prior to
                  slaughtering. There are two types of electric stunning that
                  Halal Food Authority approves:
                  <br />
                  Water-bath Stun – for Poultry Electric-Tong Stun – for Ovine
                  meat
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 15 ? "active" : ""}`}
                onClick={() => setOpen(open === 15 ? null : 15)}
              >
                Does HFA approve/allow slaughtering whilst Shahada is played on
                tape recorder in the back ground?
                <ChevronDown
                  className={`icon ${open === 15 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 15 && (
                <div className="faq-answer border-bottom">
                  The answer is emphatically ‘No’. All slaughterman/men must
                  recite Bismillahi-Allahu Akbar on each and every animal/bird.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 16 ? "active" : ""}`}
                onClick={() => setOpen(open === 16 ? null : 16)}
              >
                Why halal certification is required?
                <ChevronDown
                  className={`icon ${open === 16 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 16 && (
                <div className="faq-answer border-bottom">
                  Halal certification ensures products meet Islamic dietary laws
                  and boosts consumer trust by confirming adherence to halal
                  guidelines. It helps businesses access the growing market of
                  Muslim consumers and promotes transparency and traceability.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 17 ? "active" : ""}`}
                onClick={() => setOpen(open === 17 ? null : 17)}
              >
                How much does Halal certification cost?
                <ChevronDown
                  className={`icon ${open === 17 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 17 && (
                <div className="faq-answer border-bottom">
                  The cost of halal certification varies based on factors such
                  as the number of products, production site location, and
                  intended market. For a precise estimate, submit an
                  application, and we will provide a customized quote. As a
                  non-profit, our goal is to support businesses in the halal
                  market.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 18 ? "active" : ""}`}
                onClick={() => setOpen(open === 18 ? null : 18)}
              >
                What is the time frame for completing the certification process?
                <ChevronDown
                  className={`icon ${open === 18 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 18 && (
                <div className="faq-answer border-bottom">
                  The certification process typically takes 4 to 6 weeks,
                  depending on the promptness of document submission. For urgent
                  cases, we offer expedited processing options.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 19 ? "active" : ""}`}
                onClick={() => setOpen(open === 19 ? null : 19)}
              >
                Do we have a qualified team to carry out the job?
                <ChevronDown
                  className={`icon ${open === 19 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 19 && (
                <div className="faq-answer border-bottom">
                  Yes, we have a qualified team of food technologists, auditors,
                  Islamic scholars, inspectors, and slaughtermen. We hold
                  accreditations from leading halal organizations and offer a
                  comprehensive manual to guide businesses in halal assurance.
                </div>
              )}
            </div>

            <div className="faq-item border-bottom">
              <button
                className={`faq-question ${open === 20 ? "active" : ""}`}
                onClick={() => setOpen(open === 20 ? null : 20)}
              >
                Is our certificate acceptable in the Middle East?
                <ChevronDown
                  className={`icon ${open === 20 ? "rotate" : ""}`}
                  size={18}
                />
              </button>
              {open === 20 && (
                <div className="faq-answer border-bottom">
                  Yes, our certificate is accepted in the Middle East. We are
                  accredited by EIAC (UAE), HAK (Turkiye), BPJPH (Indonesia),
                  Jakim (Malaysia), and recognized by SFDA (Saudi Arabia) and
                  SASO. We also have mutual recognition with other international
                  bodies.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
