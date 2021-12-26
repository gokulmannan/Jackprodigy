import { Injectable } from '@angular/core';
import { ApplicationProvider } from '../_provides/application.provider';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserForm } from '../_models/UserForm';


@Injectable({
  providedIn: 'root'
})
export class FormBuilderTool {
  constructor(private formBuilder: FormBuilder) { }

  buildUserBasicDetails(userData) {
    return this.formBuilder.group({
      studiedFromIndia: [(userData.studiedFromIndia != null) ? userData.studiedFromIndia : null, Validators.required],
      nationality: [(userData.nationality != null) ? userData.nationality : null, Validators.required],
      campus: [(userData.campus != null) ? userData.campus : null, Validators.required],
      checkArray: this.formBuilder.array([],[Validators.required])
    });
  }

  bindUserbasicInfo(userForm: UserForm, data) {
    userForm.nationality = data.nationality;
    userForm.studiedFromIndia = data.studiedFromIndia;
    userForm.campus = data.campus;
    return userForm;
  }

  bindParentsAndCommunicationInfo(userForm: UserForm, data) {
    const parentsDetails = Object();
    parentsDetails.fathersTitle = this.isEmpty(data.fathersTitle);
    parentsDetails.fathersName = this.isEmpty(data.fathersName);
    parentsDetails.fathersOccupation = this.isEmpty(data.fathersOccupation);
   // parentsDetails.fathersAnnualIncome = this.isEmpty(data.fathersAnnualIncome);
    parentsDetails.fathersMobile = this.isEmpty(data.fathersMobile);
   // parentsDetails.fathersAlterMobile = this.isEmpty(data.fathersAlterMobile);
   // parentsDetails.fathersEmail = this.isEmpty(data.fathersEmail);
    parentsDetails.mothersTitle = this.isEmpty(data.mothersTitle);
    parentsDetails.mothersName = this.isEmpty(data.mothersName);
    parentsDetails.mothersOccupation = this.isEmpty(data.mothersOccupation);
    //parentsDetails.mothersAnnualIncome = this.isEmpty(data.mothersAnnualIncome);
    parentsDetails.mothersMobile = this.isEmpty(data.mothersMobile);
   // parentsDetails.mohtersAlterMobile = this.isEmpty(data.mohtersAlterMobile);
   // parentsDetails.mothersEmail = this.isEmpty(data.mothersEmail);
    parentsDetails.guardiansDetails = this.isEmpty(data.guardiansDetails);
    if (data.guardiansDetails) {
      parentsDetails.guardiansTitle = this.isEmpty(data.guardiansTitle);
      parentsDetails.guardiansName = this.isEmpty(data.guardiansName);
      parentsDetails.guardiansOccupation = this.isEmpty(data.guardiansOccupation);
      parentsDetails.guardiansMobile = this.isEmpty(data.guardiansMobile);
     // parentsDetails.guardiansEmail = this.isEmpty(data.guardiansEmail);
    }
    userForm.parentsDetails = parentsDetails;
    const communicationDetails = Object();
    const communication = Object();
    communication.country = this.isEmpty(data.country);
    communication.state = this.isEmpty(data.state);
    communication.district = this.isEmpty(data.district);
   // communication.city = this.isEmpty(data.city);
    communication.addressLine1 = this.isEmpty(data.addressLine1);
    communication.addressLine2 = this.isEmpty(data.addressLine2);
    communication.pincode = this.isEmpty(data.pincode);
    communicationDetails.communication = communication;
    userForm.communicationDetails = communicationDetails;
    return userForm;
  }


  bindUserPersonalInfo(userForm: UserForm, data) {
   // userForm.title = this.isEmpty(data.title);
    userForm.firstName = this.isEmpty(data.firstName);
    userForm.middleName = this.isEmpty(data.middleName);
    userForm.lastName = this.isEmpty(data.lastName);
    userForm.mobile = this.isEmpty(data.mobile);
    userForm.email = this.isEmpty(data.email);
    //userForm.alternateEmail = this.isEmpty(data.alternateEmail);
    userForm.dateOfBirth = this.isEmpty(data.dateOfBirth);
    userForm.gender = this.isEmpty(data.gender);
    userForm.bloodGroup = this.isEmpty(data.bloodGroup);
    userForm.community = this.isEmpty(data.community);
    //userForm.religion = this.isEmpty(data.religion);
    //userForm.motherTongue = this.isEmpty(data.motherTongue);
    //userForm.placeOfBirth = this.isEmpty(data.placeOfBirth);
    userForm.birthDay = this.isEmpty(data.birthDay);
    userForm.birthMonth = this.isEmpty(data.birthMonth);
    userForm.birthYear = this.isEmpty(data.birthYear);
    userForm.sourceOfAdmission = this.isEmpty(data.sourceOfAdmission);
    userForm.differentlyAbled = this.isEmpty(data.differentlyAbled);
    return userForm;
  }

