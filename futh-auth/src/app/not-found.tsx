import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:300i,400,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <body>
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
          <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
              <div className="border-t border-gray-200 text-center pt-8">
                <h1 className="lg:text-9xl xl:text-6xl md:text-5xl text-4xl font-bold text-purple-400">
                  404
                </h1>
                <h1 className="lg:text-5xl xl:text-4xl md:text-3xl text-2xl font-medium py-8">
                  oops! Page not found
                </h1>
                <p className="text-2xl pb-8 px-12 font-medium">
                  Oops! The page you are looking for does not exist. It might
                  have been moved or deleted.
                </p>
                <a href="/"><button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                  HOME
                </button></a>
                <a href="mailto:regminimesh7@gmail.com"><button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                  Contact Us
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
