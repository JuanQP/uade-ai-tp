import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
})

export const addressSchema = z.object({
  address1: z.string().min(1),
  province: z.string().min(1),
  city: z.string().min(1),
  zip: z.string().min(1).max(8),
})

export const paymentSchema = z.object({
  cardName: z.string().min(1),
  cardNumber: z.string().regex(/^\d{4} \d{4} \d{4} \d{4}$/),
  expDate: z.string().length(5).regex(/\d{2}\/\d{2}/),
  cvv: z.string().regex(/\d{3}/),
})
