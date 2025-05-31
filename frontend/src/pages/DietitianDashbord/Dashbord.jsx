import { useState } from "react";

const dummyClients = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 30,
    allergies: "Peanuts, Gluten",
    recipes: ["Oats Smoothie", "Veggie Bowl"],
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 45,
    allergies: "None",
    recipes: ["Grilled Chicken", "Keto Salad"],
  },
];

const DietitianDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [planText, setPlanText] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const openModal = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedClient(null);
    setPlanText("");
    setPdfFile(null);
  };

  const handleUpload = () => {
    console.log("Uploading for:", selectedClient.name);
    console.log("Text Plan:", planText);
    console.log("PDF:", pdfFile);
    // You would send this data to the server
    closeModal();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dietitian Dashboard</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dummyClients.map((client) => (
          <div key={client.id} className="bg-white p-5 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">{client.name}</h2>
            <p><strong>Age:</strong> {client.age}</p>
            <p><strong>Allergies:</strong> {client.allergies || "None"}</p>
            <div className="mt-2">
              <strong>Submitted Recipes:</strong>
              <ul className="list-disc ml-5 mt-1 text-sm text-gray-700">
                {client.recipes.map((recipe, index) => (
                  <li key={index}>{recipe}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openModal(client)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Upload Plan
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4">
              Upload Plan for {selectedClient?.name}
            </h3>

            <textarea
              rows="4"
              placeholder="Enter personalized nutrition plan..."
              value={planText}
              onChange={(e) => setPlanText(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DietitianDashboard;
