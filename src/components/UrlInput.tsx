import React, { useState } from 'react'
import { Link, Search } from 'lucide-react'

interface UrlInputProps {
  onUrlSubmit: (url: string) => void
}

const UrlInput: React.FC<UrlInputProps> = ({ onUrlSubmit }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url) {
      onUrlSubmit(url)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative mb-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Link className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="url"
        className="block w-full pl-10 pr-16 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Paste URL to download"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  )
}

export default UrlInput