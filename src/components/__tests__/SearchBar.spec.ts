import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SearchBar from "../SearchBar.vue";

describe("SearchBar Tests", () => {
  it("should render", () => {
    const wrapper = mount(SearchBar, { props: { isFavorite: false } });
    // has form
    expect(wrapper.find("form").exists()).toBeTruthy();
    // has label
    expect(wrapper.find("label").exists()).toBeTruthy();
    // has input
    expect(wrapper.find("input").exists()).toBeTruthy();
  });
});
