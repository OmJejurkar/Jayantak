import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you. Whether you have a question about our services, need a quote, or want to discuss a project, our team is ready to assist you.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>Pune, India</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+91 77580 26807</p>
            <p>+91 73506 24982</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>contact.jayantak@gmail.con</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <Input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

