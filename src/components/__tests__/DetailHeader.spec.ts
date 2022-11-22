import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import DetailHeader from "../DetailHeader.vue";
import router from "@/router";

describe("DetailHeader Tests", () => {
  it("should render", () => {
    const wrapper = mount(DetailHeader, {
      props: { isFavorite: false },
      global: {
        plugins: [router],
      },
    });
    // has h1
    expect(wrapper.find("header").exists()).toBeTruthy();
  });
});
