import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Jayantak</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Jayantak was founded with a vision to provide comprehensive solutions
          in political campaign management, photography, and event management.
          Our journey began with a passion for creating impactful experiences
          and has evolved into a full-service agency catering to diverse client
          needs.
        </p>
        <p>
          With years of experience and a team of dedicated professionals, we
          have successfully managed numerous political campaigns, captured
          countless memorable moments through our lenses, and organized events
          that leave lasting impressions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p>
          At Jayantak, our mission is to empower our clients with strategic
          solutions and creative excellence. We strive to deliver results that
          exceed expectations, whether it's through innovative campaign
          strategies, stunning visual storytelling, or flawlessly executed
          events.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/pravin.jpg?height=200&width=200"
              alt="John Doe"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pravin Shinde</h3>
            <p className="text-gray-600">Founder</p>
          </div>
          <div className="text-center">
            <Image
              src="/aniket.jpg?height=200&width=200"
              alt="Jane Smith"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Aniket Mhaske </h3>
            <p className="text-gray-600">Founder</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside">
          <li>Integrity in all our dealings</li>
          <li>Innovation in our approach</li>
          <li>Excellence in our deliverables</li>
          <li>Client satisfaction as our top priority</li>
          <li>Continuous learning and improvement</li>
        </ul>
      </section>
    </div>
  );
}
