import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectFilters',
  pure:true
})
export class ProjectFiltersPipe implements PipeTransform {

 /**
   * @param items The array of projects
   * @param searchText The string to search for
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(project => {
      return project.projectName.toLowerCase().includes(searchText) || 
             project.location.toLowerCase().includes(searchText) ||
             project.client.toLowerCase().includes(searchText) 
    });
  }

}
