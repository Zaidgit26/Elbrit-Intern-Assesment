export default function Testimonials() {
    return (
      <section id="testimonials" className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">What Our Customers Say</h2> {/* Set text to dark */}
        <div className="space-y-6">
          <div className="border p-6 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-gray-800">"Elbrit changed my life!"</p> {/* Dark text */}
            <p className="text-gray-600">- Jasmine Mehek</p> {/* Dark text */}
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-gray-800">"I feel healthier and more energetic!"</p> {/* Dark text */}
            <p className="text-gray-600">- Manigandan P</p> {/* Dark text */}
          </div>
        </div>
      </section>
    )
  }
  
