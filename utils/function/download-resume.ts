import { RESUME_PATH, RESUME_DOWNLOAD_NAME } from "@/utils/const/navigation";

export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = RESUME_PATH;
  link.download = RESUME_DOWNLOAD_NAME;
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
