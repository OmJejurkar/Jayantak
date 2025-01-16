import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <section id="political-campaign" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Political Campaign Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Our expert team provides comprehensive political campaign management services, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Strategy development</li>
              <li>Voter outreach programs</li>
              <li>Media relations</li>
              <li>Campaign finance management</li>
              <li>Digital campaign execution</li>
            </ul>
            <Button>Get a Quote</Button>
          </div>
          <Image src="/placeholder.svg?height=300&width=400" alt="Political Campaign" width={400} height={300} className="rounded-lg" />
        </div>
      </section>

      <section id="photography" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image src="/placeholder.svg?height=300&width=400" alt="Photography" width={400} height={300} className="rounded-lg" />
          <div>
            <p className="mb-4">
              Our photography services cover a wide range of needs:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Event photography</li>
              <li>Portrait sessions</li>
              <li>Product photography</li>
              <li>Architectural and real estate photography</li>
              <li>Aerial photography</li>
            </ul>
            <Button>Book a Session</Button>
          </div>
        </div>
      </section>

      <section id="event-management" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Event Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              We offer end-to-end event management services for:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Corporate events and conferences</li>
              <li>Political rallies and town halls</li>
              <li>Weddings and social gatherings</li>
              <li>Product launches</li>
              <li>Charity fundraisers</li>
            </ul>
            <Button>Plan Your Event</Button>
          </div>
          <Image src="/placeholder.svg?height=300&width=400" alt="Event Management" width={400} height={300} className="rounded-lg" />
        </div>
      </section>

      <section id="digital-marketing" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Digital Marketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image src="/placeholder.svg?height=300&width=400" alt="Digital Marketing" width={400} height={300} className="rounded-lg" />
          <div>
            <p className="mb-4">
              Our digital marketing services include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) advertising</li>
              <li>Social media marketing</li>
              <li>Email marketing campaigns</li>
              <li>Content marketing strategies</li>
            </ul>
            <Button>Boost Your Online Presence</Button>
          </div>
        </div>
      </section>

      <section id="brand-consulting" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Brand Consulting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Our brand consulting services help you build a strong, recognizable brand:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Brand strategy development</li>
              <li>Visual identity creation</li>
              <li>Brand messaging and positioning</li>
              <li>Brand guidelines and style guides</li>
              <li>Brand audit and analysis</li>
            </ul>
            <Button>Elevate Your Brand</Button>
          </div>
          <Image src="/placeholder.svg?height=300&width=400" alt="Brand Consulting" width={400} height={300} className="rounded-lg" />
        </div>
      </section>

      <section id="content-writing" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Content Writing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image src="/placeholder.svg?height=300&width=400" alt="Content Writing" width={400} height={300} className="rounded-lg" />
          <div>
            <p className="mb-4">
              Our content writing services cover:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Website copy</li>
              <li>Blog posts and articles</li>
              <li>Press releases</li>
              <li>Social media content</li>
              <li>Whitepapers and e-books</li>
            </ul>
            <Button>Create Compelling Content</Button>
          </div>
        </div>
      </section>

      <section id="social-media-handling">
        <h2 className="text-3xl font-semibold mb-4">Social Media Handling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Our social media management services include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Social media strategy development</li>
              <li>Content creation and curation</li>
              <li>Community management</li>
              <li>Social media advertising</li>
              <li>Analytics and reporting</li>
            </ul>
            <Button>Manage Your Social Presence</Button>
          </div>
          <Image src="/placeholder.svg?height=300&width=400" alt="Social Media Handling" width={400} height={300} className="rounded-lg" />
        </div>
      </section>
    </div>
  )
}

