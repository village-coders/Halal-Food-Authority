import { useState } from "react";
import { ArrowBigLeft, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(1);
  const [open2, setOpen2] = useState(1)

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-main-title">Frequently Asked Questions</h2>
          <div className="title-underline"></div>
          <p className="faq-subtitle">Answers to Your Halal Certification Questions.</p>
        </div>

        <div className="faq-grid">
          {/* Left Column: General Queries */}
          <div className="faq-column">
            <h3 className="column-title">General Queries:</h3>
            <div className="faq-card">
              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 1 ? null : 1)}
                >
                  What is Halal?
                  <ChevronDown className={`icon ${open === 1 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 1 && (
                  <div className="faq-answer">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 7 ? null : 7)}
                >
                  What is mechanical slaughtering and does HFA accept it?
                  <ChevronDown className={`icon ${open === 7 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 7 && (
                  <div className="faq-answer ">
                    Mechanical slaughtering uses automated machinery for efficiency but is not accepted by HFA. We require hand-slaughtering by qualified Muslim slaughtermen to ensure compliance.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 8 ? null : 8)}
                >
                  Does Halal Food Authority allow stunning of birds and animals?
                  <ChevronDown className={`icon ${open === 8 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 8 && (
                  <div className="faq-answer border-bottom">
                    Yes, but with strict conditions. HFA prohibits captive bolt and percussion stunning. We allow controlled electric stunning with minimal amperage, verified by a veterinary surgeon, for poultry and ovine meat.
                  </div>
                )}
              </div>

              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 2 ? null : 2)}
                >
                  What are E Numbers?
                  <ChevronDown className={`icon ${open === 2 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 2 && (
                  <div className="faq-answer border-bottom">
                    E Numbers are codes for food additives used in Europe. They ensure additives meet rigorous EU standards and regulations, covering colors (E100-E199), preservatives (E200-E299), antioxidants (E300-E399), and more.
                  </div>
                )}
              </div>

              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 3 ? null : 3)}
                >
                  What are Importance of E Numbers? 
                  <ChevronDown className={`icon ${open === 3 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 3 && (
                  <div className="faq-answer border-bottom">
                    E Numbers are crucial for halal certification as they identify the source and composition of food additives, which can be animal-derived, synthetic, or plant-based. Ensuring these additives meet Islamic dietary laws is essential for halal certification. Key factors include the source of additives, potential processing aids, contamination risks, and alcohol content. Reliable certification bodies assess these factors to confirm compliance with halal standards.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Queries */}
          <div className="faq-column">
            <h3 className="column-title">Corporate Queries:</h3>
            <div className="faq-card">
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 1 ? null : 1)}>
                  Why halal certification is required?
                  <ChevronDown className={`icon ${open2 === 1 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 1 && (
                  <div className="faq-answer">
                    Halal certification ensures that products meet Islamic dietary laws and boosts consumer trust by confirming adherence to halal guidelines. It helps businesses access the growing market of Muslim consumers and promotes transparency and traceability.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 2 ? null : 2)}>
                  How much does Halal certification cost?
                  <ChevronDown className={`icon ${open2 === 2 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 2 && (
                  <div className="faq-answer">
                    The cost of halal certification varies based on factors such as the number of products, production site location, and intended market. For a precise estimate, submit an application, and we will provide a customized quote. As a non-profit, our goal is to support businesses in the halal market.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 3 ? null : 3)}>
                  What is the time frame for completing the certification process?
                  <ChevronDown className={`icon ${open2 === 3 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 3 && (
                  <div className="faq-answer">
                    The certification process typically takes 4 to 6 weeks, depending on the promptness of document submission. For urgent cases, we offer expedited processing options.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 4 ? null : 4)}>
                  Do we have a qualified team to carry out the job?
                  <ChevronDown className={`icon ${open2 === 4 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 4 && (
                  <div className="faq-answer">
                    Yes, we have a qualified team of food technologists, auditors, Islamic scholars, inspectors, and slaughtermen. We hold accreditations from leading halal organizations and offer a comprehensive manual to guide businesses in halal assurance.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 5 ? null : 5)}>
                  Is our certificate acceptable in the Middle East?
                  <ChevronDown className={`icon ${open2 === 5 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 5 && (
                  <div className="faq-answer">
                    Yes, our certificate is accepted in the Middle East. We are accredited by EIAC (UAE), HAK (Turkiye), BPJPH (Indonesia), Jakim (Malaysia), and recognized by SFDA (Saudi Arabia) and SASO. We also have mutual recognition with other international bodies.
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        <button className="read-more">
            Read More <ArrowRight />
        </button>
      </div>
    </section>
  );
}