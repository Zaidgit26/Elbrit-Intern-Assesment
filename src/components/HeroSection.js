export default function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center bg-blue-500 text-white py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Elbrit Vitamins</h1>
        <p className="text-xl mb-6">Your source for the best vitamins for a healthy lifestyle.</p>
        <div className="flex gap-6">
          <a href="#get-started" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold">Get Started</a>
          <a href="#learn-more" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold">Learn More</a>
        </div>
      </section>
    )
  }
  