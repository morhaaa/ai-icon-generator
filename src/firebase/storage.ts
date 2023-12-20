import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./config";

const storage = getStorage(app);

interface UploadImageResponse {
  success: boolean;
  message?: string;
  imageUrl?: string;
}

export const uploadImage = async (
  urlOpenAi: string,
  authorId: string,
  imageId: string
): Promise<UploadImageResponse> => {
  try {
    const response = await fetch(urlOpenAi);

    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }
    const metadata = {
      contentType: "image/jpeg",
    };

    const blob = await response.blob();
    const storageRef = ref(storage, `user_${authorId}/icons/${imageId}`);
    const uploadTask = uploadBytes(storageRef, blob, metadata);
    const url = await getDownloadURL((await uploadTask).ref);
    return {
      success: true,
      message: "Image uploaded successfully.",
      imageUrl: url,
    };
  } catch (error) {
    console.error("Error uploading to Firebase:", error);
    return { success: false, message: "Error uploading image to Firebase." };
  }
};

export const downloadImage = async (imageUrl: string) => {
  try {
    const downloadUrl = await getDownloadURL(ref(storage, imageUrl));

    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "icon.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
      } else {
        console.error(`Error during download. Status: ${xhr.status}`);
      }
    };

    xhr.onerror = () => {
      console.error("Error during download.");
    };

    xhr.open("GET", downloadUrl);
    xhr.send();
  } catch (error) {
    console.error("Error during download:", error);
  }
};
