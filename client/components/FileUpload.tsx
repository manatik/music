import React, { ChangeEvent, FC, useRef } from 'react';

interface FileUploadProps {
  setFile: (file: File) => void;
  accept: string;
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  }

  return (
    <div onClick={() => ref.current.click()}>
      <input
        ref={ref}
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;