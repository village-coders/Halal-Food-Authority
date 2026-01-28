import React from 'react';

const DepartmentalStructure = () => {
  const departments = [
    { title: "Quality Assurance", desc: "Vetting Initial Application", type: "primary" },
    { title: "Sharia Committee", desc: "Review & Approve Certification", type: "primary" },
    { title: "Auditing", desc: "Manage the Site Audits", type: "primary" },
    { title: "Food Technology", desc: "Approve ingredients/Products", type: "primary" },
    { title: "Training", desc: "Conduct Halal Training", type: "secondary" },
    { title: "Supervision", desc: "Site Supervisions", type: "secondary" },
    { title: "Admin", desc: "Office Operations", type: "secondary" },
    { title: "Finance", desc: "Financial Management of company and clients", type: "secondary" },
    { title: "IT", desc: "Manages IT operations of HFA", type: "tertiary" },
    { title: "Customer Service", desc: "Customer Satisfaction Excellence", type: "tertiary" },
    { title: "Board of Trustees", desc: "Governance and Oversight", type: "tertiary" },
    { title: "Impartiality Committee", desc: "Ensures fairness and unbiased decisions", type: "tertiary" },
  ];

  return (
    <section className="dept-section">
      <div className="dept-header">
        <h2>Our Departmental Structure</h2>
        <p>Learn About the Team at HFA</p>
      </div>

      <div className="dept-grid">
        {departments.map((dept, index) => (
          <div key={index} className={`dept-card ${dept.type}`}>
            <h3>{dept.title}</h3>
            <p>{dept.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentalStructure;