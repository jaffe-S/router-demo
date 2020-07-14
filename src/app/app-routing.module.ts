import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 引入组件１
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// 定义路由＋２
// 路由的顺序很重要“先到先得”
const routes: Routes = [
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
