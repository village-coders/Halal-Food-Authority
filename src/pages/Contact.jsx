
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="cert-procedure ">
      <section className="cert-hero">
        <h1>Get In Touch</h1>
      </section>
      <section className="container contact-sec ">
        <div className="contact-form-container">
            <div className="left-side">
                <h2>You tell us, We listen.</h2>
                <p>Have questions about halal certification for your business? Reach out to the Halal Food Authority team for expert guidance and support.</p>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name <span>*</span></label>
                    <input type="text" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="text" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" name="companyName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea name="message"></textarea>
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
        <div className="contact-info">
            <div>
                
            </div>
            <div></div>
            <div></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
