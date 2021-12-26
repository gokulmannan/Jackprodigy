import { Injectable } from '@angular/core';

  import { Academic } from '../../manageacademic/src/app/academic';
import { ManageAcdemicProviderServiceService } from './manage-acdemic-provider-service.service';
 
@Injectable({
  providedIn: 'root'
})
export class ManageAcademicserviceServiceService {

  token;

  constructor(private provider: ManageAcdemicProviderServiceService) {
  }


  getDepartment() {
    return new Promise((resolve, reject) => {
      this.provider.getDepartment().subscribe((data: any) =>

        resolve(data)
        ,
        error => console.log("Error::" + error)

      )
    })
  }

  getAcademicyear(id) {
    return new Promise((resolve, reject) => {
      this.provider.getAcademicyear(id).subscribe(
        (data: Academic) => {
          resolve(data)
        },
        error => console.log("Error::", error)
      )

    })
  }
  activate(data) {


    return new Promise((resolve, reject) => {
      this.provider.activate(data).subscribe((value) => {
        resolve(value)
      },
        error => {
          console.log("Error" + error)
        }


      )

    })
  }
  update(data) {


    return new Promise((resolve, reject) => {
      this.provider.update(data).subscribe((value) => {
        resolve(value)
      },
        error => {
          console.log("Error" + error)
        }


      )

    })
  }

  addAcdemic(data) {
    return new Promise((resolve, reject) => {
      this.provider.addAcademic(data).subscribe(value => {
        resolve(value)
      }, error => {
        console.log("Error" + error)

      }
      )
    })
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      this.provider.delete(id).subscribe(value => {
        resolve(value)
      }, error => {
        console.log("Error" + error)
      }
      )
    })
  }
  fetchAccYear(departmentId) {
    return new Promise((resolve, reject) => {
      this.provider.fetchAccYear(departmentId).subscribe(value => {
        resolve(value)
      }, error => {
        console.log("Error" + error);

      })
    })
  }

  getGroup(id) {
    return new Promise((resolve, reject) => {
      this.provider.getGroup(id).subscribe(value => {
        resolve(value)
      }, error => {
        console.log("Error" + error);
      })
    })
  }
  //calling create Group method in provider
  createGroup(group) {
    return new Promise((resolve, reject) => {
      this.provider.createGroup(group).subscribe(created => {
        resolve(created)
      },
        error => {
          console.log("Error" + error);
        })
    })
  }
  //calling deleteGroup method
  deleteGroup(id) {
    return new Promise((resolve, reject) => {
      this.provider.deleteGroup(id).subscribe(data => {
        resolve(data);
      },
        error => {
          console.log("Error" + error);

        }
      )
    })
  }

  getGroupByID(id) {
    return new Promise((resolve, reject) => {
      this.provider.getById(id).subscribe(value => {
        resolve(value)
      }, error => {
        console.log("Error" + error);
      })
    })
  }

  updateGroup(group) {
    return new Promise((resolve, reject) => {
      this.provider.updateGroup(group).subscribe(data => {
        resolve(data);
      }, error => {
        console.log("Error", +error);
      })
    })
  }
  createdBy(departmentID) {
    return new Promise((resolve, reject) => {
      this.provider.createdBy(departmentID).subscribe(data => {
        resolve(data);
      }, error => {
        console.log("Error", +error);
      }
      )
    })
  }
}