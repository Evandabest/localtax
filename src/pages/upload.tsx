import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadedFile {
  name: string;
  type: string;
  size: number;
}

const Upload = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        type: file.type,
        size: file.size
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div
        {...getRootProps()}
        className={`w-full max-w-xl p-8 text-center border-2 border-dashed rounded-lg cursor-pointer transition-colors
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }`}
      >
        <input {...getInputProps()} />
        {uploadedFile ? (
          <div>
            <p className="text-lg font-medium text-gray-700">File uploaded:</p>
            <p className="text-gray-600">{uploadedFile.name}</p>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium text-gray-700">
              {isDragActive
                ? 'Drop your PDF here...'
                : 'Drag and drop a PDF file here, or click to select'}
            </p>
            <p className="mt-2 text-sm text-gray-500">Only PDF files are accepted</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;