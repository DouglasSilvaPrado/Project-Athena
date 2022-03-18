export type Course = {
    id: number;
    name: string;
    description : string;
    duration: number;
    image: string;
}

export type CoursePage = {
    content: Course[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}