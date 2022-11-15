/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import CardProps from "./Card.type";


describe('Card', () => { 
    const cardProps: CardProps = {
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit maxime nihil animi cupiditate provident iure quas aperiam eligendi sapiente. Omnis iusto rerum repellat quis expedita ea! Tenetur, nobis explicabo.
        Eligendi, maiores. Quisquam ab in cumque placeat doloremque amet similique facere autem magni corrupti odit quidem maxime, deleniti nostrum sed repellendus officiis inventore totam error itaque quibusdam! Repellat, laborum sit.
        Dolorem aspernatur fuga, fugit deserunt cum eaque, autem rem modi facere ad officiis illum sunt explicabo neque accusantium corporis nam dolore quibusdam, est adipisci itaque esse? Eaque repellat est molestias.`,
        title: "maCarte",
        footer: "monFooter",
        buttonLabel: "monButton",
    }

    it('doit fournir un rendu', () => { 
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const card = screen.getByText("maCarte");
        expect(card).toBeInTheDocument();
     });
    
    it('doit afficher le titre dans une section avec classe card-title', () => { 
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const element = document.getElementsByClassName("card-title")[0];
        expect(element.textContent).toBe(cardProps.title);
    });

    it('doit afficher le body dans une section avec classe card-body', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />)
        const element = document.getElementsByClassName("card-body")[0];
        expect(element.textContent).toBe(cardProps.body);
    });

    it('doit afficher le footer dans une section avec classe card-footer quand j\'ai une props footer', () => {
        render(<Card title={cardProps.title} body={cardProps.body} footer={cardProps.footer} />)
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element.textContent).toBe(cardProps.footer);
    });

    it('ne doit pas afficher le footer quand je n\'ai pas de props footer', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element).toBeUndefined();
    });

    it("doit avoir un bouton avec un label quand je mets la props", ()=>{
        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} />)
        const element = screen.getByText(cardProps.buttonLabel as string);
        expect(element).toBeInTheDocument();
    });

    it('ne doit pas afficher le button quand je n\'ai pas de props buttonLabel', () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const element = document.getElementsByTagName("button")[0];
        expect(element).toBeUndefined();
    });
    
    it("doit appeler l'action du bouton quand on click dessus", () => {

        // fonction espion
        const handleClick = jest.fn();

        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} buttonAction={handleClick} />);
        const button = document.querySelector('button');

        // cliquer sur le bouton
        fireEvent.click(button!);

        // vérifier que la fonction déclencher par le click a été appelée
        expect(handleClick).toHaveBeenCalled();
    })

 });
