import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Character as CharacterType } from '../Characters/Characters';
import style from './Character.module.scss';

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

    const {name, image, gender, status, species, location, origin} = data;

    return (
        <div className={style.container}>
            <div className={style.character}>
                <img src={image} alt={`${id} PIC`} className={style.character__image} />
                <div className={style.character__info}>
                    <h2>{name}</h2>
                    <br />
                    <h3>{status}</h3>
                    <h3>{species} - {gender}</h3>
                    <br />
                    <h3><span className={style.character__location}>Last known location:</span></h3>
                    <h3>{location.name}</h3>
                    <br />
                    <h3><span className={style.character__location}>First seen in:</span></h3>
                    <h3>{origin.name}</h3>
                </div>
            </div>

        </div>
    );
};

export default Character;