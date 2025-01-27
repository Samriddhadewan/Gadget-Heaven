import { Helmet } from "react-helmet";

const Faq = () => {
  return (
    <div className="container mx-auto mt-7">
      <Helmet>
        <title>FaQ</title>
      </Helmet>
        <div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium">Q1: What is Gadget Heaven?</div>
  <div className="collapse-content">
    <p>Gadget Heaven is your ultimate destination for the latest and greatest tech products, gadgets, and accessories.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q2: Do you ship internationally?</div>
  <div className="collapse-content">
    <p>Yes, we offer international shipping to most countries. Shipping costs and times may vary based on your location.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q3: What payment methods do you accept?</div>
  <div className="collapse-content">
    <p> We accept major credit cards (Visa, Mastercard, American Express), PayPal, and other secure payment gateways.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q4: How can I track my order?</div>
  <div className="collapse-content">
    <p>Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's platform.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q5: Can I cancel or modify my order?</div>
  <div className="collapse-content">
    <p>Orders can only be canceled or modified within the first 24 hours of placing the order. Please contact our support team at support@gadgetheaven.com for assistance.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q6: Are your gadgets genuine?</div>
  <div className="collapse-content">
    <p>Yes, we only sell authentic and brand-new products sourced from trusted manufacturers and distributors.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q7: Do your products come with a warranty?</div>
  <div className="collapse-content">
    <p>Yes, most of our products come with a manufacturer's warranty. The warranty duration is mentioned on the product page.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q8: How long does it take to process refunds?</div>
  <div className="collapse-content">
    <p> Refunds are processed within 5-7 business days after we receive the returned item.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q9:How can I contact your support team?</div>
  <div className="collapse-content">
    <p>You can reach us via email at support@gadgetheaven.com or through our live chat available on the website.</p>
  </div>
</div>
<div className="collapse bg-white">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Q10: Do you provide product setup assistance?</div>
  <div className="collapse-content">
    <p> Yes, we provide setup guides and troubleshooting tips for most of our gadgets. You can also contact our support team for help.</p>
  </div>
</div>
    </div>
  )
}

export default Faq