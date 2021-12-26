export class UserForm {
  public id: string;
  public name: string;
  public title: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public mobile: string;
  public email: string;
  public alternateEmail: string;
  public birthDay:string;
  public birthMonth :string;
  public birthYear : string;
  public dateOfBirth: string;
  public password: string;
  public gender: string;
  public bloodGroup: string;
  public community: string;
  public religion: string;
  public motherTongue: string;
  public placeOfBirth: string;
  public sourceOfAdmission: string;
  public differentlyAbled: string;
  public status: string;
  public studiedFromIndia: string;
  public nationality: string;
  public campus :string;
  public parentsDetails: {
    fathersTitle: string;
    fathersName: string;
    fathersOccupation: string;
    fathersAnnualIncome: string;
    fathersMobile: string;
    fathersAlterMobile: string;
    fathersEmail: string;
    mothersTitle: string;
    mothersName: string;
    mothersOccupation: string;
    mothersAnnualIncome: string;
    mothersMobile: string;
    mohtersAlterMobile: string;
    mothersEmail: string;
    guardiansDetails: string;
    guardiansTitle: string;
    guardiansName: string;
    guardiansOccupation: string;
    guardiansMobile: string;
    guardiansEmail: string;
  };
  public checkArray:[];
  public communicationDetails: {
    communication: {
      addressLine1: string;
      addressLine2: string;
      city: string;
      district: string;
      state: string;
      country: string;
      pincode: string;
    };
  };
  public academicDetails: {
    sslc: {
      InstituteName: string;
      board: string;
      markingScheme: string;
      markObtained: string;
      yearOfPassing: string;
      registrationNo: string;
      University: string;
      modeOfStudy: string;
    };
    hsc: {
      InstituteName: string;
      board: string;
      markingScheme: string;
      markObtained: string;
      yearOfPassing: string;
      registrationNo: string;
      University: string;
      modeOfStudy: string;
    };
    others: {
      InstituteName: string;
      board: string;
      markingScheme: string;
      markObtained: string;
      yearOfPassing: string;
      registrationNo: string;
      University: string;
      modeOfStudy: string;
      description:String;
    };
  };
  public attachments: {
    sslc: {
      versionId: String;
      fileKey: String;
      url: String;
    };
    hsc: {
      versionId: String;
      fileKey: String;
      url: String;
    };
    others: {
      versionId: String;
      fileKey: String;
      url: String;
    };
    tc: {
      versionId: String;
      fileKey: String;
      url: String;
    };
    community: {
      versionId: String;
      fileKey: String;
      url: String;
    };
    nativeFront: {
      versionId: String;
      fileKey: String;
      url: String;
    };
    nativeBack: {
      versionId: String;
      fileKey: String;
      url: String;
    };
    profilePic: {
      versionId: String;
      fileKey: String;
      url: String;
    };

  };

}
