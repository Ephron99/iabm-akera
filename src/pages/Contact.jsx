import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 bg-[#fdfdf5]">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our cooperative or services? Reach out to us, and we'll be 
            happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MapPin className="text-green-700 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Our Location</h3>
                <p className="text-gray-600">Makera, Muhanga, Rwanda<br />Southen Province</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Phone className="text-green-700 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+250785828143</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="text-green-700 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Email Us</h3>
                <p className="text-gray-600">info@iabmmakera.rw</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Clock className="text-green-700 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Working Hours</h3>
                <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

       <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
  <iframe
    title="Muhanga District, Rwanda"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63786.27!2d29.742604!3d-1.9651644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xChIJn2G_uvXr3BkRfO-IzVhNQK4%3A0x0!2sMuhanga%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: '450px', borderRadius: '1rem' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
