import { useEffect, useState } from 'react'

export const useHttp = (url, dependancies) => {

  const [isLoading, setIsLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)

  useEffect(() => {
    console.log(`::> Sending Http request to ${url}`)
    setIsLoading(true)
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.')
        }
        return response.json()
      })
      .then(data => {
        setFetchedData(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }, dependancies)

  return [isLoading, fetchedData]
}
