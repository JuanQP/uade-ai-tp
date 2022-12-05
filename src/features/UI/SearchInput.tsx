import { Box, TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

export function SearchInput(props: TextInputProps) {
  return (
    <Box
      component="form"
      sx={props.sx}
      action="/product-search"
      method="GET"
    >
      <TextInput
        name="search"
        radius="xl"
        rightSection={<IconSearch />}
        placeholder="Buscar marcas, categorías, productos..."
        {...props}
      />
    </Box>
  )
}
