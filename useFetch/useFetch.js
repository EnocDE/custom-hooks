/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

const localCache = {}

export function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isloading: true,
    hasError: false,
    error: null
  })

  useEffect(() => {
    getFetch()
  }, [url])

  const setLoadingState = () => {
    setState({
      data: null,
      error: null,
      hasError: false,
      isloading: true
    })
  }

  const getFetch = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isloading: false,
        hasError: false,
        error: null
      })
      return
    }

    setLoadingState()
    const response = await fetch(url)

    await new Promise(resolve => setTimeout(resolve, 1300))

    if (!response.ok) {
      setState({
        data: null,
        isloading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.message
        }
      })
      return
    }

    const data = await response.json()

    setState({
      data,
      isloading: false,
      hasError: false,
      error: null
    })
    localCache[url] = data
  }

  return {
    data: state.data,
    isloading: state.isloading,
    hasError: state.hasError,
  }
}
