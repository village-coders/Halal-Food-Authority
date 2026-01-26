import { CheckCircle, BarChart2, Newspaper, Users, FileText } from "lucide-react";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-header-grid">
          <div className="services-intro">
            <h2 className="services-title">Our Services</h2>
            <p>
              Our services include verifying compliance, conducting product audits, 
              reviewing documentation, and providing continuous support to ensure 
              products meet Islamic dietary regulations and industry standards.
            </p>
          </div>

          <div className="service-card">
            <CheckCircle className="service-icon" size={32} />
            <h3>Audits & Evaluation</h3>
            <p>
              Our team of skilled technical and sharia auditors conduct audits at 
              production sites to ensure adherence to Islamic dietary regulations 
              set out in our Halal Standards.
            </p>
          </div>

          <div className="service-card">
            <BarChart2 className="service-icon" size={32} />
            <h3>Products Evaluation</h3>
            <p>
              Our team of expert food technologists carefully reviews product 
              ingredients to guarantee they comply with halal consumption standards.
            </p>
          </div>

          <div className="service-card">
            <Newspaper className="service-icon" size={32} />
            <h3>Export Certification</h3>
            <p>
              The halal export certificate serves as a proof that items being sent 
              internationally meet the halal requirements set out according to our 
              Halal standards.
            </p>
          </div>

          <div className="service-card">
            <Users className="service-icon" size={32} />
            <h3>Group Certification</h3>
            <p>
              We offer group certifications for businesses with multiple sites, 
              ideal for those within a specific supply chain, industry cluster, 
              or geographical area.
            </p>
          </div>

          <div className="service-card">
            <FileText className="service-icon" size={32} />
            <h3>Inspections</h3>
            <p>
              Regular inspections are carried out to verify that production adheres 
              to the Halal standard and meets the requirements outlined in the 
              halal certification process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}