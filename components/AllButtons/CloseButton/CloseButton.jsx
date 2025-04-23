

export default function CloseButton({onClose}) {
  return (
    <button
      onClick={onClose}
      className="border border-gray-400 hover:border-gray-500 text-gray-700 dark:text-gray-200 font-semibold px-5 py-2 rounded-lg transition w-full sm:w-auto"
    >
      Cancel
    </button>
  )
}
