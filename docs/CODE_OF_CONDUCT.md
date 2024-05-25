# Code of conduct :books: :boom:


The project is designed in a modular way, in order to keep it clean and reusable,
it is essential to follow this code of conduct.**It was written by developers for new developers**.
We ask you to follow this following architecture.

## :clipboard:  Table of content

- [Code of conduct :books: :boom:](#code-of-conduct-books-boom)
	- [:clipboard:  Table of content](#clipboard--table-of-content)
	- [:triangular\_ruler: Global project architecture](#triangular_ruler-global-project-architecture)
	- [:tokyo\_tower: Component structure](#tokyo_tower-component-structure)
		- [:house: Global component structure](#house-global-component-structure)
		- [:ledger: How a component should be organized](#ledger-how-a-component-should-be-organized)
			- [Atom example](#atom-example)
			- [Base component definition (i.e Organisms)](#base-component-definition-ie-organisms)
		- [:ledger: How a stories folder should be organized](#ledger-how-a-stories-folder-should-be-organized)
	- [:pencil: Theming with Material UI (MUI 5)](#pencil-theming-with-material-ui-mui-5)
	- [:black\_nib: Authors](#black_nib-authors)

## :triangular_ruler: Global project architecture

![global_archi](/public/assets/global_archi.png)

>`docs` contain the documents like the CODE_OF_CONDUCT.md, other README.md and more.

>`components` regroup all the components you will use in the project, it is based on the [Atomic Design](../README.md).

>`config` contain things that refer to API, navigation, API Wrapper, etc...

>`pages` also based on the Atomic Design, it will contain the `template` that you have made.

>`stories` basics storybook files. It has the same structure as the `components` folder.

>`utils` contains functions that you might sometimes use routinely.

>`assets` contains all the assets that you will use in the project, like images, icons, etc...

>`test` contains all the tests that you will use in the project, like unit tests, integration tests, etc...

>`tools` contains functions that you could use for a particular situation, the difference between utils is the fact that, utils must be reusable functions compared to tools which are for a special thing.

> `types` contains all the types that you will use in the project, like interfaces, types, etc...

> `services` contains all the services that you will use in the project, like API, etc...


## :tokyo_tower: Component structure

Based on the Atomic Design.

### :house: Global component structure

![global_component_archi](/public/assets/component_archi.png)


### :ledger: How a component should be organized

#### Atom example

For this purpose, we take the `Button` as an example.

![atom_example_component](/public/assets/component_atom_example.png)

>`index.tsx` is the function component.

:warning: Components must be stateless and no style have to be set on the component container, the component (atoms especially) have to be reusable everywhere. :warning:

#### Base component definition (i.e Organisms)
We suggest you to create a base component definition for each component type (atoms, molecules, organisms, templates, pages). When needed. What it means ?

It means that sometimes you have to pass some properties (props) to your component, and you want to be sure that the component will receive the props that you want. So you have to create a base component definition with useController.

The purpose of the useController is to define the props that your component will receive. It will be easier to use your component and to know what props you have to pass to your component.

![base_component_definition](/public/assets/base_component_definition.png)

### :ledger: How a stories folder should be organized
![stories_archi](/public/assets/stories_archi.png)

As you can see, the structure is the same as the `components` folder.
If you want to create a story for a component, you have to create a folder with the same name as the component and create a `index.stories.tsx` file.

## :pencil: Theming with Material UI (MUI 5)

Check the [Material UI documentation](https://mui.com/customization/theming/) for more information.

## :black_nib: Authors

* **Hiba Mateur**
