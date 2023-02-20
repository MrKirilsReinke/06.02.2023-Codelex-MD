import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Character as CharacterType } from '../Characters/Characters';

const getAllCharacter = async (id: string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    return data;
};

const Character = () => {
    const { id } = useParams<{id: string}>();
    const nav = useNavigate();

    const {data, isLoading} = useQuery<CharacterType>({ queryKey: ['OneCharacter', id], queryFn: () => getAllCharacter(id!) });

    console.log(data);
    
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        nav('/');
        return null;
    }

    const {name, image, gender, status, species, location} = data;

    return (
        <div>
            <img src={image} alt={`${id} PIC`} />
            <h2>{name}</h2>
            <h3>{gender}</h3>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{location.name}</h3>
        </div>
    );
};

export default Character;