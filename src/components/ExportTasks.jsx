import { useState, useRef } from "react";

function ExportButton({ tasks }) {
  const [linkHref, setLinkHref] = useState(null);
  const linkRef = useRef();

  function handleExport() {
    if (tasks.length === 0) {
      alert("No tasks to export.");
      return;
    }
    const data = JSON.stringify(tasks, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    setLinkHref(url);
    setTimeout(() => {
      linkRef.current.click();
    }, 0);
  }

  return (
    <>
      <button
        className="py-2 px-4 bg-green-600 hover:bg-green-700 rounded-md focus:outline-none"
        onClick={handleExport}
      >
        Export
      </button>
      <a
        ref={linkRef}
        href={linkHref}
        download="tasks.json"
        className="hidden"
      ></a>
    </>
  );
}

export default ExportButton;
