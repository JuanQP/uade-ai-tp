import { ImageUploader } from "@/features/UI/ImageUploader";
import { productSchema } from "@/schemas/schemas";
import * as uploadAPI from "@/services/uploadAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Center, Image, NativeSelect, Stack, Textarea, TextInput } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = productSchema
type ProductType = z.infer<typeof schema>

interface Props {
  initialValues?: ProductType;
  categories: Array<Category> | Array<string>;
  brands: Array<Brand> | Array<string>;
  loading: boolean;
  onSubmit: (product: ProductType) => void;
}

const DEFAULT_VALUES: ProductType = {
  image: '',
  name: '',
  category: '',
  brand: '',
  productModel: '',
  price: 1,
  stock: 1,
  description: '',
}

export function ProductForm({ brands, categories, loading = false, initialValues = DEFAULT_VALUES, onSubmit }: Props) {

  const { control, register, formState: { errors }, handleSubmit } = useForm<ProductType>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  })
  function handleFormSubmit(values: ProductType) {
    onSubmit(values)
  }

  const categoryLabels = categories.map(c => typeof c === "string" ? c : c.description)
  const brandLabels = brands.map(c => typeof c === "string" ? c : c.description)

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <>
              <Center>
                <Image
                  withPlaceholder
                  src={field.value}
                  radius="md"
                  height={200}
                  fit="contain"
                />
              </Center>
              <ImageUploader
                label="Imagen del Producto"
                description="La imagen se va a guardar al clickear en el botón Guardar"
                uploadCallback={uploadAPI.uploadProductImage}
                {...field}
              />
            </>
          )}
        />
        <TextInput
          autoFocus
          withAsterisk
          label="Nombre"
          description="Este va a ser también el título de la publicación"
          placeholder="Mouse"
          error={errors.name?.message}
          {...register("name")}
        />
        <NativeSelect
          withAsterisk
          label="Categoría"
          data={categoryLabels}
          error={errors.category?.message}
          {...register("category")}
        />
        <NativeSelect
          withAsterisk
          label="Marca"
          data={brandLabels}
          error={errors.brand?.message}
          {...register("brand")}
        />
        <TextInput
          withAsterisk
          label="Modelo"
          placeholder="RTX 3070, RTX 3060..."
          error={errors.productModel?.message}
          {...register("productModel")}
        />
        <TextInput
          withAsterisk
          label="Precio"
          placeholder="99.99"
          error={errors.price?.message}
          {...register("price", { valueAsNumber: true })}
        />
        <TextInput
          withAsterisk
          label="Stock"
          placeholder="100"
          error={errors.stock?.message}
          {...register("stock", { valueAsNumber: true })}
        />
        <Textarea
          withAsterisk
          minRows={8}
          label="Description"
          placeholder="Este artículo tiene la siguientes características..."
          error={errors.description?.message}
          {...register("description")}
        />
      </Stack>
      <Box my="lg" sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          loading={loading}
          type="submit"
          color="green"
          leftIcon={<IconDeviceFloppy />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  )
}
