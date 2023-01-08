'use client'

import { Image as ImageType } from '#/lib/data/bars'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type ItemBlockSupportingImagesProps = {
  scheme?: 'split'
  images: Array<ImageType>
}

export function ItemBlockSupportingImages({
  scheme = 'split',
  images,
}: ItemBlockSupportingImagesProps) {
  const [firstImage, secondImage] = images
  return scheme === 'split' ? (
    <div className="grid grid-cols-2 gap-4">
      <Zoom zoomImg={{ src: firstImage.src }} classDialog="zoom-image">
        <Image
          src={firstImage.src}
          alt={firstImage.alt}
          width={200}
          height={300}
        />
      </Zoom>
      <Zoom zoomImg={{ src: secondImage.src }} classDialog="zoom-image">
        <Image
          src={secondImage.src}
          alt={secondImage.alt}
          width={200}
          height={300}
        />
      </Zoom>
    </div>
  ) : null
}
