'use client';

import Image from 'next/image';
import { Antonio, Nunito_Sans } from 'next/font/google';

// Подключаем шрифты
const antonio = Antonio({
  subsets: ['latin'],
  weight: '700',
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: '500',
});

const people = [
  { id: 1, name: '@lukki_style', img: '/images/people/person1.png' },
  { id: 2, name: '@anna_fashion', img: '/images/people/person2.png' },
  { id: 3, name: '@max_model', img: '/images/people/person3.png' },
  { id: 4, name: '@sofia_trend', img: '/images/people/person4.png' },
  { id: 5, name: '@nik_model', img: '/images/people/person5.png' },
  { id: 6, name: '@kate_style', img: '/images/people/person6.png' },
  { id: 7, name: '@leo_trendy', img: '/images/people/person7.png' },
  { id: 8, name: '@diana_mode', img: '/images/people/person8.png' },
];

export default function DressWithLukki() {
  return (
    <section id="dresswithlukki" className="py-12 px-6">
      {/* Основной заголовок */}
      <h2
        className={`${antonio.className} font-bold text-[48px] leading-[100%] tracking-[0%] align-middle mb-2 text-black text-left pl-4 md:pl-8`}
      >
        #dresswithlukki
      </h2>

      {/* Подпись под заголовком */}
      <p
        className={`${nunito.className} font-medium text-[24px] leading-[100%] tracking-[0%] align-middle mb-8 text-black text-left pl-4 md:pl-8`}
      >
        See how our community styles Lukki
      </p>

      {/* Сетка людей */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {people.map((person) => (
          <div
            key={person.id}
            className="relative group overflow-hidden shadow-lg" // убрали rounded-2xl
          >
            <Image
              src={person.img}
              alt={person.name}
              width={455}
              height={465}
              className="object-cover w-[455px] h-[465px] transition duration-300 group-hover:opacity-70"
            />

            {/* Белый оверлей + никнейм */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white/40">
              <span className="text-lg font-semibold text-black">
                {person.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
