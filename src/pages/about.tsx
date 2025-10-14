import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="pt-16">

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
           <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h2>
        </div>
      </div>
      <About />
    </main>
  );
}