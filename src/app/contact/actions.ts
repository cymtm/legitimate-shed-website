
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function submitContactForm(data: unknown) {
  const result = contactSchema.safeParse(data);
  
  if (!result.success) {
    // This provides detailed validation errors in a structured way.
    return { success: false, error: result.error.format() };
  }

  // In a real application, you would send an email here.
  // For this demo, we'll just log it to the console.
  console.log("New contact form submission:");
  console.log(`- To: contact@legitimatesheddevs.com`);
  console.log(`- From: ${result.data.name} <${result.data.email}>`);
  console.log(`- Message: ${result.data.message}`);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true };
}
