export type AppCollection = {
    id?: string;
    title?: string;
    category?: string;
    description?: string;
    hostPhotoURL?: string;
    price?: string;
};
export type AppQuestion = {
    id: string;
    name: string;
    species: string;
    date: string;
    description: string;
    title?: string,
    opinion?: string,
    suggests?: string

}