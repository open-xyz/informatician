export default function Success() {
  return (
    <div className="flex flex-col gap-2 text-center justify-between text-green-600 p-5 mt-20 ">
      <h1 className=" font-bold text-xl text-center justify-center">Thank You For Adding Books.</h1>
      <p className="text-sm my-3">Keep Contributing!</p>
      <a href="/addBooks">
        <button className="btn btn-primary px-4 py-3 bg-blue-800 text-white">
          Upload More
        </button>
      </a>
    </div>
  );
}
