/// <reference types="cypress" />

describe("Searchbar", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon",
      { fixture: "pokemons.json" }
    );

    cy.visit("/");
  });

  before(() => {
    cy.intercept(
      "GET",
      "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon",
      { fixture: "pokemons.json" }
    );
  });

  it("visits the app root url", () => {
    cy.contains("h1", "Pokédex");

    cy.get(".pokemon-list a").should("have.length", 20);
  });

  it("search one pokemon with name", () => {
    const pokemonName = "bulbasaur";

    cy.get("[data-test=search-pokemon]").type(pokemonName);

    cy.get(".pokemon-list a").should("have.length", 1);
    cy.get(".pokemon-list a").contains(pokemonName);
  });

  it("search one pokemon with number", () => {
    const pokemonNumber = 5;
    cy.get("[data-test=search-pokemon]").type(pokemonNumber.toString());

    cy.get(".pokemon-list a").should("have.length", 1);
    cy.get(".pokemon-list a").contains(pokemonNumber);
  });

  it("search pokemons with type", () => {
    cy.get("[data-test=search-pokemon]").type("Fire");

    cy.get(".pokemon-list a").should("have.length", 3);
  });

  it("search pokemons with type", () => {
    cy.get("[data-test=search-pokemon]").type("Water");

    cy.get(".pokemon-list a").should("have.length", 3);
  });
});
