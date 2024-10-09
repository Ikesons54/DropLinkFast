import React, { useState, useCallback } from 'react'
import UrlInput from '../components/UrlInput'
import DownloadOptions from '../components/DownloadOptions'
import DownloadButton from '../components/DownloadButton'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import PremiumBanner from '../components/PremiumBanner'
import { Icons, IconName } from '../utils/icons'

const supportedPlatforms: { name: string; icon: IconName; color: string }[] = [
  { name: 'YouTube', icon: 'Youtube', color: 'text-red-500' },
  { name: 'Facebook', icon: 'Facebook', color: 'text-blue-600' },
  { name: 'Instagram', icon: 'Instagram', color: 'text-pink-500' },
  { name: 'Twitter', icon: 'Twitter', color: 'text-blue-400' },
  { name: 'TikTok', icon: 'TikTok', color: 'text-black dark:text-white' },
  { name: 'Vimeo', icon: 'Vimeo', color: 'text-blue-500' },
  { name: 'SoundCloud', icon: 'SoundCloud', color: 'text-orange-500' },
  { name: 'Dropbox', icon: 'Dropbox', color: 'text-blue-700' },
  { name: 'Google Drive', icon: 'GoogleDrive', color: 'text-green-500' },
]

function Home() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [downloadOptions, setDownloadOptions] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState('')

  const handleUrlSubmit = useCallback(async (submittedUrl: string) => {
    setUrl(submittedUrl)
    setIsLoading(true)
    setError(null)
    // Simulating API call to fetch download options
    setTimeout(() => {
      setDownloadOptions(['720p', '1080p', '4K', 'MP3'])
      setIsLoading(false)
    }, 1500)
  }, [])

  const handleDownload = useCallback(() => {
    // Implement download logic here
    console.log(`Downloading ${url} with option: ${selectedOption}`)
  }, [url, selectedOption])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">DropLinkFast</h1>
      <p className="text-center mb-4 text-gray-600 dark:text-gray-300">Paste your media URL below to download!</p>
      <UrlInput onUrlSubmit={handleUrlSubmit} />
      {isLoading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {downloadOptions.length > 0 && (
        <DownloadOptions
          options={downloadOptions}
          selectedOption={selectedOption}
          onOptionChange={setSelectedOption}
        />
      )}
      {url && <DownloadButton onClick={handleDownload} disabled={!selectedOption} />}
      <PremiumBanner />
      <div className="mt-6 sm:mt-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-800 dark:text-white">Supported Platforms</h2>
        <div className="grid grid-cols-3 gap-4">
          {supportedPlatforms.map((platform) => {
            const Icon = Icons[platform.icon]
            return (
              <div key={platform.name} className="flex flex-col items-center">
                <Icon className={`h-8 w-8 ${platform.color}`} />
                <span className="text-sm mt-1 text-gray-600 dark:text-gray-300">{platform.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home