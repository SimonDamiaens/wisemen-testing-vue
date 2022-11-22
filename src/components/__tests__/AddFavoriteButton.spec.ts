import { describe, it, expect } from "vitest";
import Heart from "../assets/heart.png";
import RedHeart from "..//assets/red-heart.png";
import { mount } from "@vue/test-utils";
import AddFavoriteButton from "../AddFavoriteButton.vue";

describe("AddFavoriteButton Tests", () => {
  it("should render", () => {
    const wrapper = mount(AddFavoriteButton, { props: { isFavorite: false } });
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
    expect(wrapper.find("img").attributes("src")).toBe(RedHeart);
  });

  it("should be heart if is not a favorite", () => {
    const wrapper = mount(AddFavoriteButton, {
      props: { isFavorite: !isFavorite },
    });
    expect(wrapper.find("img").attributes("src")).toBe(Heart);
  });

  it("should emit when button is clicked", async () => {
    const wrapper = mount(AddFavoriteButton, { props: { isFavorite: false } });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
