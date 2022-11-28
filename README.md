# Vue Testing Documentation
#### Table of contents

-   [Unit Testing](#unit-testing)
-   [Integration Testing](#integration-testing)

# Unit Testing
**Vue Test Utils (VTU)** is a set of utility functions aimed to simplify testing Vue.js components. It provides some methods to mount and interact with Vue components in an isolated manner. **Vitest** is a blazing fast unit test framework powered by Vite.

## Adding VTU & Vitest to your project
Follow this guide to add VTU to your project: [Installation | Vue Test Utils](https://test-utils.vuejs.org/installation/)
Follow this guide to add Vitest to your project: [Getting Started | Vitest](https://vitest.dev/guide/)

Example:

	import { mount } from  '@vue/test-utils'  
  
	// The component to test  
	const MessageComponent = {  
		template: '<p>{{ msg }}</p>',  
		props: ['msg']  
	}  
	  
	test('displays message', () => {  
		const wrapper = mount(MessageComponent, {  
		props: {  
		msg: 'Hello world'  
		}  
	})  
	  
	// Assert the rendered text of the component  
	expect(wrapper.text()).toContain('Hello world')  
	})
	
To test a component it must be wrapped, to do this use **mount()**. When you use mount, a VueWrapper is returned with a number of useful methods for testing. A VueWrapper is a thin wrapper around your component instance.

**Props** can be included in the **mount** function:

	const wrapper = mount(AddFavoriteButton, {  
		props: { isFavorite: isFavorite },  
	});

## Wrapper methods
**All the methods are explained here:** [Wrapper methods | Vue Test Utils](https://test-utils.vuejs.org/api/#wrapper-methods)

	it("should render", () => {  
		const wrapper = mount(SearchBar, { props: { isFavorite: false } });  
		// has form  
		expect(wrapper.find("form").exists()).toBeTruthy();  
		// has label  
		expect(wrapper.find("label").exists()).toBeTruthy();  
		// has input  
		expect(wrapper.find("input").exists()).toBeTruthy();  
	});
I use **find()** here to know if a component is being rendered correctly with all elements.

	it("should emit when button is clicked", async () => {  
		const wrapper = mount(AddFavoriteButton, {  
			props: { isFavorite: isFavorite },  
		});  
	  
		await wrapper.find("button").trigger("click");  
	  
		expect(wrapper.emitted().click).toHaveLength(1);  
		expect(wrapper.emitted()).toHaveProperty("click");  
	});

I use **trigger()**  and **emitted()**  here. With trigger a DOM event is triggered, and with emitted I get back a list of all the events that are emitted.

**WARNING**
You should use **await** when you call **trigger()** to ensure that Vue updates the DOM before you make an assertion.

# Integration Testing

**Cypress Component Testing** provides a component workbench for you to quickly build and test components from multiple front-end UI libraries — no matter how simple or complex.

The differences between component and end-to-end testing in-depth: [Choosing a Testing Type](https://docs.cypress.io/guides/core-concepts/testing-types#What-you-ll-learn)

