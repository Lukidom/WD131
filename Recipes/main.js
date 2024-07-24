function recipeTemplate(recipe) {
    return `
      <figure class="recipe">
        <img src="images/${recipe.image}" alt="image of ${recipe.name} on a plate" />
        <figcaption>
          ${tagsTemplate(recipe.tags)}
          <h2><a href="#">${recipe.name}</a></h2>
          <p class="recipe__ratings">
            ${ratingTemplate(recipe.rating)}
          </p>
          <p class="recipe__description">
            ${recipe.description}
          </p>
        </figcaption>
      </figure>
    `;
  }