  private isEmpty(newData) {
    if (typeof newData !== 'undefined' && newData && newData !== ' ') {
      return newData;
   }
  }

  buildUserPersonalInformation(userData) {
    console.log(userData.birthYear)
    return this.formBuilder.group({
    //  title: [(userData.title != null) ? userData.title : null, Validators.required],
      firstName: [(userData.firstName != null) ? userData.firstName : null, Validators.required],
      middleName: [(userData.middleName != null) ? userData.middleName : null],
      lastName: [(userData.lastName != null) ? userData.lastName : null],
      mobile: [(userData.mobile != null) ? userData.mobile : null, Validators.required],
      email: [(userData.email != null) ? userData.email : null, Validators.required],
    //  alternateEmail: [(userData.alternateEmail != null) ? userData.alternateEmail : null],
    birthDay: [(userData.birthDay != null) ? userData.birthDay : null, Validators.required],
    birthMonth: [(userData.birthMonth != null) ? userData.birthMonth : null, Validators.required],
    birthYear: [(userData.birthYear != null) ? userData.birthYear : null, Validators.required],
     // dateOfBirth: [(userData.dateOfBirth != null) ? userData.dateOfBirth : null],
      gender: [(userData.gender != null) ? userData.gender : null, Validators.required],
      bloodGroup: [(userData.bloodGroup != null) ? userData.bloodGroup : null],
      community: [(userData.community != null) ? userData.community : null],
     // religion: [(userData.religion != null) ? userData.religion : null, Validators.required],
     // motherTongue: [(userData.motherTongue != null) ? userData.motherTongue : null],
     // placeOfBirth: [(userData.placeOfBirth != null) ? userData.placeOfBirth : null],
      sourceOfAdmission: [(userData.sourceOfAdmission != null) ? userData.sourceOfAdmission : null, Validators.required],
      differentlyAbled: [(userData.differentlyAbled != null) ? userData.differentlyAbled : null, Validators.required]
    });
  }
 
  buildAcademicDetails(userData) {
    let sslc;
    let hsc;
    let others;
    let academicDetails = userData.academicDetails;
    if (academicDetails == null) {
      academicDetails = {};
      sslc = {};
      hsc = {};
      others = {};
    } else {
      sslc = academicDetails.sslc;
      hsc = academicDetails.hsc;
      others = academicDetails.others;
      if (sslc == null) {
        sslc = {};
      }
      if (hsc == null) {
        hsc = {};
      }
      if (others == null) {
        others = {};
      }
    }

    return this.formBuilder.group({
      sslcInstituteName: [(sslc.instituteName != null) ? sslc.instituteName : null],
      sslcBoard: [(sslc.board != null) ? sslc.board : null],
      sslcMarkingScheme: [(sslc.markingScheme != null) ? sslc.markingScheme : null],
      sslcMarkObtained: [(sslc.markObtained != null) ? sslc.markObtained : null],
      sslcYearOfPassing: [(sslc.yearOfPassing != null) ? sslc.yearOfPassing : null],
      sslcRegistrationNo: [(sslc.registrationNo != null) ? sslc.registrationNo : null],

      hscInstituteName: [(hsc.instituteName != null) ? hsc.instituteName : null],
      hscBoard: [(hsc.board != null) ? hsc.board : null],
      hscMarkingScheme: [(hsc.markingScheme != null) ? hsc.markingScheme : null],
      hscMarkObtained: [(hsc.markObtained != null) ? hsc.markObtained : null],
      hscYearOfPassing: [(hsc.yearOfPassing != null) ? hsc.yearOfPassing : null],
      hscRegistrationNo: [(hsc.registrationNo != null) ? hsc.registrationNo : null],

      othersInstituteName: [(others.instituteName != null) ? others.instituteName : null],
      othersYearOfPassing: [(others.yearOfPassing != null) ? others.yearOfPassing : null],
      othersDescription: [(others.description != null) ? others.description : null],


      // diplomaUniversity: [(diploma.university != null) ? diploma.university : null],
      // diplomaModeOfStudy: [(diploma.modeOfStudy != null) ? diploma.modeOfStudy : null],
      // diplomaMarkingScheme: [(diploma.markingScheme != null) ? diploma.markingScheme : null],
      // diplomaMarkObtained: [(diploma.markObtained != null) ? diploma.markObtained : null],
      // diplomaRegistrationNo: [(diploma.registrationNo != null) ? diploma.registrationNo : null]
    });
  }


  bindAcademicDetails(userForm: UserForm, data) {
    const academicDetails = Object();
    academicDetails.sslc = this.bindSslcDetails(data);
    academicDetails.hsc = this.bindHscDetails(data);
    academicDetails.others = this.bindOthersDetails(data);
    if (academicDetails.sslc != null || academicDetails.hsc != null || academicDetails.others != null) {
      userForm.academicDetails = academicDetails;
    }
    return userForm;
  }

