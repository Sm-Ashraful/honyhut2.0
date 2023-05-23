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
              className={`h-80 bg-white flex overflow-x-hidden overflow-y-auto fixed top-[28%] z-50 outline-none focus:outline-none `}
            >
              <div className="px-[2rem] py-[1.5rem] flex flex-col  ">
                <p className="text-lg tracking-wider">
                  Royal Honey VIP 20g Sachet
                </p>
                <p className="text-lg tracking-wider">
                  Royal Honey VIP 22g Pouches
                </p>
                <p className="text-lg tracking-wider">
                  Etumax Honey 20g Sachet
                </p>
                <p className="text-lg tracking-wider">
                  Etumax Honey 22g Pouches
                </p>
                <p className="text-lg tracking-wider">
                  Black Bull Honey 22g Pouches
                </p>
                <p className="text-lg tracking-wider">
                  Black Bull Honey 22g Pouches
                </p>
                <p className="text-lg tracking-wider">
                  Red Bull Honey 22g Pouches
                </p>
                <p className="text-lg tracking-wider">
                  Red Bull Honey 22g Pouches
                </p>
                <p className="text-lg tracking-wider">
                  Blue Bull Honey 22g Pouches
                </p>
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default SearchModal;
