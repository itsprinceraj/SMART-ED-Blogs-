import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages, isDark } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0  py-2 border-t-2 border-t-blue-400 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 border-blue-400 hover:bg-blue-400 hover:text-black py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 border-blue-400 hover:bg-blue-400 hover:text-black py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
        <p
          className={`text-md font-semibold ml-auto text-blue-400 ${
            isDark ? " text-blue-400" : " text-blue-500"
          }`}
        >
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
