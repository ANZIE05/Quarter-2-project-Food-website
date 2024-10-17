import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-3xl text-center text-yellow-300">
          | | |--- Our Menu ---| | |
        </h1>
      </div>
      <br />

      {/* first heading */}
      <div className="bg-white w-full h-[35px]">
        <h1 className="text-2xl text-slate-500 font-mono font-semibold pt-1 ml-3">
          Starter
        </h1>
      </div>

      {/* First row of images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        <div className="text-center text-white">
          <Image
            src="/s1.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken Lollipop
        </div>
        <div className="text-center text-white">
          <Image
            src="/s3.png"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Mini Pizza
        </div>
        <div className="text-center text-white">
          <Image
            src="/s2.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          One Bite Chicken
        </div>
      </div>
      <br />

      {/* second heading */}
      <div className="bg-white w-full h-[35px]">
        <h1 className="text-2xl text-slate-500 font-mono font-semibold pt-1 ml-3">
          Main Course
        </h1>
      </div>

      {/* Main Course grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        <div className="text-center text-white">
          <Image
            src="/m1.png"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Bar.B.Q Rice
        </div>
        <div className="text-center text-white">
          <Image
            src="/m3.png"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken Shashlik with <br /> Vegetable Rice
        </div>
        <div className="text-center text-white">
          <Image
            src="/m2.png"
            alt="mandi Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Mandi (Arabic dish)
        </div>
        <div className="text-center text-white">
          <Image
            src="/m4.png"
            alt="Chicken Manchurian"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken Manchurian
        </div>
        <div className="text-center text-white">
          <Image
            src="/m5.png"
            alt="Malaai Chicken"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Malaai Chicken
        </div>
        <div className="text-center text-white">
          <Image
            src="/m6.jpg"
            alt="Pizza"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Pizza
        </div>
      </div>

      {/* Second row of images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        <div className="text-center text-white">
          <Image
            src="/m7.jpg"
            alt="Penny Pasta"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Penny Pasta
        </div>
        <div className="text-center text-white">
          <Image
            src="/m8.jpg"
            alt="Shell Macroni"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Shell Macroni
        </div>
        <div className="text-center text-white">
          <Image
            src="/m9.jpg"
            alt="Loaded Zinger Burger"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Loaded Zinger Burger
        </div>
        <div className="text-center text-white">
          <Image
            src="/m10.jpg"
            alt="Chicken Wrap"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken Wrap
        </div>
        <div className="text-center text-white">
          <Image
            src="/m11.jpg"
            alt="Envelope Paratha"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Envelope Paratha
        </div>
        <div className="text-center text-white">
          <Image
            src="/m12.png"
            alt="Mayo Garlic Roll"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Mayo Garlic Roll
        </div>
      </div>
      <br />

      {/* third heading */}
      <div className="bg-white w-full h-[35px]">
        <h1 className="text-2xl text-slate-500 font-mono font-semibold pt-1 ml-3">
          Diet Food
        </h1>
      </div>

      {/* Diet Food grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        <div className="text-center text-white">
          <Image
            src="/d1.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken/Vegtable
        </div>
        <div className="text-center text-white">
          <Image
            src="/d2.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Pancake
        </div>
        <div className="text-center text-white">
          <Image
            src="/d3.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken/Vegetable with Sauce
        </div>
        <div className="text-center text-white">
          <Image
            src="/d4.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Portion Meal
        </div>
        <div className="text-center text-white">
          <Image
            src="/d5.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken with Lettuce
        </div>
        <div className="text-center text-white">
          <Image
            src="/d6.png"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Chicken cheese with vegetable
        </div>
      </div>
      <br />

      {/* fourth heading */}
      <div className="bg-white w-full h-[35px]">
        <h1 className="text-2xl text-slate-500 font-mono font-semibold pt-1 ml-3">
          Dessert/Sweet
        </h1>
      </div>

      {/* Dessert grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        <div className="text-center text-white">
          <Image
            src="/a1.jpg"
            alt="khoya kheer"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Khoya Kheer
        </div>

        <div className="text-center text-white">
          <Image
            src="/a2.png"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Ras Malaai
        </div>

        <div className="text-center text-white">
          <Image
            src="/a3.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Kunafa
        </div>

        <div className="text-center text-white">
          <Image
            src="/a4.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Kaju Katli
        </div>

        <div className="text-center text-white">
          <Image
            src="/a5.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Loaded Jelly Custard
        </div>

        <div className="text-center text-white">
          <Image
            src="/a6.jpg"
            alt="Food Image"
            width={200}
            height={300}
            className="rounded-xl mx-auto"
          />
          Arabic Dessert
        </div>
      </div>
    </div>
  );
}
