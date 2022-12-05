/// <reference types="cypress" />

describe("Searchbar", () => {
  const pokemonName = "bulbasaur";

  before(() => {
    cy.intercept(
      "GET",
      "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon",
      { fixture: "pokemons.json" }
    );

    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/1", {
      fixture: "pokemon.json",
    });

    cy.visit("/");
  });

  it("visits the app root url", () => {
    cy.visit("/");

    cy.contains("h1", "Pokédex");
    cy.get(".pokemon-list a").should("have.length", 20);
  });

  it("search pokemon", () => {
    cy.get("[data-test=search-pokemon]").type(pokemonName);

    cy.get(".pokemon-list a").should("have.length", 1);
  });

  it("select pokemon", () => {
    cy.get(".pokemon-list a").click();

    cy.contains("h2", pokemonName);
  });

  it("add to favorites", () => {
    cy.get("button")
      .find("img")
      .should("have.attr", "src", "/src/assets/heart.png");

    cy.get(".addFavorite").click();

    cy.get("button")
      .find("img")
      .should("have.attr", "src", "/src/assets/red-heart.png");
  });

  it("go back", () => {
    cy.get(".backButton").click();

    cy.contains("h1", "Pokédex");
  });

  it("click on favorites", () => {
    cy.get(".favoriteButton").click();

    cy.contains("h2", "Favorites");
    cy.get(".pokemon-list a").should("have.length", 1);
    cy.get(".pokemon-list a").contains(pokemonName);
  });

  it("select pokemon", () => {
    cy.get(".pokemon-list a").click();

    cy.contains("h2", pokemonName);
  });

  it("remove from favorites", () => {
    cy.get("button")
      .find("img")
      .should("have.attr", "src", "/src/assets/red-heart.png");

    cy.get(".addFavorite").click();

    cy.get("button")
      .find("img")
      .should("have.attr", "src", "/src/assets/heart.png");
  });

  it("go back", () => {
    cy.get(".backButton").click();

    cy.contains("h1", "Pokédex");
  });

  it("click on favorites", () => {
    cy.get(".favoriteButton").click();

    cy.contains("h2", "Favorites");
    cy.get(".pokemon-list a").should("have.length", 0);
  });
});
