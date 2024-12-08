export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 Elbrit. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </footer>
    )
  }
  