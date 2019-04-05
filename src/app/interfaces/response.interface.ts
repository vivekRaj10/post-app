import { Post } from './post.interface';

export interface Response {
    exhaustiveNbHits: boolean;
    hits: Post[];
    hitsPerPage: number;
    nbHits: number;
    nbPages: number;
    page: number;
    params: string;
    processingTimeMS: number;
    query: string;
}
