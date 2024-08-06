import React, { useRef } from "react";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import { db } from "../../lib/firebase";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function getServerSideProps() {
  try {
    const q = query(
      collection(db, "patients"),
      orderBy("timestamp", "desc"),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    let data = null;

    querySnapshot.forEach((doc) => {
      data = doc.data();

      if (data.timestamp && data.timestamp.toDate) {
        data.timestamp = data.timestamp.toDate().toLocaleString(); // Ensure correct date conversion
      }
    });

    return {
      props: {
        data: data || null,
      },
    };
  } catch (error) {
    console.error("Error fetching latest patient: ", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

const Prev = ({ data }) => {
  const page1Ref = useRef();
  const page2Ref = useRef();

  if (!data) {
    return <div>No recent data found.</div>;
  }

  const {
    firstName,
    lastName,
    age,
    ageType,
    gender,
    mobile,
    kinName,
    kinRelation,
    kinPhoneNumber,
    address,
    state,
    paymentMethod,
    companyName,
    service,
    consultationType,
    doctor,
    charges,
    amountToBeCollected,
    paymentBy,
    referenceId,
    discountPercentage,
    discountAmount,
    discountReason,
    referrerName,
  } = data;

  // const generatePDF = async () => {
  //   const pdf = new jsPDF("p", "pt", "a4");

  //
  //   const scale = 2;

  //
  //   const canvas1 = await html2canvas(page1Ref.current, { scale });
  //   const imgData1 = canvas1.toDataURL("image/png", 1.0);
  //   pdf.addImage(
  //     imgData1,
  //     "PNG",
  //     0,
  //     0,
  //     pdf.internal.pageSize.getWidth(),
  //     pdf.internal.pageSize.getHeight(),
  //     undefined,
  //     "FAST"
  //   );

  //
  //   pdf.addPage();

  //
  //   const canvas2 = await html2canvas(page2Ref.current, { scale });
  //   const imgData2 = canvas2.toDataURL("image/png", 1.0);
  //   pdf.addImage(
  //     imgData2,
  //     "PNG",
  //     0,
  //     0,
  //     pdf.internal.pageSize.getWidth(),
  //     pdf.internal.pageSize.getHeight(),
  //     undefined,
  //     "FAST"
  //   );

  //
  //   pdf.save("opd-assessment.pdf");
  // };

  const generatePDF = async () => {
    const pdf = new jsPDF("p", "pt", "a4");

    const scale = 2;

    const canvas1 = await html2canvas(page1Ref.current, {
      scale,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
    });
    const imgData1 = canvas1.toDataURL("image/png", 1.0);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth1 = canvas1.width / scale;
    const imgHeight1 = canvas1.height / scale;
    const ratio1 = imgWidth1 / imgHeight1;
    let pdfImageWidth1 = pdfWidth;
    let pdfImageHeight1 = pdfImageWidth1 / ratio1;

    if (pdfImageHeight1 > pdfHeight) {
      pdfImageHeight1 = pdfHeight;
      pdfImageWidth1 = pdfImageHeight1 * ratio1;
    }

    pdf.addImage(
      imgData1,
      "PNG",
      0,
      0,
      pdfImageWidth1,
      pdfImageHeight1,
      undefined,
      "FAST"
    );

    pdf.addPage();

    const canvas2 = await html2canvas(page2Ref.current, {
      scale,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
    });
    const imgData2 = canvas2.toDataURL("image/png", 1.0);

    const imgWidth2 = canvas2.width / scale;
    const imgHeight2 = canvas2.height / scale;
    const ratio2 = imgWidth2 / imgHeight2;
    let pdfImageWidth2 = pdfWidth;
    let pdfImageHeight2 = pdfImageWidth2 / ratio2;

    if (pdfImageHeight2 > pdfHeight) {
      pdfImageHeight2 = pdfHeight;
      pdfImageWidth2 = pdfImageHeight2 * ratio2;
    }

    pdf.addImage(
      imgData2,
      "PNG",
      0,
      0,
      pdfImageWidth2,
      pdfImageHeight2,
      undefined,
      "FAST"
    );

    pdf.save("opd-assessment.pdf");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-lvh">
      <div className="w-full max-w-4xl">
        <button
          onClick={generatePDF}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Download PDF
        </button>
        {/* Page-1 */}
        <div className="p-8" ref={page1Ref}>
          <div className="main border border-black w-full">
            <div className="text-center">
              <h1 className="font-bold">SHRI SHYAM HOSPITAL</h1>
              <h2 className="font-bold">(A UNIT OF SS NIRMAYA PVT LTD)</h2>
              <h2 className="font-bold">OPD ASSESSMENT AND PRESCRIPTION</h2>
              <p>
                Gargh Colony Opp, BDM Hospital, NH 8 Kotputli, Jaipur
                (Rajasthan) - 303108
              </p>
              <p>
                <span className="font-bold">Contact No. </span>7230025111
              </p>
            </div>
            <hr className="border-black" />
            <div className="flex justify-center item-center">
              <h1 className="text-center font-bold border border-black mt-3 w-64 shadow-lg shadow-black">
                OPD CASE PAPER
              </h1>
            </div>
            <div className="flex justify-center text-sm">
              <div className="pinfo w-[90%] border border-black mt-3 flex flex-row justify-between">
                <div className="left flex flex-row justify-start gap-12 p-4">
                  <div className="prop">
                    <div className="font-bold">UHID </div>
                    <div className="font-bold">Patient Name</div>
                    <div className="font-bold">Age </div>
                    <div className="font-bold">Gender </div>
                    <div className="font-bold">Phone No. </div>
                    <div className="font-bold">Kin Name </div>
                  </div>
                  <div className="val flex flex-col justify-end">
                    <div>: {referenceId || ""}</div>
                    <div>
                      : {firstName} {lastName}
                    </div>
                    <div>
                      : {age} {ageType}
                    </div>
                    <div>: {gender}</div>
                    <div>: {mobile}</div>
                    <div>: {kinName}</div>
                  </div>
                </div>
                <div className="right flex flex-row gap-12 p-4">
                  <div className="prop">
                    <div className="font-bold">Date </div>
                    <div className="font-bold">Visit No.</div>
                    <div className="font-bold">Department </div>
                    <div className="font-bold">Doctor </div>
                    <div className="font-bold">Entitlement </div>
                    <div className="font-bold">Referral </div>
                  </div>
                  <div className="val flex flex-col justify-end">
                    <div>: {data.timestamp || ""}</div>
                    <div>: {referenceId || ""}</div>
                    <div>: {companyName || ""}</div>
                    <div>: {doctor || ""}</div>
                    <div>: {service || ""}</div>
                    <div>: {referrerName || ""}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <table>
                <thead>
                  <tr>
                    <th className="col1">Date Time and Assessment</th>
                    <th className="col2 text-center">
                      Consultant : <span className="font-normal"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Allergy</td>
                    <td>..</td>
                  </tr>
                  <tr>
                    <td>Chief Complaints and history of present illness</td>
                    <td>..</td>
                  </tr>
                  <tr>
                    <td>History of past illness</td>
                    <td>..</td>
                  </tr>
                  <tr>
                    <td>Habits and Lifestyle</td>
                    <td>
                      <div className="checkbox-group">
                        <label>
                          <input type="checkbox" /> Smoking
                        </label>
                        <label>
                          <input type="checkbox" /> Alcoholic
                        </label>
                        <label>
                          <input type="checkbox" /> Other
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Family History</td>
                    <td>..</td>
                  </tr>
                  <tr>
                    <td>Clinical Examination</td>
                    <td>..</td>
                  </tr>
                  <tr>
                    <td>Vitals</td>
                    <td>
                      <table className="nested-table">
                        <tbody>
                          <tr>
                            <td>BP</td>
                            <td>Pulse</td>
                            <td>RR</td>
                            <td>TEMP</td>
                            <td>SPO2</td>
                          </tr>
                          <tr>
                            <td>..</td>
                            <td>..</td>
                            <td>..</td>
                            <td>..</td>
                            <td>..</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>Nutritional Status</td>
                    <td>..</td>
                  </tr>
                  <tr>
                    <td>Investigation Result (if already done)</td>
                    <td>..</td>
                  </tr>
                  <tr>
                    <td>Investigation advised</td>
                    <td>
                      <table className="nested-table">
                        <tbody>
                          <tr>
                            <td colSpan="4">Hematology/Biochemistry</td>
                            <td colSpan="2">Radiology</td>
                          </tr>
                          <tr>
                            <td>CBC</td>
                            <td>.</td>
                            <td>LFT</td>
                            <td>..</td>
                            <td>X-Ray</td>
                            <td>..</td>
                          </tr>
                          <tr>
                            <td>RBS</td>
                            <td>..</td>
                            <td>RFT</td>
                            <td>..</td>
                            <td>USG</td>
                            <td>..</td>
                          </tr>
                          <tr>
                            <td>HIV</td>
                            <td>..</td>
                            <td>HBSAG</td>
                            <td>..</td>
                            <td>CT</td>
                            <td>..</td>
                          </tr>
                          <tr>
                            <td>Electrolyte</td>
                            <td>..</td>
                            <td>Others</td>
                            <td>..</td>
                            <td>MRI</td>
                            <td>..</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Page-2 */}
        <div className="p-8" ref={page2Ref}>
          <div className="main border  border-black w-full p-8">
            <h3 className="font-bold">Medication Advised</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th id="hdcntr" className="w-12">
                      Sr.No.
                    </th>
                    <th id="hdcntr">
                      Name of the Medicine Strength and Routine
                    </th>
                    <th id="hdcntr" className="w-24">
                      Morning
                    </th>
                    <th id="hdcntr" className="w-24">
                      Noon
                    </th>
                    <th id="hdcntr" className="w-24">
                      Evening
                    </th>
                    <th id="hdcntr" className="w-24">
                      Night
                    </th>
                    <th id="hdcntr" className="w-24">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                  <tr>
                    <td>6.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                  <tr>
                    <td>7.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                  <tr>
                    <td>8.</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                    <td>....</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="font-bold mt-3">
              Nutritional Advise / Educational Advise
            </h3>
            <br />
            <br />
            <br />
            <h3 className="font-bold mt-3">
              Follow-up /Revisit advised in OPD Date
            </h3>
            <h3 className="font-bold mt-3 text-center">Advise for Admission</h3>
            <div className="w-full border border-black h-32 font-bold text-sm p-2">
              For Medical Management (Instructions to RMO)
            </div>
            <div className="w-full border border-black h-8 font-bold text-[12px] p-2">
              For Procedure/Surgery, fill the following details
            </div>
            <table>
              <thead>
                <tr>
                  <th id="hdcntr">Name of the Procedure / Surgery</th>
                  <th id="hdcntr">Tentative date of Surgery</th>
                  <th id="hdcntr">Implants (if any)</th>
                  <th id="hdcntr">Specific instruments required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>....</td>
                  <td>....</td>
                  <td>....</td>
                  <td>....</td>
                </tr>
              </tbody>
            </table>
            <h1 className="w-full border border-black h-8 font-bold text-[12px] p-2">
              Hospital stay details
            </h1>
            <table>
              <thead>
                <tr>
                  <th id="hdcntr">Expected days in ICU</th>
                  <th id="hdcntr">Expected days in Wards</th>
                  <th id="hdcntr">Remarks (if any)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>....</td>
                  <td>....</td>
                  <td>....</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end">
              <h2 className="font-bold text-[12px]">Signature, RMC</h2>
            </div>
            <h1 className="font-bold text-[12px] p-2 text-center">
              Urgent Case:- In case of emergency Please contact on 7230025101
            </h1>
            <h1 className="font-bold text-[12px] p-2 text-center">
              आपातकालीन स्थिति में कृपया इस नंबर पर संपर्क करें : 7230025101
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prev;
