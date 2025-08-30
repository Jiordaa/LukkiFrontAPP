'use client';

export default function SubscribeOffers() {
  return (
    <section className="bg-[#E6E7D7] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 shadow-lg">
        {/* Заголовок */}
        <h2 className="text-center font-bold text-xl mb-2 text-black">
          SUBSCRIBE TO OFFERS
        </h2>

        {/* Подзаголовок */}
        <p className="text-center text-gray-600 mb-6">
          Be the first to know — get news and discounts! Subscribe and get 10% off your first order.
        </p>

        {/* Форма */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3D4926]"
          />
          <button
            type="submit"
            className="bg-[#3D4926] text-white py-3 font-semibold hover:bg-[#2A331C] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
