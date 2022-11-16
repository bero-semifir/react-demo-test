import Card from "./Card";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardProps from "./Card.type";

// Définition de la story (l'intégration du composant)
export default {
    // titre de la story (affiché dans l'interface)
    title: "shared/Card",
    // le composant à tester
    component: Card,
} as ComponentMeta<typeof Card>;

// version de base pour créer le composant
const Template: ComponentStory<typeof Card> = (args: CardProps) => <Card {...args} />

// création d'une story basique
export const Basic = Template.bind({});

Basic.args = {
    title: 'Titre',
    body: 'lorem ipsum doloret sit amet consectatur...',
}

// story avec footer
export const AvecFooter = Template.bind({});

AvecFooter.args = {
    title: 'Titre',
    body: 'lorem ipsum doloret sit amet consectatur...',
    footer: 'Ceci est un footer',
}

export const AvecButton = Template.bind({});

AvecButton.args = {
    title: 'Titre',
    body: 'lorem ipsum doloret sit amet consectatur...',
    buttonLabel: 'Ceci est un bouton',
}

export const Complet = Template.bind({});

Complet.args = {
    title: '« Il y a un espace de convergence pour pousser la Russie à la désescalade », assure Emmanuel Macron au G20...',
    body: `Sur l'accord céréalier, le G20 a « envoyé un message très clair à la Russie », commente Emmanuel Macron. Et l'accord sur l'exportation de céréales doit « absolument être reconduit à la fin de la semaine ». `,
    footer: 'Super article!',
    buttonLabel: 'Tweeter',
    buttonAction: ()=> alert('ok'),
}
