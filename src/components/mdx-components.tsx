import Image from 'next/image';

export const MDXComponents = {
  // @ts-ignore
  Image: ({ alt, src, width, height }) => <Image alt={alt} src={src} width={width} height={height} />
}

