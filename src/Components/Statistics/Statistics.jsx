import { useLoaderData } from "react-router-dom"
import { Helmet } from "react-helmet";


const Statistics = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
    </div>
  )
}

export default Statistics