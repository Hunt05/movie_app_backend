import { IMovie } from '@models/types';

export interface IMovieRepository {
    getAllMovies(): Promise<IMovie[]>;
    addMovie(data: IMovie): Record<string, any>;
    getMovieById(data: Record<string, any>): Promise<any>;
    deleteMovieById(data: Record<string, any>): Promise<any>;
    deleteMovies(): Promise<any>;
    updateMovie(data: IMovie): Promise<any>;
}

export default class MovieService {
    private movieRepository: IMovieRepository;

    constructor(movieRepository: IMovieRepository){
        this.movieRepository = movieRepository;
    }

    async getMovies(): Promise<IMovie[]> {
        return this.movieRepository.getAllMovies();
    }

    addMovies(data: IMovie): Record<string, any> {
        return this.movieRepository.addMovie(data);
    }

    async getSingleMovie(data: Record<string, any>): Promise<any> {
        return this.movieRepository.getMovieById(data);
    }

    async deleteSingleMovie(data: Record<string, any>): Promise<any> {
        return this.movieRepository.deleteMovieById(data);
    }

    async deleteAllMovies(): Promise<any> {
        return this.movieRepository.deleteMovies();
    }

    async updateAMovie(data: IMovie): Promise<any> {
        return this.movieRepository.updateMovie(data);
    }
}