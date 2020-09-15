export interface Popular{
    poster_path: string,
    adult: boolean,
    overview: string
    release_date: string,
    genre_ids: [],
    id: string,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
}

export interface ListPopular{
    page : number,
    results : Popular[]
}

export interface Genre      {
    id: string,
    name: string
  }

export interface  Production_Company {
      id: string,
      logo_path: string,
      name: string,
      origin_country: string
    }

export interface Country{
    iso_3166_1: string,
    name: string
}

export interface Language{
    iso_639_1: string,
    name: string
}

export interface Movie{
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres: Genre[],
    homepage: string ,
    id: string,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview:  string,
    popularity: number,
    poster_path: string,
    production_companies: Production_Company[],
    production_countries: Country[],
    release_date: string,
    revenue: string,
    runtime: string,
    spoken_languages: Language[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }