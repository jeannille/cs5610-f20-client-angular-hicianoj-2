import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hicianoj/courses/${courseId}/modules`)
      .then(response => response.json())
//
  deleteModules = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hicianoj/modules/${moduleId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hicianoj/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
//
/*take in new module object, passes module back as json stringify . */
  updateModule = (module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/hicianoj/modules/${module._id}`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
//
}
