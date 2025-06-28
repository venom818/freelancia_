// src/components/common/Spinner.jsx
export function Spinner() {
    return (
      <div className="flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }