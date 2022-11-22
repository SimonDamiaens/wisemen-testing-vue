import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeHeader from "../HomeHeader.vue";

describe("HomeHeader Tests", () => {
  it("should render", () => {
    const wrapper = mount(HomeHeader, { props: { modelValue: "" } });
    // has h1
    expect(wrapper.find("h1").exists()).toBeTruthy();
  });
});
