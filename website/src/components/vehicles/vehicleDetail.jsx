import React from 'react';
import { useLanguage } from '@/context/lunguageContext';
import { 
  Calendar,
  Car,
  Clock,
  Mail,
  MapPin,
  Phone,
  User
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { getVehicleById } from '@/data';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const VehicleDetailPage = () => {
  const { t } = useLanguage();
    const params = useParams();
    const router = useNavigate();
  const { id } = params;
  const vehicle = getVehicleById(parseInt(id));

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold text-gray-900">Vehicle not found</h1>
                <Button onClick={() => router('/vehicles')} className="mt-4">
                  Back to Listings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{vehicle.brand}</Badge>
                    <Badge variant="secondary">{vehicle.type}</Badge>
                  </div>
                </div>

                <div className="text-3xl font-bold text-blue-600">
                  ${vehicle.price.toLocaleString()}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-gray-400" size={20} />
                    <span>{vehicle.year}</span>
                  </div>
                  {vehicle.mileage && (
                    <div className="flex items-center gap-2">
                      <Clock className="text-gray-400" size={20} />
                      <span>{vehicle.mileage}</span>
                    </div>
                  )}
                  {vehicle.transmission && (
                    <div className="flex items-center gap-2">
                      <Car className="text-gray-400" size={20} />
                      <span>{vehicle.transmission}</span>
                    </div>
                  )}
                  {vehicle.fuelType && (
                    <div className="flex items-center gap-2">
                      <User className="text-gray-400" size={20} />
                      <span>{vehicle.fuelType}</span>
                    </div>
                  )}
                </div>

                {vehicle.features && vehicle.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map(feature => (
                    <Badge key={feature} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {vehicle.description && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{vehicle.description}</p>
                </div>
              )}

              <div className="space-y-4">
                <Button className="w-full" size="lg" onClick={() => router('/contact') }>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Seller
                </Button>
                
                <div className="flex flex-col space-y-2 text-sm text-gray-600">
                  <a href="mailto:tinashechikwaiti@gmail.com" className="flex items-center gap-2">
                    <Mail size={16} />
                    tinashechikwaiti@gmail.com
                  </a>
                  <a href="tel:078 393 5399" className="flex items-center gap-2">
                    <Phone size={16} />
                    078 393 5399
                  </a>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => router('/vehicles')}
              >
                Back to Listings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

};

export default VehicleDetailPage;

// About Page
const AboutPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-red-600 pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">About Us</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img src="/home.jpg" alt="Dealership" className="rounded-lg w-full" />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Your Trusted Vehicle Partner</h2>
                  <p className="text-gray-600">
                    With over 20 years of experience in the automotive industry, we pride ourselves on 
                    providing exceptional service and high-quality vehicles to our customers. Our 
                    commitment to transparency and customer satisfaction has made us a leading 
                    dealership in the region.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Cars Sold</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Quality Assurance</h4>
                      <p className="text-gray-600">Every vehicle undergoes thorough inspection and maintenance.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Customer First</h4>
                      <p className="text-gray-600">We prioritize customer satisfaction in every interaction.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Transparency</h4>
                      <p className="text-gray-600">Clear communication and honest dealings are our foundation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Contact Page


const ContactPage = () => {
  const { t } = useLanguage();
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-red-600 pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Visit Us</h3>
                        <p className="text-gray-600">123 Dealership Street, City, Country</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Phone className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-gray-600">+1 234 567 890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Mail className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-gray-600">info@dealership.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="min-h-[150px]" 
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


export { VehicleDetailPage, AboutPage, ContactPage };