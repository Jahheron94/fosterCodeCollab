import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'blogs', component: BlogComponent},
{path: 'addblog', component: AddBlogComponent},
{path: 'about', component: AboutComponent},

  {path: '**', redirectTo: 'home'
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
