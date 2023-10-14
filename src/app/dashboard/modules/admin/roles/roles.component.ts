import { ChangeDetectorRef, Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AdminService } from '../../../../shared/services/admin/admin.service';
import { emptyObjectValidator } from 'src/app/shared/validators/general.validators';
import { Column } from 'src/app/shared/interfaces/column';
import { Role } from '../../types/role.interface';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  sidenavOpened: boolean = false;
  roleForm!: FormGroup;
  permissionsList = [];
  adminForm: FormGroup<{ name: FormControl<string>; email: FormControl<string> ; role: FormControl<{ name: string; value: any; }>; }>;
  rolesList: { name: string; value: any; description: any; permissions:any }[] = [];
  adminList: { name: string; email: any; role: any; roleObj: any; }[] = [];
  rolesCreate: boolean;
  rolesUpdate: boolean;
  adminUpdate: boolean;
  searchText: string = "";
  rolesTableColumns: Array<Column> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      image : 'active-streams.png',
      isImage : false
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: Record<string, any>) => `${element['description']}`,
    }
    // {
    //   columnDef: 'startTime',
    //   header: 'Start Time',
    //   cell: (element: Record<string, any>) => `${element['startTime']}`
    // },
    // {
    //   columnDef: 'startDate',
    //   header: 'Start Date',
    //   cell: (element: Record<string, any>) => `${element['startDate']}`
    // },
    // {
    //   columnDef: 'walletBalance',
    //   header: 'Wallet Balance',
    //   cell: (element: Record<string, any>) => `${element['walletBalance']}`,
    //   image : 'active-streams.png',
    //   isNumberAndImage : true,
    // }
  ];

  adminsTableColumns: Array<Column> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      image : 'active-streams.png',
      isImage : false
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: Record<string, any>) => `${element['role']}`,
    }
  ];

  rolesDataSource: Role[] = [];
  adminsDataSource: Role[] = [];
  adminsFilterString = '';
  rolesFilterString = '';

  selectedRoles: Role[] = [];
  selectedRoleId:any;

  selectedAdminRoles: Role[] = [];
  selectedAdminId:any;
  tabName: string = "Roles";

  constructor(private fb: FormBuilder, private readonly adminService: AdminService, private cd: ChangeDetectorRef) {

    this.initializeRoleForm();
    this.initializeAdminForm();
  }

  initializeRoleForm(roleData?: any) {
    this.roleForm = this.fb.group({
      roleName: new FormControl(roleData?.name || '', [Validators.required]),
      roleDescription: new FormControl(roleData?.description || '', [Validators.required]),
      permissions: new FormControl(null, [Validators.required, , emptyObjectValidator()])
    });
    this.adminService.getPermissions()
    .subscribe(result => {
      this.permissionsList = Object.keys(result).map(key => {
        return {name: key, value: result[key]};
      });
    })
    this.adminService.getRoles()
    .subscribe(result => {
      this.rolesList = Object.keys(result).map(key => {
        return {name: result[key]['name'], value: result[key]['id'], description : result[key]['description'], permissions : result[key]['permissions']};
      });
      this.rolesDataSource = this.rolesList;
    })
  }

  initializeAdminForm(adminData?: any) {
    this.adminForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      role: new FormControl(null, [Validators.required]), // TODO: Update for prepopulated form
    });
    this.adminService.getUserList()
    .subscribe(result => {
      this.adminList = Object.keys(result).map(key => {
        return {name: result[key]['name'], value: result[key]['userId'], email: result[key]['email'], role : result[key]['role']['name'], roleObj : result[key]['role']};
      });
    this.adminsDataSource = this.adminList;
    })
  }

  openEditPanel() {
    this.roleForm.reset();
    this.initializeRoleForm();
    this.rolesCreate = true;
    this.sidenavOpened = true;
  }

  editRole(roleData){
    this.roleForm = this.fb.group({
      roleName: new FormControl(roleData?.name || '', [Validators.required]),
      roleDescription: new FormControl(roleData?.description || '', [Validators.required]),
      permissions: new FormControl(roleData?.permissions, [Validators.required, , emptyObjectValidator()])
    });

    this.selectedRoles = roleData?.permissions;
    this.selectedRoleId = roleData?.value
    this.rolesCreate = true;
    this.rolesUpdate = true;
    this.sidenavOpened = true;
  }

  editAdmin(adminData){
    this.adminForm = this.fb.group({
      name: new FormControl(adminData?.name, [Validators.required]),
      email: new FormControl(adminData?.email.split('@')[0], [Validators.required]),
      role: new FormControl(null, [Validators.required]), // TODO: Update for prepopulated form
    });

    this.selectedAdminRoles = [adminData?.roleObj];
    this.selectedAdminId = adminData?.value
    this.adminUpdate = true;
    this.rolesCreate = false;
    this.sidenavOpened = true;
  }

  deleteRole(roleData){
    this.adminService.deleteRole(roleData.value).subscribe(res => {
      this.initializeRoleForm();
    });
  }

  openAdminCreatePanel() {
    this.adminForm.reset();
    this.initializeAdminForm();
    this.rolesCreate = false;
    this.sidenavOpened = true;
  }

  createRole() {
    if(this.roleForm.valid) {
      const {roleName, roleDescription, permissions} = this.roleForm.value; // TODO: Type properly
      const payload = {
        permissions: permissions.map(p => p.value || p),
        name: roleName,
        description: roleDescription,
      };
      if(this.rolesUpdate) payload['id']= this.selectedRoleId;
      this.adminService[this.rolesUpdate ? 'updateRole' : 'createRole'](payload)
      .subscribe(res => {
        this.sidenavOpened = false;
        this.rolesUpdate = false;
        this.selectedRoleId = null;
        this.initializeRoleForm();
      })
    }
  }

  createAdmin() {
    if(this.adminForm.valid) {
      const {email, role, name} = this.adminForm.value;
      const payload = {
        name: name,
        role: role?.[0].value,
        email: `${email}@girlsgonegame.com`,
      };
      if(this.adminUpdate) payload['id']= this.selectedAdminId;
      this.adminService[this.adminUpdate ? 'updateAdmin' : 'createAdmin'](payload)
      .subscribe(res => {
        this.sidenavOpened = false;
        this.initializeAdminForm();
      })
    }
  }

  deleteAdmin(adminData){
    this.adminService.deleteAdmin(adminData.value).subscribe(res => {
      this.initializeAdminForm();
    });
  }

  sidenavOpenedChange(val){
    this.sidenavOpened = val;
  }

  cancel() {
    this.sidenavOpened = false;
  }

  onTabChanged(event) {
    this.searchText = "";
    this.tabName = event.tab.textLabel;
  }

  doFilter(val){
    this.searchText = val.target.value;
    this.cd.detectChanges();
  }

  onTableAction(data, type){
    if(data.name.toLowerCase() == 'edit'){
      if(type == 'role') this.editRole(data.value);
      else this.editAdmin(data.value);
    }else{
      if(type == 'role') this.deleteRole(data.value);
      else this.deleteAdmin(data.value);
    }
  }
}
