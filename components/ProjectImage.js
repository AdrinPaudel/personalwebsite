"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const ProjectImage = ({ src, alt }) => {
  // This state will now correctly update when the src prop changes.
  const [imageSrc, setImageSrc] = useState(src);

  // This `useEffect` hook listens for changes to the `src` prop
  // and updates the component's state, fixing the carousel bug.
  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  const handleError = () => {
    // Sets the image source to a placeholder if the original image fails to load
    setImageSrc('https://placehold.co/600x400/1E1E1E/EAEAEA?text=Image+Not+Found');
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={500}
      height={280}
      className="project-image"
      onError={handleError}
      // This key ensures React properly re-renders the image on src change
      key={imageSrc} 
    />
  );
};

export default ProjectImage;
