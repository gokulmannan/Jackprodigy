import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CoursematerialService } from '../../_service/courseMaterial.service';

@Component({
  selector: 'app-delete-materialpop',
  templateUrl: './delete-materialpop.component.html',
  styleUrls: ['./delete-materialpop.component.css']
})
export class DeleteMaterialpopComponent implements OnInit {
  @Input() data: any;
  constructor(private coursematerialService: CoursematerialService,
              public activeModal: NgbActiveModal,
              private toastr:ToastrService) { }

  ngOnInit() {
  }
  deleteMaterial() {
    this.coursematerialService.deleteCourseMaterial(this.data.id).then((data: any) => {
      if (data == true) {
        this.toastr.success("Deleted Successfully");
        this.activeModal.close()
      }
    })

  }
}
