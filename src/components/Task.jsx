function Task({ index, task, removeTask }) {
  return (
    <li
      key={index}
      className="flex items-center justify-between py-2 border-b border-gray-700"
    >
      <span className="flex-1">{task}</span>
      <button
        onClick={() => removeTask(index)}
        className="text-red-500 hover:text-red-600 focus:outline-none"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </li>
  );
}

export default Task;
