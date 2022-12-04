import { Checkbox } from "@mantine/core";

interface Props<T> {
  label: string;
  options: Array<T>;
  labelField: keyof T;
  valueField: keyof T;
  value: Array<string>;
  onChange: (options: string[]) => void;
}

export function CheckboxFilter<T>({ label, options, labelField, valueField, value, onChange }: Props<T>) {

  return (
    <Checkbox.Group
      orientation="vertical"
      spacing="xs"
      label={label}
      labelProps={{
        sx: { fontWeight: 'bold' }
      }}
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <Checkbox
          key={`${option[valueField]}`}
          value={`${option[valueField]}`}
          label={`${option[labelField]}`}
        />
      ))}
    </Checkbox.Group>
  )
}
