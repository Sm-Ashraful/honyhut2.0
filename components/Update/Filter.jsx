import { MdCategory } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Link from "next/link";

const Filter = (props) => {
  // Add your filter section code here
  return (
    <div>
      {props.categories.map((category, idx) => {
        return (
          <div className="border-b">
            <div
              key={idx}
              className="flex justify-between items-center px-5 py-3 "
            >
              <div className="flex items-center">
                <MdCategory />
                <p className="ml-2">{category.name}</p>
              </div>
              <div className="text-xl text-customTheme">
                <BsFillArrowRightSquareFill />
              </div>
            </div>
            <ul>
              {category.children.map((child, idx) => {
                console.log("child: ", child);
                return (
                  <li
                    className="flex items-center ml-10 pb-2"
                    onClick={() => props.handleCategory(child._id)}
                  >
                    <p>
                      <input type="checkbox" className="mr-2" />
                    </p>
                    <Link href={"#"} className="">
                      {child.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
