import { useEffect, useState } from 'react'


function useFetch(initialState, func, prm) {

  const [data, setData] = useState(initialState)

  useEffect(() => {
    const fetchData = async () => {
      if (prm) {
        const { data } = await func(prm)
        setData(data)
      }
      const { data } = await func()
      setData(data)
    }
    fetchData()
  }, [func, prm])

  return [data]
}

export default useFetch
