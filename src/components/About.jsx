import mosque from "../assets/mosque.webp";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">What is Halal Certification ?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Religious compliance is a key factor for Muslim consumers. The consumption
              of halal products is a religious obligation for Muslims, and Halal certification
              ensures that these products conform to the dietary laws outlined in the
              Quran and Hadith.
            </p>
            <p>
              Halal certification is a thorough procedure that verifies whether a product,
              facility, or service complies with Islamic dietary laws and practices. This
              certification is usually issued by a recognized halal certification body after
              rigorous assessments. The primary aim of halal certification is to provide
              Muslim consumers with confidence and assurance that the products they
              choose to buy and consume meet the strict requirements of halal guidelines
              ensuring their trust in the authenticity and purity of the products they use.
            </p>
          </div>
          <div className="about-image">
            <img src={mosque} alt="Mosque at sunset" />
          </div>
        </div>
      </div>
    </section>
  );
}