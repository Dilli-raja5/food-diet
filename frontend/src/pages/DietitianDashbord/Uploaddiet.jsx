import { useState } from "react";

const UploadedPlans = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const plans = [
    {
      id: 1,
      clientName: "John Doe",
      date: "2025-05-30",
      planType: "pdf",
      pdfUrl: "/plans/john-doe-plan.pdf",
    },
    {
      id: 2,
      clientName: "Priya Sharma",
      date: "2025-05-28",
      planType: "text",
      pdfUrl: null,
    },
    // Add more entries here...
  ];

  const filteredPlans = plans.filter((plan) =>
    plan.clientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📄 Uploaded Plans</h1>

      {/* Search & Sort Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-2 sm:space-y-0">
        <input
          type="text"
          placeholder="Search client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-40"
        >
          <option value="newest">Sort: Newest</option>
          <option value="oldest">Sort: Oldest</option>
        </select>
      </div>

      {/* Plans List */}
      <div className="space-y-4">
        {filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="space-y-1">
              <p className="text-lg font-medium">👤 {plan.clientName}</p>
              <p className="text-sm text-gray-600">🗓️ Date: {plan.date}</p>
              {plan.planType === "pdf" ? (
                <p className="text-sm">
                  📎 Plan:{" "}
                  <a
                    href={plan.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Download PDF
                  </a>
                </p>
              ) : (
                <p className="text-sm text-gray-500 italic">📝 Text Plan Uploaded</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-4 sm:mt-0">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm">
                ✏️ Edit Plan
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                ❌ Delete Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadedPlans;
