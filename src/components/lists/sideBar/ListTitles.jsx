function ListTitles({ title }) {
  return (
    <>
      {/* <span className="h-8 w-full flex items-center pl-3 text-gray-600 font-semibold bg-white rounded">
        All
      </span> */}
      <span className="h-8 w-full flex items-center pl-3 text-gray-500">
        {title}
      </span>
    </>
  );
}

export default ListTitles;
