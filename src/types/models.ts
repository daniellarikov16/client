export interface Education {
    id: number;
    title: string;
    description: string;
}

export interface WorkExperience {
    id: number;
    workedYears: number;
    description?: string;
}

export interface Employee{
    id: number;
    firstName: string;
    lastName: string;
    middleName?: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    education: Array<Education>;
    WorkExpirience: Array<WorkExperience>;

}

export interface Department{
    id: number;
    name: string;
    descriprion?: string;
    employees: Array<Employee>;
}