"use client";

import styles from "./style.module.scss";
import Image from "next/image";

import back from "@/../public/images/back.png";
import search from "@/../public/images/search.png";
import add from "@/../public/images/add.png";
import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import group from "@/../public/images/group-gold.svg";
import ActionButton from "@/components/ActionButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

function UserProfileView() {
  const searchParams = useSearchParams();
  const [searching, setSearching] = useState(false);
  const [userCode, setUserCode] = useState();
  const [user, setUser] = useState();
  const [films, setFilms] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const code = searchParams.get("userCode");
    setUserCode(code);
    setUser(JSON.parse(localStorage.getItem(code)));
  }, [searchParams]);

  useEffect(() => {
    fetchFilms();
  }, [searching]);

  const apiUrl = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGY0OWJhYzI0MGM0ZDUxNjc0NmU3YTUxYTk1NzMwYyIsInN1YiI6IjY0OWI2MGE1YjFmNjhkMDExZTRmZDZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UpH3dl_nrCmrdBzwQQ2JfYHXNXf9AWBYBqvJCnBt_Ak";

  async function fetchFilms(title) {
    const fetchUrl = title
      ? `${apiUrl}/search/movie?include_adult=false&language=en-US&page=1&query=${title}`
      : `${apiUrl}/movie/popular?include_adult=false&language=en-US&page=1`;

    await fetch(fetchUrl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFilms(res.results.filter((v) => v.poster_path));
      });
  }

  const openFilmSearch = () => {
    setSearching(true);
  };

  const closeFilmSearch = () => {
    setSearching(false);
  };

  const searchHandler = (event) => {
    if (event) event.preventDefault();
    const title = inputRef.current.value;
    fetchFilms(title);
  };

  const saveUserFilm = (newFilm) => {
    if (user?.films.find((film) => film.id === newFilm.id)) {
      alert("This film is already added to your collection");
      return;
    }
    localStorage.setItem(
      userCode,
      JSON.stringify({
        name: user.name,
        films: [
          ...user.films,
          {
            id: newFilm.id,
            poster_path: newFilm.poster_path,
          },
        ],
      })
    );
    setUser(JSON.parse(localStorage.getItem(userCode)));

    alert("Film added succesfully!");
  };

  const deleteUserFilm = (filmIndex) => {
    localStorage.setItem(
      userCode,
      JSON.stringify({
        name: user.name,
        films: user.films.filter((_, index) => index !== filmIndex),
      })
    );
    setUser(JSON.parse(localStorage.getItem(userCode)));

    alert("Film removed succesfuly!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <div className={styles.groupImgContainer}>
          <Image src={group} alt="group icon" fill />
        </div>
        <p className={styles.usersHeader}>{user?.name}</p>
        {searching ? (
          <div className={styles.libraryContainer}>
            <form
              className={styles.searchBarContainer}
              onSubmit={searchHandler}
            >
              <input
                type="text"
                placeholder="Enter movie name"
                className={styles.searchBar}
                ref={inputRef}
              />
            </form>
            <div className={styles.filmList}>
              {films.length ? (
                films.map((film, index) => (
                  <div
                    className={styles.film}
                    key={index}
                    onClick={() => {
                      saveUserFilm(film);
                    }}
                  >
                    <Image src={imageUrl + film.poster_path} fill />
                  </div>
                ))
              ) : (
                <p>Ups! Film not found :( </p>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.libraryContainer}>
            <div className={styles.filmList}>
              {user?.films.length ? (
                user?.films.map((film, index) => (
                  <div
                    className={styles.film}
                    key={index}
                    onClick={() => {
                      deleteUserFilm(index);
                    }}
                  >
                    <Image src={imageUrl + film.poster_path} fill />
                  </div>
                ))
              ) : (
                <p>
                  Seems you don't have any films added. Let's change that! :)
                </p>
              )}
            </div>
          </div>
        )}
        {searching ? (
          <div className={styles.actionBtnContainer}>
            <ActionButton
              className={styles.backBtn}
              action={closeFilmSearch}
              image={back}
              imageAlt={"back icon"}
            />
            <ActionButton
              className={styles.searchFilmBtn}
              action={searchHandler}
              image={search}
              imageAlt={"search icon"}
            />
          </div>
        ) : (
          <div className={styles.actionBtnContainer}>
            <ActionButton
              className={styles.addFilmBtn}
              action={openFilmSearch}
              image={add}
              imageAlt={"add icon"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfileView;
