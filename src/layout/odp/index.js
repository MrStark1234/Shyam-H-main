import React from "react";
import Layout from "../layout";

const OPDRegistrationLayout = () => {
  const data = [
    {
      UHID: "123456",
      PATIENT: "John Doe",
      AGE: 30,
      ADDRESS: "123 Main St, Springfield, IL",
      MOBILE: "123-456-7890",
      USER: "johndoe",
    },
    // Add more data objects here if needed
  ];

  const tableKeys = [
    { label: "UHID", key: "UHID" },
    { label: "Patient", key: "PATIENT" },
    { label: "Age", key: "AGE" },
    { label: "Address", key: "ADDRESS" },
    { label: "Mobile", key: "MOBILE" },
    { label: "User", key: "USER" },
  ];

  const truncateText = (text, length = 20) => {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handleCellClick = (header, value, index) => {
    console.log(
      `Clicked cell: ${header.label}, Value: ${value}, Index: ${index}`
    );
  };

  const editMode = false;
  return (
    <Layout>
      <div className="px-5 py-5">
        <table className="min-w-full w-[100%] bg-white">
          <thead className="bg-gray-100">
            <tr>
              {tableKeys.map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-6 text-sm font-semibold text-left border-b border-gray-200"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {tableKeys.map((header, i) => (
                  <td
                    key={i}
                    className={`px-4 py-5 text-sm border-b border-gray-200 ${
                      editMode ? "cursor-pointer hover:bg-gray-200" : ""
                    }`}
                    title={item[header.key]}
                    onClick={() =>
                      handleCellClick(
                        { key: header.key, label: header.label },
                        item[header.key],
                        index
                      )
                    }
                  >
                    {header.key === "createdAt" ||
                    header.key === "lastInteractionDate" ||
                    header.key === "nextFollowUpDate"
                      ? formatDate(item[header.key])
                      : truncateText(item[header.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default OPDRegistrationLayout;
