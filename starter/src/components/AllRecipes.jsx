import { useEffect, useState } from "react";
import Recipe from "./Recipe";

// Typically we wouldn't declare variables outside of our React component,
// but because they are truly constant values it is okay!

export default function AllRecipes(props) {

    const [pizza, setPizza] = useState();

    fetch("https://cs571api.cs.wisc.edu/rest/s25/ice/pizza", {
        headers: {
            "X-CS571-ID": CS571.getBadgerId()
        }
    })
    .then(res => res.json())
    .then(data => {
        setPizza(data)
    })

    return <div>
        <h1>Welcome to Badger Recipes!</h1>
        {pizza ? <Recipe {...pizza}/> : <p>The recipe is still loading...</p>}
    </div>
}