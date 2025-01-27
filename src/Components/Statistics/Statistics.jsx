
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const Statistics = () => {
  const data = useLoaderData()
  console.log(data)

  const chartData = data.map((product) => ({
    name: product.product_title,
    price: product.price
  }))


  return (
      <div className="my-5">
        <h1 className="text-4xl font-semibold">Statistics</h1>
            <div className=" h-[80vh] flex items-center">
      
      <div className="w-[80%] mx-auto  h-[400px]">
  <Helmet>
    <title>Statistics</title>
  </Helmet>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="price" fill="#9538E2" />
    </BarChart>
  </ResponsiveContainer>

  
</div>
</div>
      </div>

  )
}

export default Statistics