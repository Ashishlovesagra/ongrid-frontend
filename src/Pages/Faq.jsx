import React, { useState } from "react";
import "../StyleSheets/About.css";
import { Link } from "react-router-dom";

function Faq() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);
  const [showAnswer7, setShowAnswer7] = useState(false);
  const [showAnswer8, setShowAnswer8] = useState(false);
  const [showAnswer9, setShowAnswer9] = useState(false);
  const [showAnswer10, setShowAnswer10] = useState(false);
  const [showAnswer11, setShowAnswer11] = useState(false);
  const [showAnswer12, setShowAnswer12] = useState(false);
  const [showAnswer13, setShowAnswer13] = useState(false);
  const [showAnswer14, setShowAnswer14] = useState(false);
  const [showAnswer15, setShowAnswer15] = useState(false);
  const [showAnswer16, setShowAnswer16] = useState(false);
  const [showAnswer17, setShowAnswer17] = useState(false);
  const [showAnswer18, setShowAnswer18] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const toggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };
  const toggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };
  const toggleAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  };
  const toggleAnswer4 = () => {
    setShowAnswer4(!showAnswer4);
  };
  const toggleAnswer5 = () => {
    setShowAnswer5(!showAnswer5);
  };
  const toggleAnswer6 = () => {
    setShowAnswer6(!showAnswer6);
  };
  const toggleAnswer7 = () => {
    setShowAnswer7(!showAnswer7);
  };
  const toggleAnswer8 = () => {
    setShowAnswer8(!showAnswer8);
  };
  const toggleAnswer9 = () => {
    setShowAnswer9(!showAnswer9);
  };
  const toggleAnswer10 = () => {
    setShowAnswer10(!showAnswer10);
  };
  const toggleAnswer11 = () => {
    setShowAnswer11(!showAnswer11);
  };
  const toggleAnswer12 = () => {
    setShowAnswer12(!showAnswer12);
  };
  const toggleAnswer13 = () => {
    setShowAnswer13(!showAnswer13);
  };
  const toggleAnswer14 = () => {
    setShowAnswer14(!showAnswer14);
  };
  const toggleAnswer15 = () => {
    setShowAnswer15(!showAnswer15);
  };
  const toggleAnswer16 = () => {
    setShowAnswer16(!showAnswer16);
  };
  const toggleAnswer17 = () => {
    setShowAnswer17(!showAnswer17);
  };
  const toggleAnswer18 = () => {
    setShowAnswer18(!showAnswer18);
  };

  return (
    <>
      <div id="faq">
        <section id="faq-header">
          <div className="termDiv2"></div>
          <h1>Frequently Asked Questions (FAQs)</h1>
        </section>
        <h4
          style={{ marginLeft: "8%", marginBottom: "-2%", marginTop: "10px" }}
        >
          <b>FAQs by client organizations</b>
        </h4>
        <section id="questions">
          <div className="container">
            <div className="question col-md-12">
              <div onClick={toggleAnswer} style={{ cursor: "pointer",transition:"ease-out" }}>
                <div className="faqQuestionNumber">1.</div>
                What is background verification (BGV)?
              </div>
              {showAnswer && (
                <div className="answer">
                  Background verification (BGV), also referred to as Background
                  check (BGC) or background screening is a process that
                  validates the credentials claimed by an individual going
                  through the BGV process. The individual can be an
                  employee,contractor, user, loan applicant, merchant, or a
                  candidate requesting to access any product or service. The BGV
                  process is a combination of checks, and the organization
                  requesting BGV generally selects the list of checks. Some
                  common checks include identity verification, address
                  verification, criminal record check, prior employment
                  verification, highest education verification, professional
                  reference checks, credit history checks, etc.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer1} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">2.</div>
                What is the potential impact of not doing background
                verification?
              </div>
              {showAnswer1 && (
                <div className="answer">
                  Not running background checks can lead to various risks for an
                  organization such as ending up with a bad hire, non-compliance
                  to ISO requirements, organization brand value, and
                  reputational risk, safety risks, as well as financial
                  liability risks.
                  <br />
                  <br />
                  In context of employment, not doing Background verification
                  (BGV) can lead to induction of a wrong hire (or a hire with a
                  malicious past), that can in turn adversely impact the team
                  culture, or even result in modern-day threats related to data
                  security.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer2} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">3.</div>
                How can we start BGV of our employees?
              </div>
              {showAnswer2 && (
                <div className="answer">
                  Getting started on OnGrid is a simple 3-step process:
                  <ol>
                    <li>
                      OnGrid team will demonstrate the platform. You can request
                      for a demo <Link to="/bookDemo">here</Link>
                    </li>
                    <li>
                      Agreement between OnGrid and client organization,
                      indicating the list of checks and mode of secure
                      information exchange.
                    </li>
                    <li>
                      There are four options of information (data, documents,
                      consent) exchange, and the client can choose one. These
                      options include:
                      <ol type="i">
                        <li>API integration,</li>
                        <li>Self-registration by the candidate,</li>
                        <li>Registration and request by authorized user, or</li>
                        <li>Bulk data format shared by the client</li>
                      </ol>
                    </li>
                  </ol>
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer3} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">4.</div>
                How much time does it take for BGV process to complete?
              </div>
              {showAnswer3 && (
                <div className="answer">
                  Most verifications that are primarily digital in nature, such
                  as ID verification, criminal record verification, credit score
                  check, bank account verification, eLockr reference check
                  (proprietary check only offered by OnGrid) get completed in{" "}
                  <b>less than 4hrs</b>. Some of these can even happen
                  instantly.
                  <br />
                  <br />
                  Verifications that require manual intervention or field
                  operational effort such as field address verification,
                  professional reference check, drug test get completed within{" "}
                  <b>24-48 hours</b>.
                  <br />
                  <br />
                  Some verifications that are dependent on a third party may
                  take longer, and it can go to <b>5-10 working days</b>. These
                  include education record (some universities and institutes),
                  prior employment verification, letter-based address
                  verification.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer4} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">5.</div>
                What checks can be conducted under BGV? Do you have fixed
                packages, or can we customize the checks as per our requirement?
              </div>
              {showAnswer4 && (
                <div className="answer">
                  OnGrid clients can choose from <b>over 30 checks</b>, that can
                  be added in a package. The package can be customized as per
                  client requirement.
                  <br />
                  <br />
                  The checks include ID verification (National IDs such as
                  Aadhaar, PAN, Driving License, Voter ID, Passport),
                  Court/criminal record verification, Address verification
                  (physical visit), Address verification (postal method),
                  Education record verification, Employment record verification,
                  Professional reference checks, Police verification through law
                  firm, Police verification through State department, Global
                  database check, Credit check, Drug test, Traffic violation
                  check, Curriculum Vitae (CV) validation, Vehicle registration
                  check, Directorship check, Bank account verification, GST
                  verification, Vendor due diligence, Medical registration
                  checks.
                  <br />
                  <br />
                  Your point of contact from OnGrid would also suggest the right
                  set of checks for you, depending on industry and candidate
                  profile, that will help you with both risk mitigation as well
                  as compliance.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer5} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">6.</div>
                Can the candidate register directly and upload data, documents
                and consent for BGV?
              </div>
              {showAnswer5 && (
                <div className="answer">
                  Yes. OnGrid offers a unique feature that allows the candidate
                  to sign-up and provide information, documents, and consent to
                  initiate background checks. All we need in such case from the
                  clients is the email ID of the candidate, using which we can
                  email the candidate a self-registration link. This modern
                  approach saves a lot of time and effort of executives running
                  the BGV program in an organization (Eg. HR managers, talent
                  acquisition leaders), and minimizes manual interventions.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer6} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">7.</div>
                Are documents required for BGV? Are scans good enough? How are
                documents collected for BGV?
              </div>
              {showAnswer6 && (
                <div className="answer">
                  Documents are required for conducting some checks. However,
                  many digital verifications (eg. ID verification, court record
                  verification, credit score check, bank account verification)
                  can be initiated without any document.
                  <br />
                  <br />
                  For checks where documents are required, scanned(soft) copy is
                  not only recommended but also preferred, as OnGrid offers a
                  completely paperless platform.
                  <br />
                  <br />
                  Documents can be collected using any of the following means:
                  <ol type="i">
                    <li>Upload during self-registration by the candidate,</li>
                    <li>
                      API integrations between OnGrid and client systems (eg.
                      HRMS / ATS),
                    </li>
                    <li>Upload by client user on OnGrid portal, or</li>
                    <li>Email from client user to OnGrid operations team.</li>
                  </ol>
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer7} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">8.</div>
                Candidate has not submitted complete information or documents.
                How can you help us?
              </div>
              {showAnswer7 && (
                <div className="answer">
                  OnGrid platform allows to send system-generated periodic
                  reminders to the candidates to complete registration on time,
                  and/or to provide any missing information or document(s). We
                  also provide our clients to choose an option in which we
                  follow-up with the candidates directly, so that they can
                  outsource the complete process to us, and not have to worry
                  about "insufficiency resolution".
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer8} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">9.</div>
                We want to verify our customers? Can we do that?
              </div>
              {showAnswer8 && (
                <div className="answer">
                  Yes, you can verify your users. This can be particularly
                  critical if you trust your users with money (eg. loan) or
                  assets (eg. car on rent, furniture on rent). Some common
                  verifications would include instant ID verification,
                  electronic KYC, instant credit check, instant face match
                  (between ID uploaded and selfie taken). We would be keen to
                  discuss other checks that may be relevant, depending on the
                  user and risk profile.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer9} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">10.</div>
                We want to verify our platform users (or providers or
                merchants). Can we do that?
              </div>
              {showAnswer9 && (
                <div className="answer">
                  Yes, you can verify your users. This can be particularly
                  critical if you trust your users, providers, or merchants with
                  money or expensive assets/ inventory (eg. eCommerce platform
                  delivery boys delivering expensive inventory like mobile
                  phones). Some common verifications would include instant ID
                  verification, electronic KYC, instant credit check, instant
                  face match (between ID uploaded and selfie taken), criminal
                  record check. We would be keen to discuss other checks that
                  may be relevant, depending on the candidate and risk profile.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer10} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">11.</div>
                What are the information security and privacy measures that
                OnGrid has in place?
              </div>
              {showAnswer10 && (
                <div className="answer">
                  OnGrid is an ISO 27001:2013 certified organization, that uses
                  highly secure state-of-the-art cloud infrastructure for
                  information security. OnGrid platform's community and
                  sub-community structure allows for strong access control
                  provisions. Hypersensitive data such as some national IDs are
                  stored using SHA-256 encryption and stored in secure data
                  vaults. Private information such as ID numbers, mobile
                  numbers, etc. are masked in the status and consolidated
                  reports. OnGrid also follows a practice of annual third party
                  audits by a CERT-IN certified auditor, on all the front end
                  and backend systems. No information on OnGrid can be shared
                  with anyone without explicit consent (authorization) of the
                  individual to whom such data or document belongs.
                  <br />
                  <br />
                  At OnGrid, our ambition is to follow the most stringent and
                  modern data privacy and security principles (eg. GDPR) and
                  respect the choice of the individual, who is the real owner of
                  her/his data. We want to follow this not just on paper, but in
                  spirit. In this regard, we have the provision where any
                  individual with information or document(s) on OnGrid can
                  request for edit or deletion of any/all information or
                  document(s) by sending an email to{" "}
                  <a href="mailto:contact@ongrid.in">contact@ongrid.in</a>, with
                  the subject "My data, my privacy".
                  <br />
                  <br />
                  While enhancing data security and privacy is always a work in
                  progress, we do welcome your suggestions on the same. Please
                  write to us at{" "}
                  <a href="mailto:contact@ongrid.in">contact@ongrid.in</a> if
                  you would like to help us enhance our data security and
                  privacy policies, procedures and technical controls.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer11} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">12.</div>
                How can we take consent from the candidates who go through BGV?
              </div>
              {showAnswer11 && (
                <div className="answer">
                  Consent is the key aspect in the background verification (BGV)
                  process. Consent can be captured via:
                  <ol>
                    <li>
                      <b>Digital Interface</b> - When the candidate is
                      submitting the information and documents during
                      self-registration on a web portal or an app.
                    </li>
                    <li>
                      <b>Physical Interface</b> - When the candidate signs a
                      document such (eg. An appointment letter). The consent
                      language can be included in the same.
                    </li>
                  </ol>
                  Consent is key to privacy adherence, and we recommend that the
                  consent must be wilful, and follow the principles of purpose
                  limitation. If possible, take the consent in the local
                  language as well, in addition to English.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer12} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">13.</div>I have a question
                which is not mentioned here. How do I reach out?
              </div>
              {showAnswer12 && (
                <div className="answer">
                  To know more about BGV and related concepts, or to learn more
                  about OnGrid's BGV offerings and methodologies, please send us
                  an email at{" "}
                  <a href="mailto:contact@ongrid.in">contact@ongrid.in</a>
                </div>
              )}
            </div>
          </div>
        </section>
        <h4 style={{ marginLeft: "8%", marginBottom: "-2%" }}>
          <b>FAQs by individuals or BGV candidates</b>
        </h4>
        <section id="questions">
          <div className="container">
            <div className="question col-md-12">
              <div onClick={toggleAnswer13} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">1.</div>I got a registration
                link from OnGrid, what needs to be done?
              </div>
              {showAnswer13 && (
                <div className="answer">
                  OnGrid triggers a self-registration link when either your
                  current or prospective employer (or possibly a service
                  provider) wishes to initiate a background verification to
                  validate the personal and/or professional claims. Kindly
                  complete the registration process at the earliest by clicking
                  on the link. If you face any issues in completing your
                  registration process or in uploading documents, please send us
                  an email at{" "}
                  <a href="mailto:support@ongrid.in">support@ongrid.in</a>
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer14} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">2.</div>I got a digital
                address verification link from OnGrid, what needs to be done?
              </div>
              {showAnswer14 && (
                <div className="answer">
                  The link is provided to complete your address verification as
                  part of the ongoing background verification process. Use your
                  smartphone to click on the link, verify your details, and
                  complete the process (this will include the capture of
                  relevant images and a short video from your smartphone). If
                  you face any issues in completing the process, please send us
                  an email at{" "}
                  <a href="mailto:support@ongrid.in">support@ongrid.in</a>
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer15} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">3.</div>I got an address
                verification letter from OnGrid, what needs to be done?
              </div>
              {showAnswer15 && (
                <div className="answer">
                  The letter is delivered to complete your address verification
                  as part of the ongoing background verification. Kindly share
                  the PIN mentioned in the letter to complete the process.The
                  PIN can be shared via multiple modes (SMS, WhatsApp,
                  web-portal). If you face any issues in completing the process,
                  please send us an email at{" "}
                  <a href="mailto:support@ongrid.in">support@ongrid.in</a>
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer16} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">4.</div>
                How does OnGrid protect my data and documents?
              </div>
              {showAnswer16 && (
                <div className="answer">
                  OnGrid is an ISO 27001:2013 certified organization, that uses
                  highly secure state-of-the-art cloud infrastructure for
                  information security. OnGrid platform's community and
                  sub-community structure allows for strong access control
                  provisions. Hypersensitive data such as some national IDs are
                  stored in an encrypted using SHA-256 encryption and stored in
                  secure data vaults. Private information such as ID numbers,
                  mobile numbers, etc. is masked in the status and consolidated
                  reports. OnGrid also follows a practice of annual third party
                  audits by a CERT-IN certified auditor, on all the front end
                  and backend systems. No information on OnGrid can be shared
                  with anyone without explicit consent (authorization) of the
                  individual to whom such data or document belongs.
                  <br />
                  <br />
                  At OnGrid, our ambition is to follow the most stringent and
                  modern data privacy and security principles (eg. GDPR), and
                  respect the choice of the individual, who is the real owner of
                  her/his data. We want to follow this not just on paper, but in
                  spirit.
                  <br />
                  <br />
                  While enhancing data security and privacy is always a work in
                  progress, we do welcome your suggestions on the same. Please
                  write to us at{" "}
                  <a href="mailto:partner@ongrid.in">partner@ongrid.in</a> if
                  you would like to help us enhance our data security and
                  privacy policies, procedures, and technical controls.
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer17} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">5.</div>
                My record is on OnGrid. I want to edit or delete it. How do I go
                about doing it?
              </div>
              {showAnswer17 && (
                <div className="answer">
                  At OnGrid, we have the provision where any individual with
                  information or document(s) on OnGrid can request for edit or
                  deletion of any/all information or document(s) by sending an
                  email to{" "}
                  <a href="mailto:contact@ongrid.in">contact@ongrid.in</a>, with
                  the subject "My data, my privacy".
                </div>
              )}
            </div>
            <div className="question col-md-12">
              <div onClick={toggleAnswer18} style={{ cursor: "pointer" }}>
                <div className="faqQuestionNumber">6.</div>I have a question
                which is not mentioned here. How do I reach out?
              </div>
              {showAnswer18 && (
                <div className="answer">
                  Please write to{" "}
                  <a href="mailto:contact@ongrid.in">contact@ongrid.in</a>, and
                  we will get back to you. We are available during working hours
                  from Monday to Friday, 0900 hours to 1800 hours, except on
                  public holidays. Request your patience in case there is a
                  delay in response. Each individual and each query is important
                  for us, and we will definitely get back!
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Faq;
