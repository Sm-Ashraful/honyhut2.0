import Image from "next/image";

const CardWithoutName = (props) => {
  return (
    <div className={`w-full h-auto cursor-pointer group`}>
      <div
        className={`w-full h-full  ${props.type === "flex" ? "flex" : ""}`}
        style={props.style}
      >
        <div
          className={`w-full relative mr-[16px] bg-[#f3f3f3] bg-blend-multiply max-h-[220px] overflow-hidden`}
        >
          <Image
            width={200}
            height={200}
            className="object-cover w-full h-full"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={`pt-3`}>
          <p
            className={`text-black font-semibold pb-1.5 group-hover:text-primary-red ${props.position}`}
          >
            USD ${props.price}
          </p>
          <p className="text-customTheme text-sm ">
            {props.details?.Unit || "Minimum quantity 5pcs"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithoutName;
