import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded">
      <h3 className="text-3xl font-bold text-center bg-blue-200 rounded">
        Reading time: {readingTime}
      </h3>
      <h2 className="text-3xl text-center font-bold">
        Bookmarks Blog: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
