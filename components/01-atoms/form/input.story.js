import template from './input.twig';
import DrupalAttribute from 'drupal-attribute';

export default {
  title: 'Atoms/Form/Inputs',
  args: {
    attributes: new DrupalAttribute()
      .setAttribute('type', 'text')
      .setAttribute('value', 'Text input field'),
  },
  parameters: {
    docs: {
      description: {
        component: 'Form inputs.',
      },
    },
  },
};

const Template = args => template({...args});

export const Default = Template.bind({});

export const Search = Template.bind({});
Search.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'search')
    .setAttribute('value', 'Search input field'),
};

export const Password = Template.bind({});
Password.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'password')
    .setAttribute('value', 'Password input field'),
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'checkbox')
    .setAttribute('value', '1'),
};

export const Radio = Template.bind({});
Radio.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'radio')
    .setAttribute('value', '1'),
};


export const Email = Template.bind({});
Email.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'email')
    .setAttribute('value', 'Email input field'),
};


export const Telephone = Template.bind({});
Telephone.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'tel')
    .setAttribute('value', 'Telephone input field'),
};


export const ImageUpload = Template.bind({});
ImageUpload.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'file')
    .setAttribute('accept', 'image/*'),
};


export const FileUpload = Template.bind({});
FileUpload.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'file')
};

export const InputInError = Template.bind({});
InputInError.args = {
  attributes: new DrupalAttribute().addClass('error')
}

export const SearchInError = Template.bind({});
SearchInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'search')
    .setAttribute('value', 'Search input field')
    .addClass('error'),
};

export const PasswordInError = Template.bind({});
PasswordInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'password')
    .setAttribute('value', 'Password input field')
    .addClass('error'),
};

export const CheckboxInError = Template.bind({});
CheckboxInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'checkbox')
    .setAttribute('value', '1')
    .addClass('error'),
};

export const RadioInError = Template.bind({});
RadioInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'radio')
    .setAttribute('value', '1')
    .addClass('error'),
};


export const EmailInError = Template.bind({});
EmailInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'email')
    .setAttribute('value', 'Email input field')
    .addClass('error'),
};


export const TelephoneInError = Template.bind({});
TelephoneInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'tel')
    .setAttribute('value', 'Telephone input field')
    .addClass('error'),
};


export const ImageUploadInError = Template.bind({});
ImageUploadInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'file')
    .setAttribute('accept', 'image/*')
    .addClass('error'),
};


export const FileUploadInError = Template.bind({});
FileUploadInError.args = {
  attributes: new DrupalAttribute()
    .setAttribute('type', 'file')
    .addClass('error'),
};
