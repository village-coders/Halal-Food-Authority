import { useTranslation } from "react-i18next";
import { MdCall, MdMailOutline, MdLocationPin } from "react-icons/md";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="cert-procedure ">
      <section className="cert-hero">
        <h1>{t('contactPage.pageTitle')}</h1>
      </section>
      <section className="container contact-sec ">
        <div className="contact-form-container">
            <div className="left-side">
                <h2>{t('contactPage.leftSide.heading')}</h2>
                <p>{t('contactPage.leftSide.description')}</p>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">{t('contactPage.form.name.label')} <span>{t('contactPage.form.required')}</span></label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder={t('contactPage.form.name.placeholder')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t('contactPage.form.email.label')} <span>{t('contactPage.form.required')}</span></label>
                    <input 
                      type="text" 
                      name="email" 
                      placeholder={t('contactPage.form.email.placeholder')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">{t('contactPage.form.companyName.label')}</label>
                    <input 
                      type="text" 
                      name="companyName" 
                      placeholder={t('contactPage.form.companyName.placeholder')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('contactPage.form.message.label')} <span>{t('contactPage.form.required')}</span></label>
                    <textarea 
                      name="message" 
                      placeholder={t('contactPage.form.message.placeholder')}
                    ></textarea>
                </div>
                <div>
                    <button type="submit">{t('contactPage.form.submit')}</button>
                </div>
            </form>
        </div>
        <div className="contact-info">
            <div className="item">
                <MdCall />
                <p>{t('contactPage.contactInfo.phone')}</p>
            </div>
            <div className="item">
                <MdMailOutline />
                <a target="blank" href={`mailto:${t('contactPage.contactInfo.email')}`}>
                  {t('contactPage.contactInfo.email')}
                </a>
            </div>
            <div className="item">
                <MdLocationPin />
                <p>{t('contactPage.contactInfo.address')}</p>
            </div>
        </div>
        <div style={{width: "100%"}}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39710.82899295658!2d-0.2800011634826854!3d51.53290219855508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610145bd3e573%3A0x8e121720cdf3cc2b!2sThe%20Linen%20House!5e0!3m2!1sen!2sus!4v1770139765408!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Halal Food Authority Location Map"
            ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;