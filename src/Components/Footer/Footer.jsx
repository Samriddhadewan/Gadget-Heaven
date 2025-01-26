
const Footer = () => {
  return (
    <footer className="footer mt-44 bg-white pt-10">
      <div className=" w-full">
        <h1 className="mx-auto text-[#09080F] text-4xl font-bold">Gadget heaven</h1>
        <p className="mx-auto text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
      </div>
          <div className=" footer flex justify-around  p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</div>
    </footer>
  )
}

export default Footer