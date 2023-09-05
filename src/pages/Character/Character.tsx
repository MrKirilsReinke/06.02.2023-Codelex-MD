import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Character as CharacterType } from "../Characters/Characters";
import style from "./Character.module.scss";

const getAllCharacter = async (id: string) => {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

  return data;
};

const Character = () => {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();

  const { data, isLoading } = useQuery<CharacterType>({
    queryKey: ["OneCharacter", id],
    queryFn: () => getAllCharacter(id!),
  });

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    nav("/");
    return null;
  }

  const { name, image, gender, status, species, location, origin } = data;

  return (
    <div className={style["character-card"]}>
      <div className={style["character-card__content"]}>
        <img src={image} alt={`${id} PIC`} className={style["character-card__image"]} />
        <div>
          <div className={style["character-card__info"]}>
            <h2>{name}</h2>
          </div>
          <div className={style["character-card__info"]}>
            <h3>{status}</h3>
            <p>{species} - {gender}</p>
          </div>
          <div className={style["character-card__info"]}>
            <h3 className={style["character-card__location"]}>Last known location:</h3>
            <p>{location.name}</p>
          </div>
          <div className={style["character-card__info"]}>
            <h3 className={style["character-card__location"]}>First seen in:</h3>
            <p>{origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
