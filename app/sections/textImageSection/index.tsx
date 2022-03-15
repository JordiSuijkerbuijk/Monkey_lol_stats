import clsx from 'clsx';

import Container from '../../components/container/container';
import Image from '../../components/image/image';
import CTA from '../../components/cta/cta';

import type { CTAType } from '../../types/cta';
import type { Image as ImageType } from '../../types/image';

type TextImageSectionProps = {
  title: string;
  description: string;
  inverted: boolean;
  image?: ImageType;
  cta?: CTAType;
};

export default function TextImageSection({
  title = '',
  description = '',
  inverted = false,
  image,
  cta,
}: TextImageSectionProps) {
  return (
    <section>
      <Container containerClass='grid gap-20 items-start md:grid-cols-2 py-10 px-14'>
        <div className='grid gap-8 justify-items-start'>
          <h2>{title}</h2>
          <p>{description}</p>
          {cta && cta.link && cta.text && <CTA {...cta} />}
        </div>
        <div className={clsx([inverted && 'md:order-first'])}>{image && <Image {...image} />}</div>
      </Container>
    </section>
  );
}
