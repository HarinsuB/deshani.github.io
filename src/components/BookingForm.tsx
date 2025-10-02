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
    const required = ['fullName', 'location', 'contactNumber', 'email', 'serviceType', 'engagement'];
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
Remark: ${formData.remark || 'None'}
Additional Details: ${formData.additionalDetails || 'None'}`;

    // Send WhatsApp message after showing success message
    setTimeout(() => {
      try {
        // Log the submission for debugging
        console.log('Service Request Submitted:', {
          timestamp: new Date().toISOString(),
          formData,
          message
        });

        // Open WhatsApp Web normally (customer will see the redirect)
        const owner = "94702313148";
        const text = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${owner}?text=${text}`;
        
        // Open WhatsApp in a new tab/window
        window.open(whatsappUrl, '_blank');

      } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        // Success message already shown to user
      }
    }, 2000); // 2-second delay to let customer see the success message

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        fullName: "",
        location: "",
        contactNumber: "",
        email: "",
        serviceType: "",
        engagement: "",
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
          <div className="space-y-3 mb-8">
            <p className="text-gray-700 text-xl font-medium animate-in slide-in-from-bottom-2 duration-500 delay-400">
              Your request has been submitted successfully!
            </p>
            <p className="text-green-600 text-lg font-semibold animate-in slide-in-from-bottom-2 duration-500 delay-500">
              ✨ Our team will contact you soon! ✨
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
          
          {/* Redirecting message with icon */}
          <div className="flex items-center justify-center space-x-2 text-gray-500 animate-in fade-in duration-500 delay-800">
            <svg className="w-5 h-5 text-green-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <p className="text-sm font-medium">
              Redirecting to WhatsApp...
            </p>
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