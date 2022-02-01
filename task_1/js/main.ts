interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attributes: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string){
    return(firstName[0]+". "+lastName);
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
