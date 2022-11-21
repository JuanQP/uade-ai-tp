import { TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

export function SearchInput(props: TextInputProps) {
  return (
    <TextInput
      radius="xl"
      rightSection={<IconSearch />}
      {...props}
    />
  )
}
