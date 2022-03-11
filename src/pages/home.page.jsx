import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import AnimeCard from "../components/animeCard";
import { searchAnime } from "../redux/anime/anime.action";

import "./home.style.css";

function Homepage({ anime, searchAnime }) {
  const [search, setSearch] = React.useState("");

  const onSearch = (e) => {
    e.preventDefault();
    searchAnime(true, search);
  };
  return (
    <>
      <div className="search-box">
        <InputGroup size="lg">
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            className="search-box"
            placeholder="Search for a anime"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && searchAnime(true, search)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            className="search-box-button"
            onClick={onSearch}
            disabled={!search || anime.loading}
          >
            {anime.loading ? "searching..." : "Go"}
          </Button>
        </InputGroup>
        <div className="url">
          <span style={{ color: "gray" }}>Requesting: </span>{" "}
          <span>
            {`https://api.jikan.moe/v3/search/anime?q=${search}&limit=16&page=${anime.pageNumber}`}
          </span>
        </div>
      </div>
      <div className="anime-list">
        {anime.animeList.map((item, idx) => (
          <AnimeCard item={item} key={idx} />
        ))}
      </div>
      {anime.animeList.length && (
        <Button
          className="load-more"
          onClick={(e) => {
            e.preventDefault();
            searchAnime(false, search);
          }}
          disabled={anime.loading}
        >
          {anime.loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  anime: state.anime,
});

const mapDispatchToProps = (dispatch) => ({
  searchAnime: (isReset, query) => dispatch(searchAnime(isReset, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
