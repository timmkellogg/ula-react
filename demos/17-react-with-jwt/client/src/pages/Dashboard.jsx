import { useEffect, useState } from 'react'
import useAxiosWithAuth from '../hooks/useAxiosWithAuth'

const Dashboard = () => {
  const axiosWithAuth = useAxiosWithAuth()
  const [data, setData] = useState(null)
  
  useEffect(() => {
    axiosWithAuth.get('/api/protected')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data', error))
  }, [])

  return (
    <div>
      <h1>Protected Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  )
}

export default Dashboard
