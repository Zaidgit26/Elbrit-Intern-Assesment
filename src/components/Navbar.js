export default function Navbar() {
    return (
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <img src="/images/logo.png" alt="Elbrit Logo" className="h-8" />
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    )
  }
  