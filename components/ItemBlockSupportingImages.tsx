import { Image as ImageType } from '#/lib/data/bars'
import Image from 'next/image'

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
      <Image
        src={firstImage.src}
        alt={firstImage.alt}
        width={200}
        height={300}
      />
      <Image
        src={secondImage.src}
        alt={secondImage.alt}
        width={200}
        height={300}
      />
    </div>
  ) : null
}
