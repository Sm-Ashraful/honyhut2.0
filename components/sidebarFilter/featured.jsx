import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";


const FeaturedPage = () => {
  const [checkedItems, setCheckedItems] = useState({});


  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // handle Featured submission here
  };


  const dispatch = useDispatch();
  const close = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const [selectedOption, setSelectedOption] = useState("all");

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="p-8">
        <form onSubmit={handleSubmit}>

          <div className="flex border border-l-0 border-r-0 border-t-0">
            <span className="font-semibold text-2xl">
              SORT BY:
            </span>
            {/* <p
              className="absolute top-4 right-6 cursor-pointer hover:text-primary-red text-3xl transform transition-all hover:rotate-180 duration-700"
              onClick={close}
            >
              <AiOutlineClose />
            </p> */}
          </div>

            {/* Filter section  */}
          <div className="flex flex-col mb-10 p-4">

           <label className="inline-flex items-center ml-2 cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray"
                  name="filterOption"
                
                />
                <span className="ml-2 text-gray hover:text-honey">Featured</span>
              </label>
              <label className="inline-flex items-center ml-2 cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray"
                  name="filterOption"
                
                />
                <span className="ml-2 text-gray hover:text-honey">Best Selling</span>
              </label>
              <label className="inline-flex items-center ml-2 cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray"
                  name="filterOption"
                
                />
                <span className="ml-2 text-gray hover:text-honey">Alphabetically, A - Z</span>
              </label>
              <label className="inline-flex items-center ml-2 cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray"
                  name="filterOption"
                
                />
                <span className="ml-2 text-gray hover:text-honey">Alphabetically, Z - A</span>
              </label>
              <label className="inline-flex items-center ml-2 cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray"
                  name="filterOption"
                  
                />
                <span className="ml-2 text-gray hover:text-honey">Price, low to high</span>
              </label>
              <label className="inline-flex items-center ml-2 cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-gray"
                  name="filterOption"
                  
                />
                <span className="ml-2 text-gray hover:text-honey">Price, high to low</span>
              </label>         

          </div>

        </form>
    </div>
  );
};

export default FeaturedPage;
