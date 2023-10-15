"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import Image from "next/image";
import { X } from "lucide-react";

interface FileUploadProps {
  value: string;
  endpoint: "messageFile" | "serverImage";
  onChange: (url?: string) => void;
}

export const FileUpload = ({ onChange, endpoint, value }: FileUploadProps) => {
  console.log(value, endpoint, "$#$##$%#$%$#%#$%#$$$$$$$$$$$$$$$$$$$$$$$$$");
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="upload" className="rounded-full" />
        <button
          type="button"
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          onClick={() => onChange("")}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].fileUrl);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </>
  );
};
