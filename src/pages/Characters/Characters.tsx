import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './Characters.module.scss';
import Character from '../Character/Character';

const getAllCharacter = async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');

    return data.results;
};

export interface Character {
    created: string;
    episode: string[];
    gender: 'Male' | 'Female';
    id: number;
    image: string; 
    location: Location;
    name: string;
    origin: Origin;
    species: string;
    status: 'Alive' | 'Dead' | 'unknown';
    type: string;
    url: string;
  }

export interface Origin {
    name: string;
    url: string;
  }

export interface Location {
    name: string;
    dimension: string;
    type: string;
    url: string;
  }

const Characters = () => {
    const {data, isLoading} = useQuery<Character[]>({ queryKey: ['AllCharacters'], queryFn: getAllCharacter });

    console.log({data, isLoading});


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        throw Error('Something went wrong');
    }

    console.log('data', data);
    
    

    return (
        <div className={style.character__container}>
            {data.map(({id, image, name, species, gender, status, location}) => (
                <Link to={`/character/${id}`} key={id} className={style.character__card__as__Link}>
                    <div key={id} className={style.character__card}>
                        <img src={image} alt={`${id} PIC`} className={style.character__image} />
                        <h2>
                            <span className={style.character__name}>
                                {name}
                            </span>
                        </h2>
                        <br />
                        <h3>{gender}</h3>
                        <h3 className={style.character__status}>
                            <span className={style.character__status__dot}></span>
                            {status} - {species}
                        </h3>
                        <h3>{location.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Characters;