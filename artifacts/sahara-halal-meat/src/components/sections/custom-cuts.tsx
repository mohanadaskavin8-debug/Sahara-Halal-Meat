import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Scissors } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  meatType: z.string().min(1, "Please select a meat type"),
  details: z.string().min(10, "Please provide some details about the cut"),
});

export function CustomCuts() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      meatType: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Request sent successfully!", {
        description: "We'll call you shortly to confirm your custom order.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <section id="custom-cuts" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-primary mb-4">
              <Scissors size={20} />
              <span className="font-medium tracking-wider uppercase text-sm">Bespoke Butchery</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Cut Exactly to <br/>Your Spec.</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-md">
              Whether you need specific thicknesses for Argentinian BBQ, bone-in chunks for slow-cooked Moroccan Tagine, or bulk quantities for an event — tell us what you need.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center mt-0.5 shrink-0 text-primary text-xs">1</div>
                <div>
                  <strong className="block text-foreground mb-1">Submit your request</strong>
                  <span className="text-muted-foreground text-sm">Fill out the form with your preferred meat, cut style, thickness, and quantity.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center mt-0.5 shrink-0 text-primary text-xs">2</div>
                <div>
                  <strong className="block text-foreground mb-1">We confirm</strong>
                  <span className="text-muted-foreground text-sm">We'll review and call you to confirm price, weight, and pickup time.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center mt-0.5 shrink-0 text-primary text-xs">3</div>
                <div>
                  <strong className="block text-foreground mb-1">Freshly prepared</strong>
                  <span className="text-muted-foreground text-sm">Your order is freshly cut right before you arrive.</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-xl"
          >
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">Inquire About a Custom Cut</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(403) 555-0123" 
                    {...form.register("phone")}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Meat Type</Label>
                <Select onValueChange={(val) => form.setValue("meatType", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meat type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beef">Halal Beef</SelectItem>
                    <SelectItem value="lamb">Halal Lamb</SelectItem>
                    <SelectItem value="goat">Halal Goat</SelectItem>
                    <SelectItem value="chicken">Halal Chicken</SelectItem>
                    <SelectItem value="mixed">Mixed/Multiple</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.meatType && (
                  <p className="text-xs text-destructive">{form.formState.errors.meatType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Cut Specifications & Quantity</Label>
                <Textarea 
                  id="details" 
                  placeholder="E.g., 5lbs of beef ribs, cut 2 inches thick. Bone-in lamb shoulder for stew..." 
                  className="min-h-[120px]"
                  {...form.register("details")}
                />
                {form.formState.errors.details && (
                  <p className="text-xs text-destructive">{form.formState.errors.details.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full font-serif text-lg py-6" disabled={isSubmitting}>
                {isSubmitting ? "Sending Request..." : "Send Request"}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                No payment required now. We will contact you to finalize the order.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
