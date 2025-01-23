import type { Attribute, Schema } from '@strapi/strapi';

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'menu';
    icon: 'bulletList';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    logo_link: Attribute.Text & Attribute.Required;
    logo_text: Attribute.String & Attribute.Required;
    menu_links: Attribute.Component<'menu.menu-link', true> &
      Attribute.Required;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    icon: 'apps';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    open_in_new_tab: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image-grid';
    icon: 'bulletList';
  };
  attributes: {
    image: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface SectionSectionContent extends Schema.Component {
  collectionName: 'components_section_section_contents';
  info: {
    description: '';
    displayName: 'section_content';
    icon: 'bulletList';
  };
  attributes: {
    content: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 3;
      }>;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    description: '';
    displayName: 'section_grid';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    image_grid: Attribute.Component<'section.image-grid', true>;
    metadata: Attribute.Component<'section.section-metadata'>;
    text_grid: Attribute.Component<'section.text-grid', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'dashboard';
  };
  attributes: {
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 3;
      }>;
    section_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 3;
      }>;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section_two_columns';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'>;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 4;
      }>;
  };
}

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu': MenuMenu;
      'menu.menu-link': MenuMenuLink;
      'section.image-grid': SectionImageGrid;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.text-grid': SectionTextGrid;
    }
  }
}
