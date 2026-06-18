import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectService } from "../project.service";
@Component({selector:"app-projects",imports:[CommonModule],templateUrl:"./projects.html",styleUrls:["./projects.css"]})
export class Projects implements OnInit{
 projects:any[]=[]; service=inject(ProjectService);
 ngOnInit(){this.service.getProjects().subscribe((data: any) => {
  this.projects = data;
});
 }}