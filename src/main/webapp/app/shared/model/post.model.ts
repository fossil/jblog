export interface IPost {
    id?: number;
    title?: string;
    author?: string;
    body?: any;
}

export class Post implements IPost {
    constructor(public id?: number, public title?: string, public author?: string, public body?: any) {}
}
