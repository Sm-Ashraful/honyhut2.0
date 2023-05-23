import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SearchModal = ({ width }) => {
  const [modalWidth, setModalWidth] = useState(0);

  useEffect(() => {
    setModalWidth(width);
  }, []);

  const isSearchModalOpen = useSelector(
    (state) => state.sidebar.isSearchModalOpen
  );
  return (
    <>
      {isSearchModalOpen ? (
        <>
          {modalWidth && (
            <div
              style={{ width: `${modalWidth}px` }}
              className={`h-80 bg-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-[28%] z-50 outline-none focus:outline-none `}
            >
              heello modal
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default SearchModal;
