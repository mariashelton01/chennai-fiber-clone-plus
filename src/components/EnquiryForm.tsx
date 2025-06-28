import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  plan: string;
  message: string;
}

const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<EnquiryFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      plan: '',
      message: ''
    }
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    console.log('Form submitted:', data);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you for your enquiry! We will contact you soon.');
    form.reset();
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "918438015779";
    const message = "Hi! I'm interested in ACT Fibernet plans. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50" id="enquiry">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Connected Today</h2>
          <p className="text-xl text-gray-600">Fill out the form below and our team will contact you within 24 hours</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Quick Enquiry</CardTitle>
                <CardDescription>
                  Get the best internet plans for your home or business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        rules={{ 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit phone number'
                          }
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="location"
                        rules={{ required: 'Location is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your area/location" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="plan"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Interested Plan</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 75 Mbps, 150 Mbps" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any specific requirements or questions?" 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg hover-scale"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Call Us</p>
                        <p className="text-gray-600">8438015779</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors" onClick={handleWhatsAppClick}>
                      <div className="bg-green-100 p-3 rounded-full">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">WhatsApp Us</p>
                        <p className="text-gray-600">8438015779</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email Us</p>
                        <p className="text-gray-600">fibernet_thirunindravur_2025@yahoo.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Service Areas</p>
                        <p className="text-gray-600">Chennai, Thirunindravur, Thiruvallur, Kanchipuram, Chengalpattu</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose ACT Fibernet?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Fastest internet speeds up to 1 Gbps</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>99.9% uptime guarantee</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Free installation & setup</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Premium entertainment packages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
