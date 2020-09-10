export interface FilmesDB{
    page          : number,
    results       : FilmeDbResults[],
    total_results : number,
    total_pages   : number

}

export interface FilmeDbResults{
    poster_path     : string ,
    adult           : boolean,
    overview        : string,
    release_date    : string,
    genre_ids       : number[],
    id              : number,
    iginal_title    : string,
    iginal_language : string,
    title           : string,
    backdrop_path   : string,
    popularity      : number,
    vote_count      : number,
    video           : boolean,
    vote_average    : number,
}