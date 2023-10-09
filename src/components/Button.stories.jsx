import Button from './Button';

export default {
    title: 'Test/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
}




export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger',
    color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    color: 'primary',
};
