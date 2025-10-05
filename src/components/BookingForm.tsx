import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    contactNumber: "",
    email: "",
    serviceType: "",
    engagement: "",
    bookingDate: "",
    numberOfHours: "",
    remark: "",
    additionalDetails: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const required = ['fullName', 'location', 'contactNumber', 'email', 'serviceType', 'engagement', 'bookingDate', 'numberOfHours'];
    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        toast({
          title: "Missing Information",
          description: `Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`,
          variant: "destructive"
        });
        return false;
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Show confirmation immediately
    setIsSubmitted(true);

    // Compose WhatsApp message
    const message = `New Booking Request - Deshani Cleaning & Hospitality

Name: ${formData.fullName}
Location: ${formData.location}
Contact: ${formData.contactNumber}
Email: ${formData.email}
Service: ${formData.serviceType}
Engagement: ${formData.engagement}
Booking Date: ${formData.bookingDate}
Number of Hours: ${formData.numberOfHours}
Remark: ${formData.remark || 'None'}
Additional Details: ${formData.additionalDetails || 'None'}`;

    // Log the submission for debugging
    console.log('Service Request Submitted:', {
      timestamp: new Date().toISOString(),
      formData,
      message
    });

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        fullName: "",
        location: "",
        contactNumber: "",
        email: "",
        serviceType: "",
        engagement: "",
        bookingDate: "",
        numberOfHours: "",
        remark: "",
        additionalDetails: ""
      });
      setIsSubmitted(false);
    }, 5000);
  };

  // Success popup overlay with enhanced animations
  const SuccessPopup = () => (
    <div className="fixed inset-0 backdrop-blur-success flex items-center justify-center z-50 animate-in fade-in duration-500">
      {/* Floating confetti elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-confetti delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-confetti delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-confetti delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-confetti delay-400"></div>
        <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-purple-400 rounded-full animate-confetti delay-600"></div>
      </div>
      
      <div className="bg-white rounded-3xl p-10 mx-4 max-w-lg w-full shadow-2xl animate-slide-up relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-50"></div>
        
        <div className="text-center relative z-10">
          {/* Animated checkmark with glow */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-float animate-pulse-glow shadow-lg">
            <svg
              className="w-12 h-12 text-white animate-in zoom-in duration-700 delay-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
                className="animate-draw-in"
                style={{
                  strokeDasharray: '100',
                  strokeDashoffset: '100',
                  animation: 'draw-in 1.2s ease-out 0.8s forwards'
                }}
              />
            </svg>
          </div>
          
          {/* Success message with staggered animation */}
          <div className="space-y-3 mb-6">
            <p className="text-gray-700 text-xl font-medium animate-in slide-in-from-bottom-2 duration-500 delay-400">
              Your request has been submitted successfully!
            </p>
            <p className="text-green-600 text-lg font-semibold animate-in slide-in-from-bottom-2 duration-500 delay-500">
              ✨ Click the button below to open WhatsApp and send your message! ✨
            </p>
          </div>
          
          {/* Enhanced loading animation */}
          <div className="flex justify-center items-center space-x-2 mb-6 animate-in fade-in duration-500 delay-600">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-bounce-enhanced"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-bounce-enhanced delay-100"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-bounce-enhanced delay-200"></div>
            </div>
          </div>
          
          {/* WhatsApp button for manual opening */}
          <div className="animate-in fade-in duration-500 delay-800">
            <Button
              onClick={() => {
                const owner = "97477651997";
                const message = `New Booking Request - Deshani Cleaning & Hospitality

Name: ${formData.fullName}
Location: ${formData.location}
Contact: ${formData.contactNumber}
Email: ${formData.email}
Service: ${formData.serviceType}
Engagement: ${formData.engagement}
Booking Date: ${formData.bookingDate}
Number of Hours: ${formData.numberOfHours}
Remark: ${formData.remark || 'None'}
Additional Details: ${formData.additionalDetails || 'None'}`;
                const text = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${owner}?text=${text}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 mx-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
              <span>Open WhatsApp</span>
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse delay-300"></div>
      </div>
    </div>
  );

  if (isSubmitted) {
    return (
      <>
        <section id="booking" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6">
                Book a Service
              </h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                Ready to get started? Fill out our quick form and we'll be in touch shortly
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="shadow-strong border-0 opacity-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-teal">Service Request</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-brand-teal font-medium">
                          Full Name *
                        </Label>
                        <Input
                          className="mt-1"
                          placeholder="Enter your full name"
                          disabled
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactNumber" className="text-brand-teal font-medium">
                          Contact Number *
                        </Label>
                        <Input
                          className="mt-1"
                          placeholder="Your phone number"
                          disabled
                        />
                      </div>
                    </div>
                    <Button
                      variant="cta"
                      size="lg"
                      className="w-full text-lg py-6 opacity-50"
                      disabled
                    >
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <SuccessPopup />
      </>
    );
  }

  return (
    <section id="booking" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6">
            Book a Service
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Ready to get started? Fill out our quick form and we'll be in touch shortly
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-strong border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-teal">Service Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-brand-teal font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="mt-1"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactNumber" className="text-brand-teal font-medium">
                      Contact Number *
                    </Label>
                    <Input
                      id="contactNumber"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                      className="mt-1"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-brand-teal font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="text-brand-teal font-medium">
                    Location / Address *
                  </Label>
                  <Textarea
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="mt-1"
                    placeholder="Your address or service location"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-brand-teal font-medium">Service Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="House Cleaning">House Cleaning</SelectItem>
                        <SelectItem value="Office Cleaning">Office Cleaning</SelectItem>
                        <SelectItem value="Kitchen Cleaning">Kitchen Cleaning</SelectItem>
                        <SelectItem value="Window Cleaning">Window Cleaning</SelectItem>
                        <SelectItem value="Room Cleaning">Room Cleaning</SelectItem>
                        <SelectItem value="Deep Cleaning">Deep Cleaning</SelectItem>
                        <SelectItem value="Laundry and Ironing">Laundry and Ironing</SelectItem>
                        <SelectItem value="Party Helpers/Cleaning">Party Helpers/Cleaning</SelectItem>
                        <SelectItem value="Babysitting">Babysitting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-brand-teal font-medium">Engagement *</Label>
                    <RadioGroup
                      value={formData.engagement}
                      onValueChange={(value) => handleInputChange('engagement', value)}
                      className="mt-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Part-Time" id="part-time" />
                        <Label htmlFor="part-time">Part-Time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Full-Time" id="full-time" />
                        <Label htmlFor="full-time">Full-Time</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bookingDate" className="text-brand-teal font-medium">
                      Booking Date *
                    </Label>
                    <Input
                      id="bookingDate"
                      type="date"
                      value={formData.bookingDate}
                      onChange={(e) => handleInputChange('bookingDate', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="numberOfHours" className="text-brand-teal font-medium">
                      Number of Hours *
                    </Label>
                    <Input
                      id="numberOfHours"
                      type="number"
                      value={formData.numberOfHours}
                      onChange={(e) => handleInputChange('numberOfHours', e.target.value)}
                      className="mt-1"
                      placeholder="e.g., 4"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="remark" className="text-brand-teal font-medium">
                    Remark (Optional)
                  </Label>
                  <Input
                    id="remark"
                    value={formData.remark}
                    onChange={(e) => handleInputChange('remark', e.target.value)}
                    className="mt-1"
                    placeholder="Any specific requirements"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalDetails" className="text-brand-teal font-medium">
                    Additional Details (Optional)
                  </Label>
                  <Textarea
                    id="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                    className="mt-1"
                    placeholder="Any other information you'd like to share"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full text-lg py-6"
                >
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;