export default function Features() {
    return (
      <section id="features" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Elbrit?</h2> {/* Set text to dark */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Fast Shipping</h3> {/* Dark text */}
            <p className="text-gray-600">We ensure quick and reliable delivery of your vitamins right to your doorstep.</p>
          </div>
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Organic Ingredients</h3> {/* Dark text */}
            <p className="text-gray-600">Our vitamins are made with 100% organic, natural ingredients.</p>
          </div>
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3> {/* Dark text */}
            <p className="text-gray-600">We offer 24/7 support to answer any of your questions or concerns.</p>
          </div>
        </div>
      </section>
    )
  }
  