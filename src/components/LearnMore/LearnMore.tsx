'use client';

import Image from 'next/image';

import { Nunito_Sans } from 'next/font/google';
import './LearnMore.css';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function LearnMore() {
  return (
    <section className={`learn-more-section ${nunito.className}`}>
      <div className="learn-more-image-wrapper">
        <Image
          src="/images/LearnMore.jpg"
          alt="Learn More Background"
          width={1920}
          height={500}
          className="learn-more-bg"
          priority
        />

        <div className="learn-more-content">
          <h2 className="learn-more-title">
            We’re on a Mission To Clean Up the Industry
          </h2>
          <p className="learn-more-subtitle">
            Read about our progress in our latest Impact Report.
          </p>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>
    </section>
  );
}
