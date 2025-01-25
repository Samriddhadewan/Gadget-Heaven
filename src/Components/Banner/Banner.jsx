import banner from "../../assets/banner.jpg"
const Banner = () => {
  const style = {
    backgroundImage : `url(${banner})`,
    backgroundSize : 'cover',
    backgroundPosition : "center",
  }
  return (
<div>
<div className="bg-[#9538E2] flex justify-center items-center text-center text-white h-[60vh]">
      <div className="">
      <h1 className="text-5xl font-bold ">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
      <p className="text-base font-thin my-4">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
      <button className="bg-white text-[#9538E2] font-bold text-xl py-4 px-5 rounded-4xl">Shop Now</button>
      </div>
    </div>
      
      <div className="h-[200px] md:h-[50vh] border-white border-2 mx-auto rounded-2xl -top-16 md:-top-28 relative w-[80%] md:w-[1100px] "style={style}>
      </div>
</div>
  )
}

export default Banner