  private bindSslcDetails(data) {
    if (data.sslcInstituteName != null) {
      const sslc = Object();
      sslc.instituteName = data.sslcInstituteName;
      sslc.board = data.sslcBoard;
      sslc.markingScheme = data.sslcMarkingScheme;
      sslc.markObtained = data.sslcMarkObtained;
      sslc.yearOfPassing = data.sslcYearOfPassing;
      sslc.registrationNo = data.sslcRegistrationNo;
      return sslc;
    }
    return null;

  }
  private bindHscDetails(data) {
    if (data.hscInstituteName) {
      const hsc = Object();
      hsc.instituteName = data.hscInstituteName;
      hsc.board = data.hscBoard;
      hsc.markingScheme = data.hscMarkingScheme;
      hsc.markObtained = data.hscMarkObtained;
      hsc.yearOfPassing = data.hscYearOfPassing;
      hsc.registrationNo = data.hscRegistrationNo;
      return hsc;
    }
    return null;
  }

  private bindOthersDetails(data) {
    if (data.othersInstituteName != null) {
      const others = Object();
      others.instituteName = data.othersInstituteName;
      others.description = data.othersDescription;
      others.yearOfPassing = data.othersYearOfPassing;

      // diploma.university = data.diplomaUniversity;
      // diploma.modeOfStudy = data.diplomaModeOfStudy;
      // diploma.markingScheme = data.diplomaMarkingScheme;
      // diploma.markObtained = data.diplomaMarkObtained;
      // diploma.registrationNo = data.diplomaRegistrationNo;
      return others;
    }
    return null;
  }
  buildUserParentsAndCommunicationDetails(userData) {
    let address;
    let parentsDetails = userData.parentsDetails;
    if (parentsDetails == null) {
      parentsDetails = {};
    }
    let communicationDetails = userData.communicationDetails;
    if (communicationDetails == null) {
      communicationDetails = {};
      address = {};
    } else {
      address = communicationDetails.communication;
      if (address == null) {
        address = {};
      }
    }
    return this.formBuilder.group({
      fathersTitle: [(parentsDetails.fathersTitle != null) ? parentsDetails.fathersTitle : null, Validators.required],
      fathersName: [(parentsDetails.fathersName != null) ? parentsDetails.fathersName : null , Validators.required],
      fathersOccupation: [(parentsDetails.fathersOccupation != null) ? parentsDetails.fathersOccupation : null],
      //fathersAnnualIncome: [(parentsDetails.fathersAnnualIncome != null) ? parentsDetails.fathersAnnualIncome : null],
      fathersMobile: [(parentsDetails.fathersMobile != null) ? parentsDetails.fathersMobile : null],
     // fathersAlterMobile: [(parentsDetails.fathersAlterMobile != null) ? parentsDetails.fathersAlterMobile : null],
     // fathersEmail: [(parentsDetails.fathersEmail != null) ? parentsDetails.fathersEmail : null],
      mothersTitle: [(parentsDetails.mothersTitle != null) ? parentsDetails.mothersTitle : null, Validators.required],
      mothersName: [(parentsDetails.mothersName != null) ? parentsDetails.mothersName : null, Validators.required],
      mothersOccupation: [(parentsDetails.mothersOccupation != null) ? parentsDetails.mothersOccupation : null],
     // mothersAnnualIncome: [(parentsDetails.mothersAnnualIncome != null) ? parentsDetails.mothersAnnualIncome : null],
      mothersMobile: [(parentsDetails.mothersMobile != null) ? parentsDetails.mothersMobile : null],
     // mohtersAlterMobile: [(parentsDetails.mohtersAlterMobile != null) ? parentsDetails.mohtersAlterMobile : null],
    //  mothersEmail: [(parentsDetails.mothersEmail != null) ? parentsDetails.mothersEmail : null],
      guardiansDetails: [(parentsDetails.guardiansDetails != null) ? parentsDetails.guardiansDetails : null],
      guardiansTitle: [(parentsDetails.guardiansTitle != null) ? parentsDetails.guardiansTitle : null],
      guardiansName: [(parentsDetails.guardiansName != null) ? parentsDetails.guardiansName : null],
      guardiansOccupation: [(parentsDetails.guardiansOccupation != null) ? parentsDetails.guardiansOccupation : null],
      guardiansMobile: [(parentsDetails.guardiansMobile != null) ? parentsDetails.guardiansMobile : null],
   //   guardiansEmail: [(parentsDetails.guardiansEmail != null) ? parentsDetails.guardiansEmail : null],
      country: [(address.country != null) ? address.country : null, Validators.required],
      state: [(address.state != null) ? address.state : null, Validators.required],
      district: [(address.district != null) ? address.district : null],
    //  city: [(address.city != null) ? address.city : null , Validators.required],
      addressLine1: [(address.addressLine1 != null) ? address.addressLine1 : null, Validators.required],
      addressLine2: [(address.addressLine2 != null) ? address.addressLine2 : null],
      pincode: [(address.pincode != null) ? address.pincode : null, Validators.required]
    });
  }



}
