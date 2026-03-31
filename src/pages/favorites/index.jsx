import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";


export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto grid grid-cols-4 gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <RecipeItem key={item.id} item={item}/>
        ))
      ) : (
        <div className="col-span-4">
          <p className="lg:text-4xl text-xl text-center text-black">
            Nothing is added to favorites yet. Please add some recipes to your
            favorites list.
          </p>
        </div>
      )}
    </div>
  );
}
