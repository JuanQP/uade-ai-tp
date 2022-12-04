import { Checkbox } from "@mantine/core";

interface Props {
  label: string;
  options: Array<{ value: string, label: string }>;
  onChange: (options: string[]) => void;
}

export function CheckboxFilter({ label, options, onChange }: Props) {
  return (
    <Checkbox.Group
      orientation="vertical"
      label={label}
      onChange={onChange}
    >
      {options.map(option => (
        <Checkbox key={option.value} value={option.value} label={option.label} />
      ))}
    </Checkbox.Group>
  )
}
