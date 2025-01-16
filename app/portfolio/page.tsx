import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Political Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Campaign 1" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">City Council Election 2022</h3>
            <p className="mb-4">Successful campaign management for a city council candidate, resulting in election victory.</p>
            <Button variant="outline">View Case Study</Button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Campaign 2" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mayoral Race 2023</h3>
            <p className="mb-4">Comprehensive strategy and execution for a mayoral candidate, leading to a successful campaign.</p>
            <Button variant="outline">View Case Study</Button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Campaign 3" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">State Senate Campaign 2021</h3>
            <p className="mb-4">Innovative digital strategy for a state senate candidate, resulting in increased voter engagement.</p>
            <Button variant="outline">View Case Study</Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Photography</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 1" width={200} height={200} className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 2" width={200} height={200} className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 3" width={200} height={200} className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 4" width={200} height={200} className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 5" width={200} height={200} className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 6" width={200} height={200} className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 7" width={200} height={200} className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" alt="Photo 8" width={200} height={200} className="rounded-lg" />
        </div>
        <div className="text-center mt-8">
          <Button>View Full Gallery</Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Event Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Event 1" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tech Conference 2023</h3>
            <p className="mb-4">Organized a large-scale tech conference with over 5000 attendees and 50 speakers.</p>
            <Button variant="outline">View Event Details</Button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Event 2" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Charity Gala 2022</h3>
            <p className="mb-4">Managed an elegant charity gala that raised over $1 million for a local non-profit organization.</p>
            <Button variant="outline">View Event Details</Button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Event 3" width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product Launch 2023</h3>
            <p className="mb-4">Executed a high-profile product launch event for a leading tech company, garnering significant media attention.</p>
            <Button variant="outline">View Event Details</Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-4">"Jayantak's expertise in political campaign management was instrumental in our success. Their strategic approach and dedication to our cause made all the difference."</p>
            <p className="font-semibold">- John Smith, City Council Member</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-4">"The photography services provided by Jayantak were exceptional. They captured the essence of our event beautifully, providing us with memories that will last a lifetime."</p>
            <p className="font-semibold">- Sarah Johnson, Event Organizer</p>
          </div>
        </div>
      </section>
    </div>
  )
}

