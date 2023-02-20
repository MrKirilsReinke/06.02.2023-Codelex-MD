import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div>
            This is Characters page
            <br /><br />
            <div className="character__container">
                {data.map(({id, image, name, species, gender, status, location}) => (
                    <Link to={`/character/${id}`} key={id}>
                        <div key={id}>
                            <img src={image} alt={`${id} PIC`} className="character__image" />
                            <h2>{name}</h2>
                            <h3>{gender}</h3>
                            <h3>{status}</h3>
                            <h3>{species}</h3>
                            <h3>{location.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Characters;