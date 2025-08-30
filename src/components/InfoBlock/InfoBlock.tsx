import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

const InfoBlock = () => {
  return (
    <section className="bg-[#2C3A14] text-white py-12 px-8">
      <div className="grid grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Help and contact */}
        <div>
          <h3 className="font-semibold mb-4">Help and contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Size chart</li>
            <li>FAQ</li>
            <li>Contacts</li>
            <li>Prices in stores</li>
            <li>Return</li>
          </ul>
        </div>

        {/* Online store */}
        <div>
          <h3 className="font-semibold mb-4">Online store</h3>
          <ul className="space-y-2 text-sm">
            <li>Payment</li>
            <li>Delivery</li>
            <li>Contacts</li>
            <li>How to place an order</li>
            <li>Claims</li>
          </ul>
        </div>

        {/* Conditions */}
        <div>
          <h3 className="font-semibold mb-4">Conditions</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Cookie settings</li>
          </ul>
        </div>

        {/* LPP */}
        <div>
          <h3 className="font-semibold mb-4">LPP</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="font-semibold mb-4">Learn more about Lukki</h3>
          <div className="flex gap-4">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
            <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
            <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-xs text-gray-300">
        Everything in this project is used only within the framework of studies and diploma.
      </div>
    </section>
  );
};

export default InfoBlock;
