import { NotificationService } from './messages/snackbar/notification.service';
import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";

@NgModule({
  declarations: [
    InputComponent, 
    RadioComponent, 
    RatingComponent, 
    SnackbarComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent, 
    RadioComponent, 
    RatingComponent, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    SnackbarComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartService, 
        RestaurantsService, 
        OrderService,
        NotificationService
      ],
    }
  }
}
