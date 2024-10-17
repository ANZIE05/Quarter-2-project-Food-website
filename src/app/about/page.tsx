import Image from "next/image";

export default async function AboutPage() {

  // throw new Error('About page not implemented yet') {This line is just to check  an error page}

  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl mb-8">| | |--- About Us ---| | |</h1>

      <div className="flex flex-col md:flex-row text-justify items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8">
        <p className="mx-auto md:ml-7 md:w-1/2 text-sm md:text-base lg:text-lg leading-relaxed">
          Welcome to Food Lover, where every dish is made with passion and a love for flavors! Here, I am showing you a collection of home-cooked meals. Each recipe is a blend of creativity and tradition, perfect for anyone who enjoys good food.<br/><br/>
          Cooking is not just a hobby for me, it's a way of life. Every meal on Food Lover reflects my personal touch and attention to detail, making it a delightful experience for your taste buds. From comforting classics to vibrant and exciting flavors, I pour my heart into each dish.<br/><br/>
          Hey everyone, enjoy and celebrate the joy of homemade food and the simple pleasures of cooking with love.
        </p>

        <div className="mx-auto md:w-1/2">
          <Image 
            src="/about1.png" 
            className="mx-auto md:mr-14"
            alt="Food Pic" 
            width={400} 
            height={400} 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}



// This function is just made for understanding to loaidng page, just to check how loading page works..

// export async function Loading(){
  // await new Promise((resolve) => {
  //   setTimeout(resolve,5000);
  // })
//     return (
//       <div></div>
//     );
// }

// This function is just made for understanding to error page, just to check how error page works..

// export default function ErrorPage(){
//   throw new Error('About page not implemented yet')
//   return(
//       <div>Error</div>
//   )
// };