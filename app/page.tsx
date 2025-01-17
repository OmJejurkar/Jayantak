import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Overlay for better text visibility */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <section className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Welcome to<br />Jayantak Media Solutions Pvt. Ltd.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transforming Digital Campaigns{" "}
              <strong>Engage, Influence, Inspire</strong>
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
            <div className=" p-6 rounded-lg backdrop-blur-sm">
              <p className="mt-4 text-gray-700 text-left">
                Creating a brand is just the beginning; sustaining and growing
                it requires continuous consultation and strategic innovation. In
                today’s dynamic market, expanding horizons and adapting to
                ever-changing scenarios are essential for long-term success.
                <br />
                <br />
                At Jayantak Media Solutions, we understand that innovation and
                development must go hand in hand with strategic approaches to
                tackle the evolving market landscape. Together, we create
                impactful campaigns, build resilient brands, and ensure your
                business stays ahead of the curve.
              </p>
            </div>
          </section>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-purple-800">
              Political Campaign Management
            </h2>
            <p className="mb-4 text-gray-700">
              Strategic planning and execution for successful political
              campaigns.
            </p>
            <Link
              href="/services#political-campaign"
              className="text-orange-500 hover:underline"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-purple-800">
              Photography
            </h2>
            <p className="mb-4 text-gray-700">
              Capturing moments that tell your story and resonate with your
              audience.
            </p>
            <Link
              href="/services#photography"
              className="text-purple-700 hover:underline"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-purple-800">
              Event Management
            </h2>
            <p className="mb-4 text-gray-700">
              Seamless planning and execution of events that leave a lasting
              impression.
            </p>
            <Link
              href="/services#event-management"
              className="text-orange-500 hover:underline"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-white">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Digital Marketing
              </h3>
              <p className="text-gray-700">Boost your online presence</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Brand Consulting
              </h3>
              <p className="text-gray-700">
                Build a strong, recognizable brand
              </p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Content Writing
              </h3>
              <p className="text-gray-700">Engaging content that converts</p>
            </div>
            <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Social Media Handling
              </h3>
              <p className="text-gray-700">
                Manage and grow your social presence
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-white">
            Why Choose Jayantak?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Holistic Approach
              </h3>
              <p className="text-gray-700">
                Comprehensive services to cover all your branding and marketing
                needs.
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Experienced Team
              </h3>
              <p className="text-gray-700">
                A dedicated team of professionals with diverse expertise.
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Innovative Strategies
              </h3>
              <p className="text-gray-700">
                Cutting-edge solutions to help you stay ahead of the curve
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Innovative Strategies
              </h3>
              <p className="text-gray-700">
                We prioritize your vision and goals in every project.
              </p>
            </div>
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Proven Results
              </h3>
              <p className="text-gray-700">
                We prioritize your vision and goals in every project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
