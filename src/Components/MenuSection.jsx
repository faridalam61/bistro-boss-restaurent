import { Link } from "react-router-dom";
import PopularMenu from "../Pages/Home/PopularMenu";

function MenuSection({ cover, title, description, menu }) {
  return (
    <>
      <div
        className="px-20 py-32"
        style={{
          background: `url("${cover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black opacity-50 w-3/4 mx-auto p-16  text-center">
          <h2 className="text-5xl text-white mb-5 uppercase">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-8 my-10">
        {menu && menu.map((item) => <PopularMenu key={item._id} item={item} />)}
      </div>
      <div className="text-center mb-10">
        {menu && (
          <Link to={`/order/${title}`} className="btn btn-secondary">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        )}
      </div>
    </>
  );
}

export default MenuSection;
