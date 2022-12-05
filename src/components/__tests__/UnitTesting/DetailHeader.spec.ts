import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DetailHeader from "../../AddFavoriteButton.vue";
import router from "@/router";

describe("DetailHeader Tests", () => {
  const isFavorite = true;

  it("should render", () => {
    const wrapper = mount(DetailHeader, {
      props: { isFavorite: isFavorite },
      global: {
        plugins: [router],
      },
    });
    // has h1
    expect(wrapper.find("header").exists()).toBeTruthy();
  });
});
