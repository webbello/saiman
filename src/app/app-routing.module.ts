import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ArticleComponent } from './blog/article/article.component';
import { InnerLayoutComponent } from './layout/inner-layout/inner-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'blog',
    component: InnerLayoutComponent,
    children: [
      { path: '', component: ArticleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
