import { useRef } from "react";

function ImportTasks({ setTasks }) {
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const tasks = JSON.parse(event.target.result);
      if (!Array.isArray(tasks)) {
        alert("Invalid file format.");
        return;
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setTasks(tasks);
    };
    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        onChange={handleFileChange}
        accept=".json"
      />
      <button
        onClick={handleButtonClick}
        className="py-2 px-4 bg-yellow-600 hover:bg-yellow-700 rounded-md focus:outline-none"
      >
        Import
      </button>
    </div>
  );
}

export default ImportTasks;
