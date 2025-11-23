import "./Experience.css";
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import qcImg from "../assets/qc.webp";
import xbrlImg from "../assets/xbrl.jpg";
import qaImg from "../assets/qa.jpg";
import { useEffect } from "react";

export const Experience = () => {

    useEffect (()=>{
            document.body.style.backgroundColor = "black"
        })

    const today = new Date();
    const options = {month:"short",year:"numeric"}
    const todayDate =  today.toLocaleDateString("en-US", options);
        
  return (
    <>
    {/* <Navbar /> */}
    <div className="experience-container">
      <h6 className="section-title">My Work Experience</h6>

      <div className="experience-grid">

        {/* XBRL Financial Associate */}
        {/* <div className="experience-card">
          <img src={xbrlImg} alt="XBRL Financial Analyst" className="experience-img" />
          <h3>Financial Associate</h3>
          <h4>Edgar E-File Solutions Pvt. Ltd.</h4>
          <h4>Chennai</h4>
          <p className="duration">July 2022 &ndash; Dec 2023</p>
          <ul className="description">
            <li>Analyzing the financial status of corporate companies in general.</li>
            <li>Analyzed complex financial statements in XBRL format to identify trends and facilitate investor decision-making.</li>
            <li>Handled SEC filings &#40;10-K, 11-K, 10-Q, 20-F, 6-K, S-1, S-4, POS AM, 8-K, F1, F-4&#41; for investment companies like Mutual Funds using XBRL tools &#40;CompSci, EasyView, Xverify&#41;.</li>
            <li>Familiar with XBRL-enabled reporting platforms and data analysis tools by GO XBRL Unifiye and compsci tools.</li>
            <li>Assessing companies for filing their quarterly and annual reports as per SEC regulatory compliance, requirements, and norms.</li>
            <li>Performed compliance reviews of financial reports submitted in XBRL format</li>
          </ul>
        </div> */}

        {/* Financial Analyst - QC */}
        {/* <div className="experience-card">
          <img src={qcImg} alt="Financial Analyst QC" className="experience-img" />
          <h3>Financial Analyst - QC</h3>
          <h4>Edgar E-File Solutions Pvt. Ltd.</h4>
          <h4>Chennai</h4>
          <p className="duration">Jan 2024 &ndash; Aug 2024</p>
          <ul className="description">
            <li>Maintaining accurate reporting by handling corporate files, mutual funds, and VIP projects in accordance with accounting standards such as US GAAP, IFRS, CEF, ECD, OEF, RR, and VIP taxonomies.</li>
            <li>Handled client communication for XBRL tagging clarifications and updates, and performed detailed &#8220;Quality checks &#40;QC&#41;&#8221; on instance documents to ensure compliance with taxonomy, accuracy, and regulatory standards.</li>
            <li>Taking on additional responsibility for handling the internal test file process, and handling queries from clients through email, chats, and phone calls.</li>
            <li>Worked closely with clients to prepare and validate XBRL and iXBRL reports to identify and resolved data inconsistencies within XBRL filings, ensuring compliance with SEC regulations."</li>
            <li>Performed quality checks on XBRL instance documents including block text and Level 4 footnotes.</li>
          </ul>
        </div> */}

        {/* Manual Tester - QA */}
        <div className="experience-card">
          <div  className="duration" style={{display:"flex", gap:"50px"}}>
            {/* <img src={qaImg} alt="Manual Tester QA" className="experience-img" /> */}
            <div style={{display:"flex", gap:"50px"}}>
              <h3>Manual Tester - QA</h3>
              <h4>Edgar E-File Solutions Pvt. Ltd.</h4>
            </div>
            <h4>Chennai - 600028</h4>
            <p>July 2022 &ndash; {todayDate} &#40;present&#41;</p>
          </div>
          <div style={{display:"flex", gap:"50px"}}>

          <ul className="description">
            <li>Performed manual testing for web-based financial applications.</li>
            <li>Prepared test summary reports and provided UAT support.</li>
            <li>Logged, tracked, and reported bugs using Jira & coordinated with developers for resolutions.</li>
            <li>Designed and executed manual test cases for web applications.</li>
            <li>Validated XBRL reports for accuracy in data tagging and taxonomy mapping.</li>
            <li>Performed retesting and closure validation on fixed bugs.</li>
          </ul>

          <img src={qaImg} alt="Manual Tester QA" className="experience-img" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
};