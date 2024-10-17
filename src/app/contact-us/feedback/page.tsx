export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl text-center text-yellow-500 mb-8">
          | | |--- Feedback Form ---| | |
        </h1>
      </div>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-blue-950 font-medium font-serif text-lg mb-4">Tell us about yourself</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Contact Number:</label>
            <input
              type="tel"
              id="phone"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter your number"
              required
            />
          </div>

          <div>
            <label htmlFor="feedback" className="block text-sm font-medium">Give us your feedback:</label>
            <textarea
              id="feedback"
              rows={3}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter your message here (200 characters)"
            />
          </div>

          <button
            type="submit"
            className="w-full text-black font-bold py-2 px-4 rounded-md hover:bg-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
