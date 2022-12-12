import { Box, Button, FileButton, TextInput, TextInputProps } from "@mantine/core";
import React, { useImperativeHandle, useRef, useState } from "react";

interface Props extends Omit<TextInputProps, "onChange"> {
  uploadCallback: (file: File) => Promise<string>;
  onChange: (url: string) => void;
}

export const ImageUploader = React.forwardRef<HTMLInputElement, Props>((props, ref) => {

  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const { uploadCallback, onChange, ...rest } = props

  useImperativeHandle(ref, () => inputRef.current!)

  async function handleChangeFile(file: File) {
    try {
      setUploading(true)
      const url = await props.uploadCallback(file)
      onChange(url)
    } catch (error) {
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <Box>
      <TextInput
        {...rest}
        ref={inputRef}
        readOnly
      />
      <FileButton onChange={handleChangeFile} accept="image/png,image/jpeg">
        {(props) => <Button loading={uploading} {...props}>Subir imagen</Button>}
      </FileButton>
    </Box>
  )
})
