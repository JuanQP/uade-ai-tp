import axios from "axios";

interface UploadResponse {
  url: string;
}

function formDataBuilder(file: File) {
  const formData = new FormData()
  formData.append("image", file, file.name)

  return formData
}

export async function uploadAvatar(image: File) {
  const formData = formDataBuilder(image)
  const { data } = await axios.post<UploadResponse>('/api/utils/avatar-image-upload', formData)
  return data.url
}

export async function uploadProductImage(image: File) {
  const formData = formDataBuilder(image)
  const { data } = await axios.post<UploadResponse>('/api/utils/product-image-upload', formData)
  return data.url
}
