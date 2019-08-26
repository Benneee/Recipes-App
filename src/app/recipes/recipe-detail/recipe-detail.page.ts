import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss']
})
export class RecipeDetailPage implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      } else {
        const recipeId = paramMap.get('recipeId');
        this.selectedRecipe = this.recipesService.getRecipe(recipeId);
      }
    });
  }

  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            // Deletion will only happen when this button is pressed, hence we use an handler to hold the deletion logic
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.selectedRecipe.id);
              this.router.navigate(['/recipes']);
            }
          }
        ]
      })
      .then(alertModal => {
        alertModal.present();
      });
  }
}
