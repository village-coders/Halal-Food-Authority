import React from 'react'
import flowchart from '../assets/Untitled-design-61.png'
import Procedure from '../assets/Certification-Procedure.jpeg'
import CertificationCTA from '../components/CertificationCTA'


const CertificationProcedure = () => {
  return (
    <main className='cert-procedure '>
        <section className="cert-hero container">
            <h1>HFA Certification Procedure</h1>
        </section>
        <section className="sec-1 container">
            <h2>Certification Flowchart</h2>
            <span></span>
            <p>A comprehensive visual guide that outlines each step of the halal certification process, providing clarity and insight into the entire journey to ensure compliance with halal standards.</p>
            <img src={flowchart} alt="Certification Flowchart" />
            <br />
            <h2>Certification Procedure for UAE Halal Scheme in compliance with UAE2055-2</h2>
            <span></span>
            <br />
            <img src={Procedure} alt="Certification Procedure" />
        </section>
        <CertificationCTA />
    </main>
  )
}

export default CertificationProcedure