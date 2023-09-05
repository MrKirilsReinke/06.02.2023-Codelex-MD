import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Characters.module.scss";
import Character from "../Character/Character";

export interface Character {
  created: string;
  episode: string[];
  gender: "Male" | "Female";
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Origin;
  species: string;
  status: "Alive" | "Dead" | "unknown";
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
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);

  const getAllCharacter = async (page: number) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);

    return data;
  };

  const { data, isLoading } = useQuery<Character[]>({
    queryKey: ["AllCharacters", page],
    queryFn: () => getAllCharacter(page),
  });

  useEffect(() => {
    if (data) {
      // Append characters from the current page to the existing characters array
      setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
    }
  }, [data]);

  const handleNextPage = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    throw Error("Something went wrong");
  }

  return (
    <div className={style.container}>
      <div className={style["card-container"]}>
        {characters.map(({ id, image, name, species, gender, status, location }) => (
          <Link to={`/character/${id}`} key={id} className={style["character-card"]}>
            <img src={image} alt={`${id} PIC`} className={style["character-card__img"]} />
            <h2 className={style["character-card__name"]}>{name}</h2>
            <br />
            <h3>{gender}</h3>
            <h3 className={style["character-card__status"]}>
              <span
                className={`${style["character-card__status-dot"]} ${
                  status !== "unknown"
                    ? status === "Alive"
                      ? style["character-card__status-dot--alive"]
                      : style["character-card__status-dot--dead"]
                    : style["character-card__status-dot--unknown"]
                }`}></span>
              {status} - {species}
            </h3>
            <h3>{location.name}</h3>
          </Link>
        ))}
      </div>
      {data.info.next !== null && (
        <button className={style.button} onClick={handleNextPage}>
          Show more
        </button>
      )}
    </div>
  );
};

export default Characters;
