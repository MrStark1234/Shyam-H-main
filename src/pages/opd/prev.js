import React from "react";

const Prev = () => {
  return (
    <div>
      {/* Page-1 */}
      <div className="p-8">
        <div className="main border border-black w-3/5">
          <div className="text-center">
            <h1 className="font-bold">SHRI SHYAM HOSPITAL</h1>
            <h2 className="font-bold">(A UNIT OF SS NIRMAYA PVT LTD)</h2>
            <h2 className="font-bold">OPD ASSESSMENT AND PRESCRIPTION</h2>
            <p>
              Gargh Colony Opp, BDM Hospital, NH 8 Kotputli, Jaipur (Rajasthan)
              - 303108
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
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
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
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
                  <div>: </div>
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
      <div className="p-8">
        <div className="main border  border-black w-3/5 p-8">
          <h3 className="font-bold">Medication Advised</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th id="hdcntr" className="w-12">
                    Sr.No.
                  </th>
                  <th id="hdcntr">Name of the Medicine Strength and Routine</th>
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
  );
};

export default Prev;
