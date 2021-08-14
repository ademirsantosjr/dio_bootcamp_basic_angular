export class Course {
    id!: number;
    name!: string;
    imageUrl: string | undefined;
    price: number | undefined;
    code!: string;
    duration: number | undefined;
    rating!: number;
    releaseDate: string | undefined;
    description: string | undefined;
}