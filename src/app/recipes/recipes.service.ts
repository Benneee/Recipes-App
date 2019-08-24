import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Ewa agoyin',
      imageUrl:
        'https://live.staticflickr.com/6093/6228405084_4340c23a9a_b.jpg',
      ingredients: ['beans', 'palm oil', 'spices', 'pepper']
    },
    {
      id: 'r2',
      title: 'Jollof rice',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/b/b7/Jollof_rice_with_fried_fish_and_fried_plantain.jpg',
      ingredients: ['rice', 'groundnut oil', 'spices', 'tomatoes']
    },
    {
      id: 'r3',
      title: 'Spaghetti',
      imageUrl:
        'https://images.pexels.com/photos/1290502/pexels-photo-1290502.jpeg?cs=srgb&dl=meatballs-spaghetti-1290502.jpg&fm=jpg',
      ingredients: ['spaghetti', 'groundnut oil', 'spices', 'tomatoes']
    }
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
