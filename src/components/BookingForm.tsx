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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

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

    // Open WhatsApp
    const owner = "94702313148";
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${owner}?text=${text}`, "_blank");

    // Show confirmation
    setIsSubmitted(true);

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

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-brand-green shadow-strong">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-teal mb-4">Request Submitted!</h3>
                <p className="text-brand-gray text-lg">
                  Your request has been submitted. We will contact you via phone call shortly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
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