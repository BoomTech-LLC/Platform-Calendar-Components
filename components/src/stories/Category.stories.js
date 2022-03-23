import CategoryItem from '../lib/CategoryItem'
import { D_CATEGORY, D_WRAPPER_CLASSNAMES, D_UNCATEGORISED } from '../lib/helpers/defaults'
import './main.css'

export default {
  title: "Components/Categories",
  component: CategoryItem,
}

const Template = args => <CategoryItem {...args} />

export const Category = Template.bind({})
Category.args = {
    category: D_CATEGORY,
    wrapperCustomClassNames: D_WRAPPER_CLASSNAMES
}

export const Uncategorised = Template.bind({})
Uncategorised.args = {
  category: D_UNCATEGORISED,
  wrapperCustomClassNames: D_WRAPPER_CLASSNAMES
}