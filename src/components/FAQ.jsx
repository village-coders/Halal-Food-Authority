import { useState } from "react";
import { ArrowBigLeft, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(1); // Set "What is Halal?" open by default to match image

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
                  What is Halal?
                  <ChevronDown className={`icon ${open === 7 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 7 && (
                  <div className="faq-answer ">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
                  </div>
                )}
              </div>
              <div className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 8 ? null : 8)}
                >
                  What is Halal?
                  <ChevronDown className={`icon ${open === 8 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 8 && (
                  <div className="faq-answer border-bottom">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
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
                <button className="faq-question" onClick={() => setOpen(open === 2 ? null : 2)}>
                  Why halal certification is required?
                  <ChevronDown className={`icon ${open === 2 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 2 && (
                  <div className="faq-answer">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen(open === 3 ? null : 3)}>
                  Why halal certification is required?
                  <ChevronDown className={`icon ${open === 3 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 3 && (
                  <div className="faq-answer">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen(open === 4 ? null : 4)}>
                  Why halal certification is required?
                  <ChevronDown className={`icon ${open === 4 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 4 && (
                  <div className="faq-answer">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen(open === 5 ? null : 5)}>
                  Why halal certification is required?
                  <ChevronDown className={`icon ${open === 5 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 5 && (
                  <div className="faq-answer">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen(open === 6 ? null : 6)}>
                  Why halal certification is required?
                  <ChevronDown className={`icon ${open === 6 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 6 && (
                  <div className="faq-answer">
                    “Halal” refers to what is permissible under Islamic law, 
                    including dietary laws, ethical considerations, and business practices. 
                    This encompasses lawful food preparation, humane methods of slaughtering 
                    animals, and adherence to Islamic principles throughout the entire process.
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