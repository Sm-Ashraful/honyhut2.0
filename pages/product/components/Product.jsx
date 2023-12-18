import CardWithButton from "@/components/Update/CardWithButton";
import Link from "next/link";

export default function Product({ products }) {
  if (!products) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 padding_inside">
      {products.map((item, idx) => {
        return (
          <Link href={`/product/details/${item.slug}`}>
            <CardWithButton
              name={item.name}
              image={item.productPictures[0].url}
              price={item.price}
              details={item.details}
              key={idx}
              style={{
                flex: `0 0 calc(${100 / 4}% - 30px)`, // Adjust the '10px' as the desired gap
                margin: "5px", // Adjust the margin as needed
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: "7px",
              }}
            />
          </Link>
        );
      })}
    </div>
  );
}
