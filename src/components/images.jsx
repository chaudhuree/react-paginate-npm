import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Images = ({ myData }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(myData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(myData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, myData]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % myData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="images">
        {currentItems?.map((image) => {
          return (
            <div className="image" key={image.id}>
              <img src={image.url} alt={image.title} />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" > "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" < "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
  return <div></div>;
};

export default Images;
