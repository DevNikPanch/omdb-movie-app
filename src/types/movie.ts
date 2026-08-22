export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface MovieDetail extends Movie {
    Plot: string;
    Director: string;
    Writer: string;
    Actors: string;
    Genre: string;
    imdbRating: string;
    Runtime: string;
    Response: string;
    Error?: string;
}

export interface SearchResponse {
    Search?: Movie[];
    totalResults?: string;
    Response: string;
    Error?: string;
}
