import { z } from 'zod';

export const VariantSchema = z.object({
  type: z.string().min(1, 'Type cannot be empty'),
  value: z.string().min(1, 'Value cannot be empty'),
});

export const InventorySchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
});

export const ProductSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  description: z.string().min(1, 'Description cannot be empty'),
  price: z.number().positive(),
  category: z.string().min(1, 'Category cannot be empty'),
  tags: z.array(z.string().min(1, 'Tag cannot be empty')),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});

export type TProduct = z.infer<typeof ProductSchema>;
