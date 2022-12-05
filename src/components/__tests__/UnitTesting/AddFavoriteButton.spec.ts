import { describe, it, expect } from "vitest";
import Heart from "../assets/heart.png";
import RedHeart from "..//assets/red-heart.png";
import { mount } from "@vue/test-utils";
import AddFavoriteButton from "../../AddFavoriteButton.vue";

describe("AddFavoriteButton Tests", () => {
  it("should render", () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: isFavorite },
    });

    // has button
    expect(wrapper.find("button").exists()).toBeTruthy();
    // has img
    expect(wrapper.find("img").exists()).toBeTruthy();
  });

  const isFavorite = true;
  it("should be red-heart if is a favorite", () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: isFavorite },
    });

    // has RedHeart image
    expect(wrapper.find("img").attributes("src")).toBe(RedHeart);
  });

  it("should be heart if is not a favorite", () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: !isFavorite },
    });

    // has Heart image
    expect(wrapper.find("img").attributes("src")).toBe(Heart);
  });

  it("should emit when button is clicked", async () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: isFavorite },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted().click).toHaveLength(1);
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("should emit event with 1 empty argument", async () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: isFavorite },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted().click).toHaveLength(1);
    expect(wrapper.emitted().click[0]).toEqual([]);
  });

  it("should have prop isFavorite", () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: isFavorite },
    });

    expect(wrapper.props("isFavorite")).toBe(isFavorite);
  });

  it("should change prop isFavorite", () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: isFavorite },
    });

    expect(wrapper.props("isFavorite")).toBe(isFavorite);
  });
});
