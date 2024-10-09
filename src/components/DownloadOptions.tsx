import React from 'react'

interface DownloadOptionsProps {
  options: string[]
  selectedOption: string
  onOptionChange: (option: string) => void
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  options,
  selectedOption,
  onOptionChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="quality-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Choose quality/resolution:
      </label>
      <select
        id="quality-select"
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
        className="block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DownloadOptions