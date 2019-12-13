import React from "react";



const musicImage = () => {
    return(
        <figure class="recipe__fig">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img"/>
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
        </figure>
    )

}