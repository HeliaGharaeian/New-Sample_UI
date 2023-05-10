import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
import { User } from '../models/UserModel';
import { UserModelAli } from '../models/UserModelAli';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  updateUserForm: userForm = new userForm();

  @ViewChild("userForm")
  userForm!: NgForm;

  isSubmitted: boolean = false;
  User: any;
  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }
  
    ngOnInit(): void {
      this.User = this.route.snapshot.params['Id'];
      this.GetUsersById();
    }
    GetUsersById() {
      this.httpProvider.GetUsersById(this.User).subscribe((data: User) => {
        if (data != null && data!= null) {
          var resultData = data;
          if (resultData) {
            this.updateUserForm.Id = resultData.id;
            this.updateUserForm.FirstName = resultData.firstName;
            this.updateUserForm.LastName = resultData.lastName;
          }
          console.log("/////////////////++++++++++++++++++", data);
          debugger;

        }
      },
        (error: any) => { });
    }
  
    EditUser(isValid: any) {

      this.isSubmitted = true;
      if (isValid) {
        this.httpProvider.AddUser(this.User).subscribe(async data => {
          if (data != null && data != null) {
            var resultData = data;
            if (resultData != null && resultData.isSuccess) {
              if (resultData != null && resultData.isSuccess) {
                this.toastr.success(resultData.message);
                setTimeout(() => {
                  this.router.navigate(['/Home']);
                }, 500);
              }
            }
          }
        },
          async error => {
            this.toastr.error(error.message);
            setTimeout(() => {
              this.router.navigate(['/Home']);
            }, 500);
          });
      }
    }
  }
  
  export class userForm {
    Id: number = 0;
    FirstName: string = "";
    LastName: string = "";
  }




